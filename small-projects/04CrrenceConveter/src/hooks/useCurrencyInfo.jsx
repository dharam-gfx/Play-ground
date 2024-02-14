import React, { useEffect, useState } from 'react'

const useCurrencyInfo = ( currency ) => {
    const [data, setData] = useState( {} )
    useEffect( () => {
        // console.log( currency );
        fetch( `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json` )
            .then( ( res ) => res.json() )
            .then( ( res ) =>setData( {data:res[currency] ,date:res.date, isLoaded:true} ))
            .catch ( e => console.error(e))
            .finally(()=>{
                console.log("Success!");
            })
    }, [currency] )
    console.log( data );
    return data
}

export default useCurrencyInfo