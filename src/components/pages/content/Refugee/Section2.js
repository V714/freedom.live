import { useContext, useEffect, useState } from "react"
import { LangContext } from "../../../../Freedom"
import axios from "axios"
import { getList } from "../../../functions/init"
import ListItem from "../../../items/ListItem"

export default function Section2(){
    const [data,setData] = useState(undefined)
    const [searchData,setSearchData] = useState(undefined)
    const [searchType,setSearchType] = useState('city')
    const [input,setInput] = useState('')
    const lang = useContext(LangContext)

    useEffect(()=>{
        getData()
    },[])

    useEffect(()=>{
        if(data){
            const data2 = getDataSearch(searchType,data,input)
            if(data2)setSearchData(data2)
        }
    },[input,searchType])

    const getDataSearch = (_type,data2,_input) => {
        switch(_type){
            case "city":
                return data2.filter(item2=>item2.city.toLowerCase().includes(_input.toLowerCase()))
            case "country":
                return data2.filter(item2=>item2.country.toLowerCase().includes(_input.toLowerCase()))
            case "organization":
                return data2.filter(item2=>item2.organization.toLowerCase().includes(_input.toLowerCase()))
            default:
                return undefined
            }
    }

    const getData = async() => {
        setData(await getList(axios))
    }

    return(
        <>
            <div className="s2" id="s2">
                <div className="list-top">
                    <div id="search_div">
                        <img alt="search icon"  src="/images/search.svg"/>
                        <input id="input_location" type='text' value={input} onChange={(e)=>setInput(e.target.value)} placeholder={lang.refugee.enter_loc}/>
                    </div>
                    <div className="search-by">
                        {lang.refugee.search_by} 
                        <select htmlFor="search_by" onChange={(e)=>setSearchType(e.target.value)} >map 
                            <option value={"city"} defaultChecked>City</option>
                            <option value={"country"}>Country</option>
                            <option value={"organization"}>Organization</option>
                        </select>
                        <img alt="filter icon" src="/images/filter.svg"/>
                    </div>
                </div>

                <ul id="list">
                    {input ?
                        (searchData && searchData.length>0 ? searchData.map((item,index)=>{return(<ListItem key={index} lang={lang} item={item}/>)}) : <div className="no-results">No results...</div>)
                            :
                        (data && data.map((item,index)=>{return(<ListItem key={index} lang={lang} item={item}/>)}))
                        }
                </ul>
            </div>
        
        </>
    )
}