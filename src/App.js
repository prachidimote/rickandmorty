import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import { useState,useEffect } from "react";
function App() {
  let [pageNumber, setPageNumber] = useState(1);
  let [fetchedData, updateFetchedData] = useState([]);
  //Destructuring fetchedData into info and results   
  let { info, results } = fetchedData;
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  useEffect(() => {
    //iief function
    (async function () {
      // fetching data from the API
      let data = await fetch(api).then(res => res.json())
      updateFetchedData(data);
    })();
  }, [api]);
  return (
    <div>
      <h1 className=" fw-semibold ubuntu text-center my-5">Rick and Morty <span className="text-primary">Wiki</span></h1>

<div className="container">
  <div className="row">
    <div className="col-3">
      <Filters />
    </div>
    <div className="col-8">
  <div className="row">
  <Cards results={results}/>
  
 
  </div>
</div>
  </div>
</div>
    </div>
  )
}

export default App