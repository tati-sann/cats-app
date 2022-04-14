import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Container, Grid} from "@mui/material";
import CatsCard from "./components/CatsCard";
import {ICats} from "./types/types";
import {convertCatsListData} from "./helpers/CatsHelpers";
import AddCatModal from "./components/AddCatModal";

const catsJson = require('./JSON/cats.json');

const App = () => {
  const [catsList, setCatsList] = useState<ICats[]>([]);

  useEffect(() => {
    fetchCats()
  }, []);

  const fetchCats = async () => {
    try {
      const response = await axios.get(`https://api.thecatapi.com/v1/breeds`, {
        headers: {
          'x-api-key': '195d9614-3d48-4836-a501-58b5331af7f2'
        },
        params: {
          limit: 10,
          page: 1,
        }
      })

      // const response = {
      //   data: catsJson,
      // }

      const cats: ICats[] = convertCatsListData(response.data);
      setCatsList(cats);
    } catch (e) {
      console.error(e)
    }
  }


  return (
    <Container maxWidth="xl" component="main">
      <Grid container spacing={1}>
        <AddCatModal/>

        {catsList.map((cat: ICats) => {
          return <CatsCard cat={cat} key={cat.id}/>
        })}
      </Grid>
    </Container>
  );
}

export default App;
