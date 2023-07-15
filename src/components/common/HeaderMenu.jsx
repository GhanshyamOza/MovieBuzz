import React from 'react'
import { Menu, MenuItem } from '@mui/material'
import { Link } from 'react-router-dom'
import { routePath } from '../../constants/route';

export default function HeaderMenu({ open, handleClose }) {
  
  const openMenu = Boolean(open);

  return (
      <Menu
        id="basic-menu"
        anchorEl={open}
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link to={`${routePath.categories}?category=popular`} style={{ color: 'inherit', textDecoration: 'none'}}>
          <MenuItem onClick={handleClose}>Popular</MenuItem>
        </Link>
        <Link to={`${routePath.categories}?category=toprated`} style={{ color: 'inherit', textDecoration: 'none'}}>
          <MenuItem onClick={handleClose}>Top Rated</MenuItem>
        </Link>
        <Link to={`${routePath.categories}?category=upcoming`} style={{ color: 'inherit', textDecoration: 'none'}}>
          <MenuItem onClick={handleClose}>Upcoming</MenuItem>
        </Link>
      </Menu>
  )
}
