import React, { useState } from 'react'

const KeywordSearch = ({setQuery}) => {

    const [potentialQuery, setPQ] = useState("")

    const searchClick = () => {
        setQuery(potentialQuery)
        console.log("this is the query", potentialQuery)
    }

    const clearClick = () => {
        setQuery("")
        setPQ("")
    }

    return (
        <div>
            <input type='search' value={potentialQuery} onChange={(q) => setPQ(q.target.value)}/>
            <button onClick={searchClick}>Search</button>
            <button onClick={clearClick}>Clear</button>
        </div>
    )
}

export default KeywordSearch