import { useContext } from "react"
import { LangContext } from "../../../../Freedom"

export default function Section1(props){
    const lang = useContext(LangContext)
    return(
        <>
            <div className="s1">
                <div className="column">
                    <h1>{lang.refugee.title}</h1>
                    <h1>{lang.refugee.title2}</h1>
                    <h2>{lang.refugee.desc}</h2>
                    <div className="buttons">
                        <a role="button" href="#s2">{lang.refugee.find_help}</a>
                        <a role="button" onClick={()=>props.setTab(true)}>{lang.refugee.offer_help}</a>
                    </div>
                </div>
                <div id="photo">
                    <img alt="refugee girl" src="/images/template.webp"/>
                </div>
            </div>
        
        </>
    )
}