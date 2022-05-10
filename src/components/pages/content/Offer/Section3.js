import { useContext, useState } from "react"
import { LangContext } from "../../../../Freedom"

export default function Section3(){
    const lang = useContext(LangContext)
    const [offerNumber,setOfferNumber] = useState('')
    const [offerNumber2,setOfferNumber2] = useState('')

    return(
        <>
            <div className="so3">
                <div className="so3-element">
                    <div className="title">{lang.offer.how_to_del}</div>
                    <div className="inputs">
                        <input value={offerNumber} onChange={(e)=>setOfferNumber(e.target.value)} type="text" placeholder={lang.offer.offer_number}/>
                        <input value={offerNumber2} onChange={(e)=>setOfferNumber2(e.target.value)} type="text" placeholder={lang.offer.offer_number2}/>
                    </div> 
                    <button id="request">{lang.offer.request}</button>
                </div>
                <div className="so3-element">
                    <div className="title">{lang.offer.how_to_del}</div>
                    <div className="inputs">
                        <div className="inputs-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
                        <input value={offerNumber} onChange={(e)=>setOfferNumber(e.target.value)} type="text" placeholder={lang.offer.offer_number}/>
                        <input value={offerNumber2} onChange={(e)=>setOfferNumber2(e.target.value)} type="text" placeholder={lang.offer.offer_number2}/>
                    </div> 
                    <button id="request">{lang.offer.request}</button>
                </div>
            </div>
        </>
    )
}