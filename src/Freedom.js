import { createContext, useEffect, useState } from 'react';
import Header from './components/pages/Header';
import Footer from './components/pages/Footer';
import { getLanguage } from './components/functions/init';
import axios from 'axios';
import Refugee from './components/pages/content/Refugee';
import Offer from './components/pages/content/Offer';
import './components/styles/responsive.css';

export const LangContext = createContext()

export default function Freedom() {
  const [tab,setTab] = useState(false) // false - REFUGEE, true - OFFER
  const [ready,setReady] = useState(false)
  const [lang,setLang] = useState(undefined)

  useEffect(()=>{
    getLang()
  },[])

  useEffect(()=>{
    if(lang)setReady(true)
  },[lang])

  const getLang = async() => {
    const data2 = await getLanguage("en",axios)
    setLang(data2)
  }

  return (ready?
    <LangContext.Provider value={lang}>
      <Header tab={tab} setTab={setTab}/>
      { tab ? <Offer/> : <Refugee setTab={setTab}/> }
      <Footer/>
    </LangContext.Provider>
    :
    <>
      <img id='spinner' alt='spinner' src='/images/spinner.svg'/>
    </>
  );
}
