import React from 'react'
import blankDisplay from "./mypic.jpg";
import TicketCard from './TicketCard'

const PictureDisplay = ({ticket}) => {
  return (
    <div className="picture-container">
      <div className="img-container" >
      <img src={ticket.display ? ticket.display : blankDisplay} alt={"photo of" + ticket.owner} height="60" width="60"/>
      </div>
      
    </div>
  )
}

export default PictureDisplay