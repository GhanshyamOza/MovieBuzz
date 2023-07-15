import React, { useEffect, useState } from 'react'
import Header from '../components/common/Header'
import { categoryMovies } from '../services/Api'
import { NOWPLAYING_API_URL } from '../constants/constant'
import { Box, styled } from '@mui/material';
import Banner from '../components/Banner';
import UpNext from '../components/UpNext';
import Slide from '../components/Slide';

const ComponentWrapper = styled(Box)`
  padding: 0 115px;
`

const Wrapper = styled(Box)`
  display: flex;
  padding: 20px 0;
`

export default function Home() {

  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    const getData = async () => {
      let response = await categoryMovies(NOWPLAYING_API_URL);
      setMovies(response.results);
    }
    getData();
  }, [])

  return (
    <>
      <Header />
      <ComponentWrapper>
        <Wrapper>
          <Banner movies={movies} />
          <UpNext movies={movies} />
        </Wrapper>
        <Slide movies={movies} />
        <Slide movies={movies} />
        <Slide movies={movies} />
        <Slide movies={movies} />
        <Slide movies={movies} />
        <Slide movies={movies} />
      </ComponentWrapper>
    </> 
  )
}
