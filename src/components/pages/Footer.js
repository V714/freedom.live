import { useContext } from "react"
import { LangContext } from "../../Freedom"
import "../styles/footer.css"

export default function Footer(){

    const lang = useContext(LangContext)

    return(lang?<>
        <footer>
            <div id="bottom_bar">
                <div className="left">
                    <div className="title">{lang.footer.contact}</div>
                    <div className="desc">{lang.footer.contact_desc}</div>
                    <div className="columns">
                        <div className="column-left">
                            <div className="row-left">E-mail:</div>
                            <div className="row-left">Instagram:</div>
                            <div className="row-left">Twitter:</div>
                        </div>
                        <div className="column-right">
                            <div className="row-right">office@freedom.live</div>
                            <div className="row-right">@freedom</div>
                            <div className="row-right">@freedom</div>
                        </div>
                    </div>
                </div>
                <div className="middle">
                    <div className="title">{lang.footer.about_title}</div>
                    <div className="desc">{lang.footer.about_desc}</div>
                </div>
                <div className="right">
                    <div className="title">{lang.footer.about_right_title}</div>
                    <div className="desc">{lang.footer.about_right_desc}</div>
                </div>
            </div>
            {/* <><button>WOHO</button></> */}
            <>freedom.live @ 2022</>
        </footer>
    </>:<></>)
}