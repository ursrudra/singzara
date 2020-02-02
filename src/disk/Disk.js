import React from 'react'
import './Disk.scss';
export default function Disk({bg, isPlaying}) {
  return (
    <div className={ isPlaying ? 'disk disk--rotate': 'disk'} style={{backgroundImage:`url(${bg})`}}>
      
    </div>
  )
}
