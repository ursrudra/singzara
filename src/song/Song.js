import React from 'react';
import './Song.scss';

export default function Song({song:{id,title,pic,duration},update}) {
  return (
    <div className="song" key={id} onClick={()=>update(id)}>
           <img src={pic} alt={title}/>
            <p>{title}</p>
            <p>{(duration / 60).toFixed(2)}</p>
        </div>
  )
}
