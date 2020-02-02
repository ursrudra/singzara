import React,{useState} from 'react';
import './App.css';
import Menu from './menu/Menu';
import SoftButton from './soft-button/SoftButton';
import { FaBars, FaMonument, FaPlay, FaPause, FaStepBackward,FaStepForward } from 'react-icons/fa';
import Disk from './disk/Disk';
import Track from './track/Track'
import AlbumDetails from './album-details/AlbumDetails';
import SongsList from './songs-list/SongsList';
function App() {
  const [isPlaying, setIsPlaying]  = useState(false);
  const [activeSong, setActiveSong] = useState(1);
  const togglePlay = () => setIsPlaying(!isPlaying);
  const updateActiveSong = ( id ) => {
    setActiveSong(id);
  };
  const songs = [
    {
        id:1,
        title: 'Pranam',
        singer:'Sunitha',
        duration:500,
        pic:'https://i.scdn.co/image/89b92c6b59131776c0cd8e5df46301ffcf36ed69'
    },
    {
       id:2,
       title: 'Varsham',
       singer:'SPB',
       duration:600,
       pic:'https://images.pexels.com/photos/1370545/pexels-photo-1370545.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=150'
   },
   {
       id:3,
       title: 'Godavari',
       singer:'Sunitha',
       duration:500,
       pic:'https://images.pexels.com/photos/92078/pexels-photo-92078.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=150'
   },
   {
       id:4,
       title: 'Pranam',
       singer:'Sunitha',
       duration:500,
       pic:'https://images.pexels.com/photos/1001850/pexels-photo-1001850.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=150'
   },
   {
      id:5,
      title: 'Varsham',
      singer:'SPB',
      duration:600,
      pic:'https://images.pexels.com/photos/6464/desk-technology-music-white.jpg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=150'
  },
  {
      id:6,
      title: 'Godavari',
      singer:'Sunitha',
      duration:500,
      pic:'https://images.pexels.com/photos/756242/pexels-photo-756242.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=150'
  }
]
  return (
    <div className="App">
      <Menu noShadow>
        <SoftButton square>
          <FaMonument />
        </SoftButton>
        <SoftButton square>
          <FaBars />
        </SoftButton>
      </Menu>
      <Disk
       isPlaying={isPlaying}
        bg={songs[activeSong - 1].pic}
      />
      <Track/>
      <AlbumDetails song={songs[activeSong - 1]}/>
      <SongsList songs={songs} update={updateActiveSong}/>
      <div className="controls">
        <Menu noShadow>
          <SoftButton>
            <FaStepBackward />
          </SoftButton>
          <SoftButton callme={togglePlay} isActive={isPlaying} >
          { isPlaying ? <FaPause/>:<FaPlay />}
          </SoftButton>
          <SoftButton>
            <FaStepForward />
          </SoftButton>
        </Menu></div>
    </div>
  );
}


export default App;
