import { useEffect } from "react";

function CoinTable(){
    async function download(){
        const response = await fetch("https://api.coingecko.com/api/v3/search/trending");
        console.log(response);

        const result = response.json();
        console.log(result)
    }

    useEffect(()=>{
        //because the dependency array is empty this component will only run once 
        //when the component is rendered first time (at mounting)
        download();
    },[]);
    return(
        <>
            Coin Table
        </>
    )
}
export default CoinTable;