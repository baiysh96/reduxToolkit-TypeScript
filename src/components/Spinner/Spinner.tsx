import React, { FC } from 'react'
import './Spinner.css'

const Spinner: FC = (): JSX.Element => {
  return (
    <div>
      <div className="opposites">
        <div className="opposites bl"></div>
        <div className="opposites tr"></div>
        <div className="opposites br"></div>
        <div className="opposites tl"></div>
      </div>
    </div>
  )
}

export default Spinner
