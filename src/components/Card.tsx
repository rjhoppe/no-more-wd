import { checkAllPossibleDomains, checkAppDB } from "../utils/query";
import { CardBody } from "./CardBody";
import { wdCompanies } from "../data/data";
import { getCareerUrl, getCompany } from "../utils/company";

// uninstall react router
import { useEffect, useState } from "react";

type CardProps = {
  toggleOpen: () => void
  title: string,
}

const doesCorpUseWD = () => {
  const company = getCompany()
  const initCheck = checkAppDB(company, wdCompanies)
  if (initCheck == true) {
    return true
  }

  checkAllPossibleDomains(company)
  return false
}

const getTabUrl = async () => {
  const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
  const urlVal = tab.url || ''
  console.log(urlVal)
  return urlVal
}

export const Card = (props: CardProps) => {
  const [url, setUrl] = useState("chrome://newtab/");
  const [company, setCompany] = useState<string>("")
  const [companyUrl, setCompanyUrl] = useState<string>("")
  const [useWD, setUseWD] = useState<boolean | null>(null);
  const pageUpdate = chrome.tabs.onUpdated.addListener(() => {
    getTabUrl()
  });

  // const pageUpdate = chrome.webNavigation.onCompleted.addListener(() => {
  //   getTabUrl()
  // });

  useEffect(()=> {
    const newUrl = getTabUrl()
    if (newUrl.toString() !== url) {
      setUrl(newUrl.toString())
      console.log(newUrl)
    }

    if (newUrl.toString().startsWith('https://www.linkedin.com/jobs/')) {
      setCompany(getCompany())
      setCompanyUrl(getCareerUrl())
      setUseWD(doesCorpUseWD())
      console.log(company)
    }
  }, [pageUpdate])

  return (
    <div className="card-container">
      <h1 className="card-title">{props.title}</h1>
      {
        (company !== "" && companyUrl !== "")
        // ? <p>Please navigate to the LinkedIn jobs section</p>  
        ? <CardBody 
            company={company} 
            url={companyUrl}
            useWD={useWD}
          />
        : <p>Please navigate to the LinkedIn jobs section</p>  
      }
      <button onClick={() => props.toggleOpen()}>Hide</button>
    </div>
  )
}