import React, { useEffect, useState } from 'react'
import Cards from './components/Cards/Cards'
import Charts from './components/Charts/Charts'
import CountrySelector from './components/CountrySelector/CountrySelector'
import styles from './App.module.css';
import { fetchData } from './api';
 
 const App = () => {
   const [data, setData] = useState();

  useEffect(()  => {
    const result = fetchData();
    setData(result)
  
  },[]);

   return (
    <div className={styles.container}>
    <Cards data={data}/>
    <Charts />
    <CountrySelector />
  </div>
   )
 }
 
 export default App

