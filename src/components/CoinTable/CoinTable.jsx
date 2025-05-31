import { useEffect ,useState} from "react";
import { fetchCoinData } from "../../services/fetchCoinData";
import { useQuery } from "react-query";
function CoinTable() {
    const [page, setPage] = useState(1);
  const { data, isLoading, isError, error } = useQuery(
    ["coins", page],
    () => fetchCoinData(page, "usd"),
    {
      retry: 2,

      retryDelay: 1000,

      cacheTime: 1000 * 60 * 2,
    }
  );

  useEffect(()=>{
    console.log(data)
  },[data]);

  if(isLoading){
    return <div>Loading ...</div>
  }
  if(isError){
    return <div> Error : {error.message}</div>
  }
  
  return <>Coin Table <button onClick={()=>setPage(page+1)}>Click</button></>;
}
export default CoinTable;
// async function download(){
  //     const response = await fetch("https://api.coingecko.com/api/v3/search/trending");
  //     console.log(response);

  //     const result = response.json();
  //     console.log(result)
  // }

  // useEffect(()=>{
  //     //because the dependency array is empty this component will only run once
  //     //when the component is rendered first time (at mounting)
  //     download();
  // },[]);