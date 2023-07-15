import React from 'react'
import { Box, Typography, styled } from '@mui/material'

const Component = styled(Box)`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  padding-left: 20px;

  & > p {
    color: #f5c518;
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 10px;
  }
`

const PosterWrapper = styled(Box)`
  display: flex;
  margin-bottom: 8px;

  & > p {
    color: #ffffff;
    margin-left: 20px
  }
`

const Poster = styled('img')({
  width: 88
})

export default function UpNext({ movies }) {
  return (
    <Component>
        <Typography>Up Next</Typography>
        {
          movies.slice(0, 3).map(movie => (
            <PosterWrapper>
              <Poster src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
              <Typography>{movie.original_title}</Typography>
            </PosterWrapper>
          ))
        }
    </Component>
  )
}
