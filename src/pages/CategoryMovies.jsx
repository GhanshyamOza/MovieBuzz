import React, { useState, useEffect } from 'react'
import { Box, styled, Typography, Divider } from '@mui/material'
import Header from '../components/common/Header'
import { categoryMovies } from '../services/Api'
import Carousel from 'react-multi-carousel'
import { useLocation } from 'react-router-dom'
import { POPULAR_API_URL, TOPRATED_API_URL, UPCOMING_API_URL, moviesType } from '../constants/constant'
import MoviesList from '../components/MoviesList'

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1  
    }
};

const StyledBanner = styled('img')({
    height: 600,
    width: "100%",
    margin: "20px 0"
})

const Component = styled(Box)`
    width: 80%;
    margin: auto;
`

const Container = styled(Box)`
    background: #f5f5f5;
    padding: 15px;
    margin: 0 20px 30px 20px;
`

export default function CategoryMovies() {

  const [movies, setMovies] = useState([]);

  const { search } = useLocation();
 
  useEffect( () => {
    const getData = async (API_URL) => {
        let response = await categoryMovies(API_URL)
        setMovies(response.results)
    } 

    let API_URL;

    if(search.includes('popular')){
        API_URL = POPULAR_API_URL;
    }
    else if(search.includes('upcoming')){
        API_URL = UPCOMING_API_URL;
    }
    else if(search.includes('toprated')){
        API_URL = TOPRATED_API_URL;
    }

    getData(API_URL);
  }, [search])

  return (
    <>
        <Header />
        <Component>
            <Carousel
                    responsive={responsive}
                    swipeable={false}
                    draggable={false}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    slidesToSlide={1}
                >
                    {
                        movies.map(movie => (
                            <>
                                <StyledBanner src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="banner" />
                                {/* <Title>{movie.original_title}</Title>  */}
                            </>
                        ))
                    }
                </Carousel>

                <Container>
                    <Typography variant='h6'>IMDb Charts</Typography>
                    <Typography variant='h4'>IMDb {moviesType[search.split('=')[1]]} Movies</Typography>
                    <Typography style={{ fontSize: 12, margin: 5 }}>IMDb Top {movies.length} movies by IMDb voters</Typography>
                    <Divider />
                    <MoviesList movies={movies} />
                </Container>

        </Component>
    </>
  )
}
