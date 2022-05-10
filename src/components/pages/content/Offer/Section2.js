import { useContext, useEffect, useRef, useState } from "react"
import { LangContext } from "../../../../Freedom"
import Countries from "react-select-country"
import PhoneInput from 'react-phone-number-input'

export default function Section2(){
    const lang = useContext(LangContext)
    const countryRef = useRef()

    const [picture,setPicture] = useState(undefined)
    const [name,setName] = useState('')
    const [city,setCity] = useState('')
    const [telephone,setTelephone] = useState('')
    const [emailShow,setEmailShow] = useState('')
    const [emailNotShow,setEmailNotShow] = useState('')
    const [organization,setOrganization] = useState(false)
    const [availability,setAvailability] = useState(true)
    const [baby,setBaby] = useState(false)
    const [pets,setPets] = useState(false)
    const [description,setDescription] = useState('')
    const [people,setPeople] = useState(1)

    const submit = (e) => {

        e.preventDefault()
        /* console.log({
            name:name,
            country:countryRef.current.selected.value,
            city:city,
            telephone:telephone,
            emailShow:emailShow,
            emailNotShow:emailNotShow,
            organization:organization,
            availability:availability,
            baby:baby,
            pets:pets,
            description:description,
            people:people
        }) */
    }

    return(
        <>
            <div className="so2">
                <div className="form-top">
                    <div className="photo">
                        <div className="photo-place">{picture?<img alt="uploaded photo" src={URL.createObjectURL(picture)}/>:<></>}</div>
                        <div className="photo-buttons">
                        <label htmlFor="upload_photo_input" id="upload_photo">{lang.offer.upload_photo}</label>
                        <input type="file" id="upload_photo_input" name="upload_photo_input" placeholder={lang.offer.upload_photo} onChange={(event) => {setPicture(event.target.files[0])}}/>
                        <button id="delete_photo" onClick={()=>setPicture(undefined)}>{lang.offer.delete_photo}</button>
                        </div>
                    </div>
                    <button id="save_changes">{lang.offer.save_changes}</button>
                </div>
                <form onSubmit={(e)=>submit(e)}>
                    <div className="columns">
                        <div className="column">
                            <div className="field-name">{lang.offer.name}</div>
                            <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder={lang.offer.name_placeholder}/>
                            <div className="field-name">{lang.offer.country}</div>
                            
                            <div className="country-div">
                                <img alt="arrow" src="/images/arrow.svg"/>
                                <Countries ref={countryRef}/>
                            </div>
                            <div className="field-name">{lang.offer.city}</div>
                            <input value={city} onChange={(e)=>setCity(e.target.value)} type="text" placeholder={lang.offer.city_placeholder}/>
                            <div className="field-name">{lang.offer.people_number}</div>
                            <input value={people} onChange={(e)=>setPeople(e.target.value)} type="number" min="0" step="1" placeholder={lang.offer.people_number}/>
                            <div className="labels1">
                                <label value={availability} onChange={()=>setAvailability(!availability)} htmlFor="availability">{lang.offer.availability}
                                    <input name="availability" id="availability" type="checkbox" /><div><span></span></div>
                                </label>
                                <label htmlFor="organization">
                                    <input className="checkbox" value={organization} onChange={()=>setOrganization(!organization)} name="organization" id="organization" type="checkbox" />
                                    <span className="checkbox-span"></span>{lang.offer.organization}
                                </label>
                            </div>
                        </div>
                        <div className="column">
                            <div className="field-name">{lang.offer.contact}</div>
                            <div id="phone_input">
                                <img alt="arrow" src="/images/arrow.svg"/>
                                <PhoneInput country="UA" placeholder={lang.offer.telephone_placeholder} value={telephone} onChange={setTelephone}/>
                            </div>
                            <input value={emailShow} onChange={(e)=>setEmailShow(e.target.value)} type="email" placeholder={lang.offer.email_placeholder}/>
                            
                            <div className="email-with-info">
                                <input value={emailNotShow} onChange={(e)=>setEmailNotShow(e.target.value)} type="email" placeholder={lang.offer.email2_placeholder}/>
                                <a id="email_info" ><img alt="info" src="/images/email_info.webp" /></a>
                                <span id="tooltip_email" className="tooltip" >
                                    <div className="tooltip-name">Email</div>
                                    <div className="tooltip-desc">Lorem ipsum dollar sit amit elitskfk lkakl klasjflkjlfLorem ipsum dollar sit l klasjflkjlf</div>
                                </span>
                            </div>
                            <div className="field-name">{lang.offer.suited_for}</div>
                            <div className="labels2">
                                <label value={baby} onChange={()=>setBaby(!baby)} htmlFor="baby">
                                    <input name="baby" className="checkbox"  id="baby" type="checkbox" />
                                    <span className="checkbox-span"></span>{lang.offer.baby}
                                </label>
                                <label htmlFor="pets">
                                    <input value={pets} className="checkbox" onChange={()=>setPets(!pets)} name="pets" id="pets" type="checkbox" />
                                    <span className="checkbox-span"></span>{lang.offer.pets}
                                </label>
                            </div>
                        </div>
                        <div className="column">
                            <div className="field-name">{lang.offer.description}</div>
                            <textarea id="description_area" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                        </div>
                    </div>
                    
                    <div className="captcha-div">  
                        <div className="captcha-inner">
                            <div className="title">Captcha</div>
                            <div className="captcha" id="captcha"></div>
                        </div>
                        <div className="captcha-buttons">
                            <button id="cancel">{lang.offer.cancel}</button>
                            <input type="submit" value={lang.offer.add} id="add"/>
                        </div>
                    </div>
                </form>

                <div className="line-s2"></div>
            </div>
        </>
    )
}