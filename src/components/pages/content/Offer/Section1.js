import { useContext } from "react"
import { LangContext } from "../../../../Freedom"

export default function Section1(){
    const lang = useContext(LangContext)
    return(
        <>
            <div className="so1">
                <div className="title">{lang.offer.title} <b>{lang.title}?</b></div>
                <div className="line"></div>
                <div className="steps">
                    <div className="step">
                        <div className="circle"></div>
                        <div className="description">{lang.offer.title_1step}</div>
                    </div>
                    <div className="step">
                        <div className="circle"></div>
                        <div className="description">{lang.offer.title_2step}</div>
                    </div>
                    <div className="step">
                        <div className="circle"></div>
                        <div className="description">{lang.offer.title_3step}</div>
                    </div>
                </div>
            </div>
        </>
    )
}