import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Select from 'react-select'


const Search = ({setChoice}) => {
    const [sources, setSources] = useState([])
    let url = 'https://newsapi.org/v2/top-headlines/sources?apiKey=89dccbf3b5894bab8119151b35820686'

    useEffect(() => {
        const getSources = async () => {
            const response = axios.get(url)
            setSources((await response).data.sources)
        }
        getSources()
    },[url])

    const opts = sources.map(source => ({ "value":source.id, "label":source.id }))
    console.log(sources)

    const choiceSetter = (choice) => {
        if (choice) {
            setChoice(choice.label)
        }
        else {
            setChoice("")
        }
    }

    return (
        <Select className='source_select' isClearable={true} isSearchable={true} onChange={(choice) => choiceSetter(choice)} options={opts} />
    )
}

export default Search