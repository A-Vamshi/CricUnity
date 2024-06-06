import { useState, useEffect } from "react";
import axios from "axios";

const useApiFetch = (endpoint) => {
     const [data, setData] = useState([]);
     const [isLoading, setIsLoading] = useState(false);
     const [error, setError] = useState(null);

     const options = {
          method: 'GET',
          url: 'https://cricbuzz-cricket.p.rapidapi.com/series/v1/international',
          headers: {
          'X-RapidAPI-Key': "331fa31501msh6fe76b4c14854d4p1fd520jsn7b4d56a08550",
          'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
          }
     };

     const fetchData = async () => {
          setIsLoading(true);
          try {
               const response = await axios.request(options);
               setData(response.data);
               setIsLoading(false);
          } catch (error) {
               setError(error);
              console.log("useApiFetch ", error); 
          } finally {
               setIsLoading(false);
          }
     }

     useEffect(() => {
          fetchData(); 
     }, []);

     const refetch = () => {
          setIsLoading(true);
          fetchData();
     }

     return { data, isLoading, error, refetch}
}

export default useApiFetch;