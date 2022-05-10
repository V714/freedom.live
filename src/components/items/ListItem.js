import { useEffect, useState } from "react"


export default function ListItem(props){

    return(props?
        <li>
                        
                        <div className="list-element profile">
                            <div className="name">{props.item.organization==='true'?"Organization":<></>}</div>
                            <div className="picture"><img alt="Picture" className={props.item.organization==='true'?"orgImg":""} src={props.item.imgPath}/></div>
                        </div>
                        <div className="list-element country">
                            <div className="name">{props.lang.refugee.country}</div>
                            <div className="data"><img alt="Country Flag" src="/images/at.webp"/>{props.item.country}</div>
                        </div>
                        <div className="list-element city">
                            <div className="name">{props.lang.refugee.city}</div>
                            <div className="data">{props.item.city}</div>
                        </div>
                        <div className="list-element what">
                            <div className="name">{props.lang.refugee.what}</div>
                            <div className="data">{props.item.what}</div>
                        </div>
                        <div className="list-element description">
                            <div className="name">{props.lang.refugee.description}</div>
                            <div className="data">{props.item.description}</div>
                        </div>
                        <div className="list-element suited">
                            <div className="name">{props.lang.refugee.suited_for}</div>
                            <div className="data">
                                <div>
                                    {props.item.suited.baby==='true'?<img alt="babies" src="/images/baby.svg"/>:<></>}
                                    {props.item.suited.pets==='true'?<img alt="pets" src="/images/pets.svg"/>:<></>}
                                </div>
                                <div>{props.item.suited.beds}<img alt="beds" src="/images/bed.svg"/></div>
                                <div>{props.item.suited.people}<img alt="people" src="/images/person.svg"/></div>
                            </div>
                        </div>
                        <div className="list-element contact">
                            <div className="name">{props.lang.refugee.contact}</div>
                            <div>
                                <div className="data-number">{props.item.contact.mobile}</div>
                                <div className="data-email">{props.item.contact.email}</div>
                            </div>
                        </div>
                        <div className="list-element avaible_q">
                            <div className="name">{props.lang.refugee.avaible_q}</div>
                            <div className="data" style={{color:(props.item.avaible==='true'?"#20FF51":"#ff2051")}}>{props.item.avaible==='true'?"avaible":"not avaible"}</div>
                        </div>

                        <div className="reference-id">#{props.item.id}</div>
                    </li>:<></>
    )
}