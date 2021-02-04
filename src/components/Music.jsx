import React, { useEffect, useState } from 'react';
import '@vime/core/themes/default.css';
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'

import axios from 'axios';

import { recto, verso, vkg } from '../images';
import {Song1, Song2, Song3, Song4, Another, Ghost} from '../music/index';

const url = "http://localhost:5000/albums";
const url2 = "http://localhost:5000/songs";

function Music () {

  const [albums, setAlbums] = useState([])
  const [songs, setSongs] = useState([])

  useEffect(() => {
    axios.get(url).then(res => {
console.log(res)
setAlbums(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  useEffect(() => {
    axios.get(url2).then(res => {
console.log(res)
setSongs(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  const audio = [
      {
  cover: verso,
  musicSrc: Song1,
  name: "My Bloody Week",
      },
      {
  cover: verso,
  musicSrc: Song2,
  name: "Doomsday Killer"
      },
      {
  cover: verso,
  musicSrc: Song3,
  name: "Jesus, I Love You Since I Met Jason Pierce"
      },
      {
  cover: verso,
  musicSrc: Song4,
  name: "Surfer"
      },
      {
  cover: vkg,
  musicSrc: Another,
  name: "Another Life"
      },
      {
  cover: vkg,
  musicSrc: Ghost,
  name: "A Ghost Of A Chance"
      }
]

  return  <div style={{ color: "white"}}>
            <div style={{ color: "white", display: 'flex', justifyContent: 'center', marginTop: '100px', fontSize: "40px"}}>Albums</div>
            <div style={{ color: "white", display: 'flex', justifyContent: 'space-evenly', marginTop: '100px'}}>   
              {albums.map(item => <p key={item.id}>{item.name}</p>)}
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <img style={{ height: "20%", width: "20%" }} src={recto} alt="album cover" />
              <img style={{ height: "20%", width: "20%", border: "white", borderWidth: "2px" }} src={vkg} alt="album cover" />
            </div>
            <div style={{marginTop: "80px"}}>
            {songs.map(item => <p style={{display: "flex", justifyContent: "center", marginTop: "10px"}} key={item.id}>{item.name} {item.duration}</p>)}
              
            <ReactJkMusicPlayer audioLists={audio} autoPlay={false} />
          </div>
          </div>
}

export default Music;
