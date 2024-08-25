import React from 'react'
import './App.css'
import Header from './Component/Header'
import Footer from './Component/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'



import { Routes, Route } from "react-router-dom"
const App = () => {
  return (
		<div>
			<Header/>
			<Routes>
				<Route
					path='/'
					Component={Home}
				/>
				<Route
					path='/about'
					Component={About}
				/>
				<Route
					path='/Projects'
					Component={Projects}
				/>
				<Route
					path='/Contact'
					Component={Contact}
				/>
			</Routes>
			<Footer />
		</div>
	)
}

export default App