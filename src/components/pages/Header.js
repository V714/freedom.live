import { useContext, useEffect, useRef } from "react"
import {LangContext} from '../../Freedom'
import "../styles/header.css"

export default function Header(props){
    const labelColor = useRef()
    const lang = useContext(LangContext)

    useEffect(()=>{
        labelColor.current.style.color=props.tab?'#fff':"#B5BAC7"
    },[props.tab])

    return(<>
        <header>
            <div id="top_bar"> 
                <div className="top-element">
                    <img alt="logo" width="78" height="78" id="site_logo" src="/images/logo.webp"/>
                    <img alt="site name" width="260" height="34" id="site_name" src="/images/name.webp"/>
                </div>
                <div className="top-element">
                    <img alt="ukraine flag" width="130" height="86" id="flag" src="/images/ua.webp"/>
                </div>
                <div className="top-element">
                    <div className="switch-button" ref={labelColor}>
                        <input onChange={()=>props.setTab(!props.tab)} checked={props.tab} id="tab" name="tab" className="switch-button-checkbox" type="checkbox"></input>
                        <label className="switch-button-label" htmlFor="tab"><span className="switch-button-label-span">{lang.tab1}</span></label>
                    </div>
                </div>
            </div>
        </header>
    </>)
}