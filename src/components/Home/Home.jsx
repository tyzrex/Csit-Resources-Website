import React from "react";
import { Link } from "react-router-dom";
import About from "../Main-Components/About";
import Contributors from "../Main-Components/Contributors";
import Hero from "../Main-Components/Hero";
import Semestersdropdown from "../Main-Components/Semesters-dropdown";
import SubjectCards from "../Main-Components/SubjectCards";

const home = () => {
  return (
    <>
      <Hero />
      <About />
      <Semestersdropdown />
      <SubjectCards />
      <Contributors />
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
