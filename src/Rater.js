import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Rater(props) {
    let rating=props.rating;
    let p=[];
    for(let i=1;i<=rating;i++)
    {
       p.push( <FontAwesomeIcon icon = {faStar}/>);
    }
  return (
    <div>
        {p}
        <FontAwesomeIcon icon={faStar}/>
    </div>
  )
}
