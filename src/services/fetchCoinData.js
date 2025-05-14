import axiosInstance from "../helpers/axiosInstance";

export async function(){
    try {
        const response = axiosInstance.get('/coins/market?vs_currency=usd');
        console.log(response);
        return response ;
    } catch (error) {
        console.log(error);
        return null;
    }
}