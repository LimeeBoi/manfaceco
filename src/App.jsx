import './css/App.css';
import creditsImg from './img/credits.png';
import bruhImg from './img/bruh.png';
import leftArrowImg from './img/left-arrow.svg';
import rightArrowImg from './img/right-arrow.svg';
import { useState, useContext, createContext } from 'react';

const Context = createContext(null);
function App() {
  const [index, setIndex] = useState(0); // current page
  return (
    <div className="App">
      <header className="App-header">
        <Context.Provider
          value={{
            next: () => setIndex(index + 1),
            prev: () => setIndex(index - 1)
          }}
        >
          <Intro/>
        </Context.Provider>
      </header>
    </div>
  );
}

function Intro() {
  return (
    <div className="intro">
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
    <div className="about-us">
      <h2>About Us</h2>
      <div className="flex-row">
        <img
          className="med-img"
          src={creditsImg}
          alt="*CREDITS*"
        />
        <p style={{marginTop: '5vmin'}}>
          Welcome to Man Face Co, where we specialize in creating hilarious and relatable memes that will make you burst out laughing. 
          Our team of meme makers are dedicated to bringing a smile to your face and sharing our unique sense of humor with the world. 
          From pop culture references to everyday situations, our memes cover a wide range of topics that everyone can relate to. 
          We believe that laughter is the best medicine and our goal is to spread joy and happiness through our memes.
        </p>
      </div>
      <p style={{marginTop: '0vmin'}}>
        Man Face Co. was founded in 2021 by a group of friends who shared a love for creating and sharing memes.
        Starting as a small online community, our team quickly gained a following for our clever and relatable content.
        As our popularity grew, we expanded our reach to various social media platforms, showcasing our memes to a wider audience.
        With a strong focus on humor and creativity, Man Face Co. became known for providing a much-needed laugh to people's daily lives.
        Today, we continue to produce high-quality memes that bring joy and laughter to our followers, and we are excited to see where our brand will go in the future.
      </p>
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
