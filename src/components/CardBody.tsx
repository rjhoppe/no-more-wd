type CardBodyProps = { 
  company: string, 
  url: string | 'N/A',
  useWD: boolean | null
}

export const CardBody = (props: CardBodyProps) => {
  return (
    <div className="card-body">
      <p className="company-name">Does {props.company} use WD?</p>
      {props.url == 'NA' 
        ?
        <div className="card-body-domain-not-found">
          <p>`No ${props.company} WD domain found`</p>
        </div> 
        : 
        <div className="card-body-domain-found">
          <p>`${props.company} WD domain found at: ${props.url}</p> `
        </div>
      }
    </div>
  )
}