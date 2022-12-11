//creating custom hook
import {useState, useEffect} from 'react'; //importing react hooks

const useGoogleSearch = (term) => {  //passing a prop to our hook
    const [data, setData]= useState(null); //creating a state to store data

    useEffect(()=>{
        const fetchData = async () => {  //asynchronously fetching data from our search engine we created and storing the results in data state.
            fetch(
              `https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_GOOGLE_SEARCH_API_KEY}&cx=${process.env.REACT_APP_GOOGLE_SEARCH_ENGINE_ID}&q=${term}`
            )
            .then((response) => response.json())  //converting the response to json format
            .then((result) => { setData(result); });
        };
        fetchData(); //calling the function
    },[term]); //will render every time term changes (data layer)

    return { data }; //this hook will return data fetched from engine
};

export default useGoogleSearch;
