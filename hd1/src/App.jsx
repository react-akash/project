// App.js
import React from "react"
import Movies from "./Movies"
import {MovieProvider} from "./Moviecontext"

const App = () => {
	return (
		<MovieProvider>
				<Movies />
		</MovieProvider>
	)
}

export default App