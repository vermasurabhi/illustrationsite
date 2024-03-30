import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (<>
    <p className={`decop`}>
                opps.you hit the wrong page. 
              </p>
              <Link to="/"  className="my-auto"><button type="button" className="btn btn-light">← Back</button></Link>
              </>
  )
}

export default ErrorPage