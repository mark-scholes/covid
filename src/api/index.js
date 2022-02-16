import axios from 'axios';

const url =  'https://covid19.mathdro.id/api'; 

export const fetchData = async () => {
    try{
        const {data: {confirmed, deaths, lastUpdate} } = await axios.get(url);
        const filteredData = {
            confirmed,
            deaths,
            lastUpdate
        }
        return filteredData
    }catch(error){
        console.log(error)
    }
}