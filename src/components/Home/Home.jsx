import React from "react";
import { Link } from "react-router-dom";
import About from "../About";
import Hero from "../Hero";
import SubjectCards from "../SubjectCards";
import Header from "../Header";
import Contributors from "../Contributors";
import MSP from "../../assets/msp.jpg";

const home = () => {
  return (
    <>
      <Hero />
      <About />
      <SubjectCards />
      {/* <Contributors FirstName={"Mr. Safal"} LastName={"Piya"} source={MSP}/> */}
    </>
  );
};

export default home;

/*
<div className=' ml-44 mr-44 mt-40  min-h-screen bg-slate-50' >
<h1 className=' text-xl text-red-600'> Choose your Course !! </h1>
   <Link className="nice  text-start"  to='/ds'>  <img src='dsa.jpg'/> DS</Link>
   <Link className="nice" to='/nm'> NM</Link>
   <Link className="nice" to='/ca'> CA</Link>
   <Link className="nice" to='/stats'> STATS</Link>
   <Link className="nice" to='/cg'> CG</Link>
   </div>
   */
