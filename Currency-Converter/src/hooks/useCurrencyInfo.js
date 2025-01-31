import { useEffect, useState } from "react";

const apiKey = "cur_live_SaBDOWfMeDGgbepQiEDBcaCLiSHFaYrgVCbewmAG";
const url = `https://api.currencyapi.com/v3/latest?apikey=${apiKey}&base_currency=`;

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(res => setData(res.data))
        console.log(data)
    }, [currency])

    return data
}

export default useCurrencyInfo