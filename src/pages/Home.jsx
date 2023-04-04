import { Link } from "react-router-dom";

import heroImg from "../img/group.png";
import pcImg from "../img/pc.png";
import cardOne from "../img/card-1.png";
import cardTwo from "../img/card-2.png";
import cardThree from "../img/card-3.png";
import "../styles/Home.css";

const Home = () => {
  return (
    <>
      <section className='hero'>
        <h1>Welcome to your one stop shop for all of your code snippets</h1>
        <div className='window-container'>
          <img src={heroImg} alt='' />
        </div>
      </section>
      <section className='why'>
        <div className='text'>
          <h2>Why use Code Cards?</h2>
          <p>
            Code Cards allow you to store your favorite code snippets in a place
            where you can access them quickly and easily.
          </p>
          <p>
            Create a free account today and keep track of all your snippets.
          </p>
        </div>
        <div className='image-block'>
          <img src={pcImg} alt='' />
        </div>
      </section>
      <div className='grid-container'>
        <img src={cardOne} alt='' />
        <img src={cardTwo} alt='' />
        <img src={cardThree} alt='' />
      </div>
      <section className='get-started'>
        <h2>Get Started Today!</h2>
        <h3>Make a free account and start saving your code!</h3>
        <Link to='/signup'>Sign Up</Link>
        <Link to='/login'>Log In</Link>
      </section>
    </>
  );
};

export default Home;
