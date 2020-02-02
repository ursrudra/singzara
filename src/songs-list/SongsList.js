import React from 'react'
import './SongsList.scss'
import Song from '../song/Song';
export default function SongsList({songs,update}) {
 
 const songsList = songs.map(song => {
     return (
       <Song song={song} key={song.id} update={update}/>
     )
 });
  return (
    <div className="songslist">
      {
          songsList
      }
    </div>
  )
}
