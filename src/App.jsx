// obese import
import './css/App.css';
import creditsImg from './img/credits.png';
import bruhImg from './img/bruh.png';
import lennyImg from './img/lenny.png';
import noobImg from './img/noob.png';
import waterImg from './img/water.png';
import leftArrowImg from './img/left-arrow.svg';
import rightArrowImg from './img/right-arrow.svg';
import { useState, useContext, createContext } from 'react';

const Context = createContext(null); // CONTEXT
function App() { // da app
  const pages = [ // PAGES
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
  const images = [ // IMAGES
    lennyImg,
    null,
    noobImg
  ];
  const [index, setIndex] = useState(3); // current page
  const [ca, setCa] = useState(''); // current animation
  return (
    <div 
      className="App" 
      style={{animation: ca}}
    >
      <Context.Provider
          value={{
            next: () => { // next page
              setCa('1s ease-in-out 0s 1 normal none running move-right-0'); // move to the right (departing)
              setTimeout(() => {
                setIndex(index + 1); // let component know to render next page
              }, 600); // delay
              setTimeout(() => setCa('1s ease-in-out 0s 1 normal none running move-right-1'), 950); // move to the right (arriving)
              if (index >= pages.length - 3) { // IS ON BORDER
                setTimeout(() => { // minigaem
                  setCa('1.5s ease-in-out 0s 1 normal none running move-left-0'); 
                  setTimeout(() => {
                    setIndex(index); // go back right after page render (cuz its a minigaem)
                  }, 1100); // make it hard to press arrow
                  setTimeout(() => setCa('1.5s ease-in-out 0s 1 normal none running move-left-1'), 1450); 
                }, 2000)
              }
            },
            prev: () => {
              setCa('1s ease-in-out 0s 1 normal none running move-left-0'); // move to the left (departing)
              setTimeout(() => {
                setIndex(index - 1);
              }, 600);
              setTimeout(() => setCa('1s ease-in-out 0s 1 normal none running move-left-1'), 950); // move to the left (arriving)
              if (index <= 2) {
                setTimeout(() => { // minigaem
                  setCa('1.5s ease-in-out 0s 1 normal none running move-right-0');
                  setTimeout(() => {
                    setIndex(index);
                  }, 1100);
                  setTimeout(() => setCa('1.5s ease-in-out 0s 1 normal none running move-right-1'), 1450);
                }, 2000);
              }
            }
          }}
      >
        <header className="App-header top" style={{
          //backgroundImage: 'url(' + images[cii] + ')'
        }}>
          {pages[index]}
        </header>
      </Context.Provider>
    </div>
  );
}

function Bruh({ severity }) {
  if (severity === 'smol') {
    return (
      <div className="bruh page">
        <h2>
          Nice you made it to teh border! <br/> (ur not gonna cross it)
          <br/> <br/>
        </h2>
        <Navigation
          text="bruh"
          noob={true}
        />
      </div>
    );
  } else if (severity === 'big boi') {
    return (
      <div className="bruh page">  
        <h1>no</h1>
        <Navigation
          text="pls stop"
        />
      </div>
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
        Contact us for more!
      </p>
      <ul>
        <li>
          Customized Meme Creation - We offer personalized meme creation services for individuals and creative groups that we trust. 
          Our team of creative experts can turn any idea into a hilarious meme that will make your audience laugh and share.
        </li>
        <li>
          Meme Marketing - Memes have become a powerful tool for marketing and branding. 
          We help businesses and brands leverage the power of memes to reach a wider audience, increase engagement, and build brand awareness.
        </li>
        <li>Meme Merchandise - Show off your love!</li>
      </ul>
      <p>
        <b>
          Dear readers, Are you tired of scrolling through endless memes that just don't make you laugh?
          Look no further, because Man Face Co. is here to provide you with the best quality memes that will leave you in stitches.
          What sets us apart from other meme creators? We are dedicated to creating original 
          and relatable content that will have you sharing with your friends and family. 
          Our team of talented creators work tirelessly to ensure that our memes are fresh, funny, and always on point.
        </b>
      </p>
      <ul>
        <li>Originality: Our memes are created by our team of talented designers and writers, ensuring that each one is unique and original.</li>
        <li>
          Humor: We pride ourselves on creating memes that are guaranteed to make people laugh. 
          We have a knack for finding the perfect balance of wit, sarcasm, and relatability in our memes.
        </li>
        <li>Relevance: Our memes are always timely and relevant, covering a wide range of topics and current events.</li>
      </ul>
      <img
        className="big-img"
        src={waterImg}
        alt="bruh"
      />
      <Seperator/>
      <Navigation
        text="OUR WORK"
      />
    </div>
  );
}

function ContactUs() {
  return (
    <div className="working-hours page">
      <h2>Contact</h2>
      <h2>Working Hours</h2>
      <p>Mon - Fri: 9:00am - 3:00pm</p>
    </div>
  );
}

function Navigation({ text, noob }) { // this uses the context
  const context = useContext(Context);
  if (noob) return (
    <nav className="center">
      <img
        className="icon button light"
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
        className="icon button light"
        src={rightArrowImg}
        alt=" "
        onClick={() => setTimeout(context.next)}
      />
    </nav>
  );
  else return (
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
        className="icon button"
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
