import React from 'react'
import './Track.scss'
export default function Track() {
  return (
    <div className='track'>
      <div className="track__progress"></div>
      <div className="track__details">
       <div className="track__details-totaltime">1:36</div>
       <div className="track__details-remainingtime">4:36</div>
      </div>
    </div>
  )
}

