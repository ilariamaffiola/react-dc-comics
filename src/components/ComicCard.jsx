import React from 'react'

const ComicCard = (props) => {
  return (
    
    <div className='card'>
        <div className="card-img">
            <img src={props.img} alt="action comics" />
        </div>
        <div className="card-title">
            <h5>{props.title}</h5>    
        </div>  
    </div>
    
    )
}

export default ComicCard
