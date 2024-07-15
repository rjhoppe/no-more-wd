export const getCareerUrl = (): string => {
  const careerUrl = document.getElementsByTagName('a')[15].href
  return careerUrl
}

export const getCompany = (): string => {
  const company = document.getElementsByTagName('a')[15].href.split('/')[4]
  return company
}