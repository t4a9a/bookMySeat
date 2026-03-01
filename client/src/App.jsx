import { Home } from 'lucide-react'
import React from 'react'
import { Routes } from 'react-router-dom'
import MovieDetails from './pages/MovieDetails'

const App = () => {
  
  const isAdminRoute = useLocation().pathname.startsWith('/admin')
  
  return (
    <>
        { !isAdminRoute && <Navbar/> }
        <Routes>
          <Route path= '/' element = {<Home/>} />
          <Route path= '/movies' element = {<Movies/>} />
          <Route path= '/movies/:id' element = {<MovieDetails/>} />
          <Route path= '/movies/:id/:date' element = {<SeatLayout/>} />
          <Route path= '/my-bookings' element = {<MyBookings/>} />
          <Route path= '/favorite' element = {<Favorite/>} />
        </Routes>
    </>
  )
}