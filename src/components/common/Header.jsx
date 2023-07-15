import React, { useState } from 'react'
import { AppBar, Toolbar, styled, Box, Typography, InputBase } from '@mui/material'
import { logoUrl } from '../../constants/constant'
import { Menu, BookmarkAdd, ExpandMore } from '@mui/icons-material'
import HeaderMenu from './HeaderMenu'
import { useNavigate } from 'react-router-dom'
import { routePath } from '../../constants/route'


const StyledToolbar = styled(Toolbar)`
    background: #121212;
    min-height: 54px !important;
    padding: 0 115px !important;
    justify-content: space-between;

    & > * {
        padding: 0 14px;
    }

    & > div {
        display: flex;
        align-items: center;
        cursor: pointer;
        & > p{
            font-weight: 600;
            font-size: 14px;
        }
    }

    & > p {
        font-weight: 600;
        font-size: 14px;
        cursor: pointer;
    }
`

const SearchInputBase = styled(InputBase)`
    background: #ffffff;
    height: 30px;
    width: 55%;
    border-radius: 5px;
`

const Logo = styled('img')({
    width: 64,
    cursor: "pointer"
})

export default function Header() {

  const [open, setOpen] = useState(null);

  const navigate = useNavigate();

  const handleClick = (e) => {
    setOpen(e.currentTarget)
  }

  const handleClose = () => {
      setOpen(null);
  }

  return (
    <> 
        <AppBar position='static'>
            <StyledToolbar>
                <Logo src={logoUrl} alt="logo" onClick={() => navigate(routePath.home)}/>
                <Box onClick={handleClick}>
                    <Menu />
                    <Typography>Menu</Typography>
                </Box>
                <HeaderMenu open={open} handleClose={handleClose} />
                <SearchInputBase />
                <Typography>IMDb<Box component='span'>Pro</Box></Typography>
                <Box>
                    <BookmarkAdd />
                    <Typography>WatchList</Typography>
                </Box>
                <Typography>Sign In</Typography>
                <Box>
                    <Typography>EN</Typography>
                    <ExpandMore />
                </Box>
            </StyledToolbar>
        </AppBar> 
    </>
  )
}
