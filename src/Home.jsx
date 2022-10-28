import React from 'react'
import { useEffect,useState } from 'react';

import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import JsonData from "./data/data.json";
import { Services } from "./components/services";
import { Contact } from "./components/contact";

export const Home =()=> {
    
  const [landingPageData, setLandingPageData] = useState({});
    useEffect(()=>{
        setLandingPageData(JsonData);
    },[])
  return (
    <div>
      
      <input accept="image/*" id="icon-button-file" type="file" capture="environment" />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <Services data={landingPageData.Services} />
      <About data={landingPageData.About} />
      <Contact data={landingPageData.Contact} />
    </div>
  )
}

export default Home