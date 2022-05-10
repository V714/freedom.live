import { useContext } from "react"
import { LangContext } from "../../../../Freedom"

export default function Section4(){
    const lang = useContext(LangContext)
    return(
        <>
            <div className="so4">
                <div className="so4-element">
                    <div className="column">
                        <b>{lang.offer.tile1_title}</b>
                        <p>{lang.offer.tile1_desc}</p>
                    </div>
                    <div className="photo-tile">
                        <img alt="refugee girl" src="/images/template.webp"/>
                    </div>
                </div>
                <div className="so4-element">
                    <div className="column">
                        <b>{lang.offer.tile2_title}</b>
                        <p>{lang.offer.tile2_desc}</p>
                    </div>
                    <div className="photo-tile">
                        <img alt="refugee girl" src="/images/template.webp"/>
                    </div>
                </div>
            </div>
        </>
    )
}