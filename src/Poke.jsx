import React, {useEffect, useState} from "react";
import { Cards } from "./components/Cards";
import logo from '../src/media/img/logo.png'

function Poke() {
  return ( 
    <>
      <center>
       <img id="logo" src={logo} alt="logo" />
      </center>
      <div> 
         <Cards/>
      </div>
    </> 
  );
}

export default Poke;
