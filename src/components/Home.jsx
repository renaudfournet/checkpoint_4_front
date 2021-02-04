import HomeCard from "./HomeCard";
import { headerimg } from '../images';

import "../index.css"

import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

function Home() {

  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0, 
      behavior: 'smooth',
    });
  }

  const name = {
      display: 'flex',
      justifyContent: 'center',
      fontSize: 60,
      color: 'white',
      padding: '50px',
    },
    header = {
      backgroundColor: 'black'
    },
    verticalLine = {
      borderLeft: "solid",
      height: 100,
      left: 50,
      marginLeft: "50%",
      color: "white",
      marginTop: 20,
      marginBottom: 30,
    },
    presentation = {
      display: 'flex',
      justifyContent: 'center',
      color: "white",
    },
    city= {
      display: 'flex',
      justifyContent: 'center',
    },
    scroll= {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '90px',
      color: "white"
    };;
  return (
    <div style={header}>
      <h3>
        <div>
          <span className="title" style={name}>VERBAL KINT'S GONE</span>
        </div>
        <p style={city}> based in Rennes </p>
      </h3>
      <div style={verticalLine}></div>

      <p style={presentation}>Welcome on the VKG's website. You can find all our stuffs, music and video here. Please be free to contact us for management</p>
      <p style={scroll}>Scroll down to see more</p>
      <div style={{display: "flex", justifyContent: "center"}}>
      <ArrowDownwardIcon type="button" onClick={handleScroll} style={{fontSize: 80, color: "white"}} />
      </div>
      <img style={{width: '100%', marginTop: '150px'}} src={headerimg} alt='header showing ceoncert' />
      <HomeCard />
    </div>
  );
}


export default Home;
