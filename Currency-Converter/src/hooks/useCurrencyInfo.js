const apiKey = "cur_live_Ug2Nak4PLPmD96XZjUKThkH4sILzgqwsqrBUma3K";




import { useEffect, useState } from "react";

const url = `https://api.currencyapi.com/v3/latest?apikey=${apiKey}&base_currency=`;

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})

    useEffect(() => {
        try{
            fetch(url + currency)
            .then(response => response.json())
            .then(res => setData(res.data))
        }
        catch(e) {
            setData({})
            console.log("Error")
        }
    }, [currency])

    return data
}

export default useCurrencyInfo