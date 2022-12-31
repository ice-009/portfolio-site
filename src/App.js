import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Hello, Welcome TO </p>
        <h1>Armaan's PORTFOLIO SITE</h1>
      </section>
    </>
  );
};

const About = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section" style={{paddingTop:'40px'}}>
        <p>I am a ML/AI Enthusiast & FULL-STACK Developer</p>
        <h1>I am currently a Mathematics & Computing </h1>
        <p>Sophomore in</p>
        <h1>NATIONAL INSTiTUTE OF TECHNOLGY</h1>
        <p>Hamirpur</p>
        <h1 className="hero-section">Download my resume here:<a href="www.google.com">222</a></h1>
      </section>
    </>
  );
};


const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p className="lowercase">Email: <a href="mailto:armaanshukla06@gmail.com"> armaanshukla06@gmail.com</a></p>
        <p> Mobile : +919877146680</p>
        <p className="lowercase">Github: www.github.com/ice-009</p>
        <h1></h1>
      </section>
    </>
  );
};
const Coffee = () =>{
  return (
    <>
    <Navbar/>
    <section className="hero-section">
      <h1>BUY ME A COFFEE</h1>
      <p> <a href="ko-fi.com/armaanshukla">Click Here</a></p>
    </section>
    </>
  )
}

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>

      <Route path="/coffee">
        <Coffee />
      </Route>
    </Switch>
  );
};

export default App;
