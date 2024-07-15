import React, { useState } from 'react'

const KeywordSearch = ({setQuery}) => {

    const [potentialQuery, setPQ] = useState("")

    const searchClick = () => {
        setQuery(potentialQuery)
        console.log("this is the query", potentialQuery)
    }

    return (
        <div>
            <input type='search' onChange={(q) => setPQ(q.target.value)}/>
            <button onClick={searchClick}>Search</button>
        </div>
    )
}

export default KeywordSearch