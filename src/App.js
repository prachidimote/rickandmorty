
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import { useState,useEffect } from "react";
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import Navbar from './components/Navbar/Navbar';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Episodes from './Pages/Episodes';
import Location from './Pages/Location';

function App() {
  return (
    <Router>
    <div className='App'>
      <Navbar />
    </div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/episodes' element={<Episodes/>}/>
      <Route path='/location' element={<Location/>}/>
    </Routes>
    </Router>
  )

}

const Home = () => {
  let [pageNumber, setPageNumber] = useState(1); //setPageNumber function is used to change the pageNumber variable
  let [search, setSearch] = useState("");
  let [fetchedData, updateFetchedData] = useState([]);
  //Destructuring fetchedData into info and results   
  let { info, results } = fetchedData;
  console.log(info);
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(() => {
    //iief function
    (async function () {
      // fetching data from the API
      let data = await fetch(api).then(res => res.json())
      updateFetchedData(data);
    })();
  }, [api]);
  return (
    <div className='App'>
      <h1 className=" fw-semibold ubuntu text-center my-5">Rick and Morty <span className="text-primary">Wiki</span></h1>

<Search setPageNumber={ setPageNumber } setSearch={ setSearch }/> 
<div className="container">
  <div className="row">
      <Filters />
    
    <div className="col-8">
  <div className="row">
  <Cards results={results}/>
  
 
  </div>
</div>
  </div>
</div>

<Pagination
info={ info } 
pageNumber={pageNumber} 
setPageNumber={ setPageNumber }
/>
    </div>
  )
}

export default App