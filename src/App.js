import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./components/Cards/Cards";
import Filters from "./components/Filters/Filters";
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Episodes from './Pages/Episodes';
import Location from './Pages/Location';
import CardDetail from './components/Cards/CardDetail';

function App(){
  return(
    <Router>
      <div className='App'>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/:id' element={<CardDetail />}/>

          <Route path='/episodes' element={<Episodes />}/>
          <Route path='/episodes/:id' element={<CardDetail />}/>

          <Route path='/location' element={<Location />}/> 
          <Route path='/location/:id' element={<CardDetail />}/>
        </Routes>
      </div>
    </Router>
  )
}

const Home = () => {

  let [pageNumber, setPageNumber] = useState(1);

  let [search, setSearch] = useState("");

  let [status, setStatus] = useState("");

  let [gender, setGender] = useState("");

  let [species, setSpecies] = useState(" ");

  let [fetchedData, updateFetchedData] = useState( [] );

  let {info, results } = fetchedData;

  //console.log(results);

  let api = `https://rickandmortyapi.com/api/character/?page=${ pageNumber }&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {

    ( async function () {

      let data = await fetch(api).then( res => res.json() )
      updateFetchedData(data);
    }) ()

  }, [api])

  return (
    <div class="App">
      
      <h1 className='text-center mb-4'>Personajes</h1>

      <Search setPageNumber={setPageNumber} setSearch={setSearch}/>

      <div class="container">
        <div class="row">
            <Filters 
              setSpecies={setSpecies}
              setGender={setGender}
              setStatus={setStatus} 
              setPageNumber={setPageNumber} 
            />

          <div class="col-lg-8 col-12">
            <div class="row">
              <Cards page= "/" results={results} />
            </div>
          </div>
        </div>
      </div>

      <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
    </div>
  );
}

export default App;
