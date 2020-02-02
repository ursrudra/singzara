import React from 'react'
import './AlbumDetails.scss'
export default function AlbumDetails({song:{title, singer}}) {
  return (
    <div className="album">
    <p>from {title}</p>
    <p>sung by {singer}</p>
    </div>
  )
}
