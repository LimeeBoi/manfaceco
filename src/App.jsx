import './css/App.css';
import creditsImg from './img/credits.png';
import bruhImg from './img/bruh.png';
import leftArrowImg from './img/left-arrow.svg';
import rightArrowImg from './img/right-arrow.svg';
import { useState, useContext, createContext } from 'react';
const Context = createContext(null);
function App() {
  const pages = [
    <Bruh/>,
    <Bruh severity="big boi"/>, 
    <Bruh severity="smol"/>, 
    <Intro/>, 
    <AboutUs/>, 
    <OurWork/>,
    <Bruh severity="smol"/>, 
    <Bruh severity="big boi"/>,
    <Bruh/>
  ];
  const [index, setIndex] = useState(3); // current page
  const [ca, setCa] = useState(''); // current animation
  console.log(index);
  return (
    <div 
      className="App" 
      style={{animation: ca}}
    >
      <Context.Provider
          value={{
            next: () => {
              setCa('1s ease-in-out 0s 1 normal none running move-right-0'); // move to the right (departing)
              setTimeout(() => setIndex(index + 1), 600);
              setTimeout(() => setCa('1s ease-in-out 0s 1 normal none running move-right-1'), 950); // move to the right (arriving)
              if (index >= pages.length - 3) {
                console.log('e')
                setTimeout(() => { // minigaem
                  setCa('1.5s ease-in-out 0s 1 normal none running move-left-0'); 
                  setTimeout(() => setIndex(index), 1100);
                  setTimeout(() => setCa('1.5s ease-in-out 0s 1 normal none running move-left-1'), 1450); 
                }, 2000)
              }
            },
            prev: () => {
              setCa('1s ease-in-out 0s 1 normal none running move-left-0'); // move to the left (departing)
              setTimeout(() => setIndex(index - 1), 600);
              setTimeout(() => setCa('1s ease-in-out 0s 1 normal none running move-left-1'), 950); // move to the left (arriving)
              if (index <= 2) {
                setTimeout(() => { // minigaem
                  setCa('1.5s ease-in-out 0s 1 normal none running move-right-0');
                  setTimeout(() => setIndex(index), 1100);
                  setTimeout(() => setCa('1.5s ease-in-out 0s 1 normal none running move-right-1'), 1450);
                }, 2000);
              }
            }
          }}
      >
        <header className="App-header center">
          {pages[index]}
        </header>
      </Context.Provider>
    </div>
  );
}

function Bruh({ severity }) {
  if (severity === 'smol') {
    return (
      <>
        <h1>
          Nice you made it to teh border! (ur not gonna cross it)
        </h1>
        <Navigation
          text="bruh"
        />
      </>
    );
  } else if (severity === 'big boi') {
    return (
      <>  
        <h1>no</h1>
        <Navigation
          text="pls stop"
        />
      </>
    );
  } else {
    throw new Error('Okay, you crossed the border. Welcome to Brazil!');
  }
}

function Intro() {
  return (
    <div className="intro page">
      <h1>Man Face Co.</h1>
      <h3>We make memes.</h3>
      <img
        className="med-img"
        src={bruhImg}
        alt="theres supposed to be an img here but u hav nigerian internet speeds."
      />
      <Seperator/>
      <Navigation
        text={'INTRO'}
      />
    </div>
  );
}

function AboutUs() {
  return (
    <div className="about-us page">
      <h2>About Us</h2>
      <div className="flex-row center">
        <img
          className="med-img"
          src={creditsImg}
          alt="*CREDITS*"
        />
        <p className="center">
          Welcome to Man Face Co, where we specialize in creating hilarious and relatable memes that will make you burst out laughing. 
          Our team of meme makers are dedicated to bringing a smile to your face and sharing our unique sense of humor with the world. 
          From pop culture references to everyday situations, our memes cover a wide range of topics that everyone can relate to. 
          We believe that laughter is the best medicine and our goal is to spread joy and happiness through our memes.
        </p>
      </div>
      <p>
        Man Face Co. was founded in 2021 by a group of friends who shared a love for creating and sharing memes.
        Starting as a small online community, our team quickly gained a following for our clever and relatable content.
        As our popularity grew, we expanded our reach to various social media platforms, showcasing our memes to a wider audience.
        With a strong focus on humor and creativity, Man Face Co. became known for providing a much-needed laugh to people's daily lives.
        Today, we continue to produce high-quality memes that bring joy and laughter to our followers, and we are excited to see where our brand will go in the future.
      </p>
      <Seperator/>
      <Navigation
        text="ABOUT US"
      />
    </div>
  );
}

function OurWork() {
  return (
    <div className="our-work page">
      <h2>Our Work</h2>
      <p>
        Man Face Co. is taking over the meme game with their hilarious and relatable content. 
        With a team of talented creators, this company is constantly churning out fresh and original memes that never fail to make us laugh. 
        Their memes cover a wide range of topics, from random things and theories to current events and trending topics. 
        No matter what you're interested in, Man Face Co. has something for you.
        We offer:
      </p>
      <Seperator/>
      <Navigation
        text="OUR WORK"
      />
    </div>
  );
}

function Navigation({ text }) { // this uses the context
  const context = useContext(Context);
  return (
    <nav className="center">
      <img
        className="icon"
        src={leftArrowImg}
        alt=" "
        onClick={() => setTimeout(context.prev)}
      />
      <p style={{
        fontSize: '4vmin',
        fontWeight: '600',
        fontFamily: 'monospace'
      }}>{text}</p>
      <img
        className="icon"
        src={rightArrowImg}
        alt=" "
        onClick={() => setTimeout(context.next)}
      />
    </nav>
  );
}

function Seperator() {
  return (
    <h2 
      className="seperator"
      style={{
        fontFamily: 'monospace'
      }}
    >—————————————————————————————————————</h2>
  );
}

export default App;
