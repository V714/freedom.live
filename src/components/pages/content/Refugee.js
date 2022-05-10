import Section1 from "./Refugee/Section1";
import Section2 from "./Refugee/Section2";
import '../../styles/refugee.css'

export default function Refugee(props){
    return(
        <>
            <Section1 setTab={props.setTab}/>
            <Section2/>
        </>
    )
}