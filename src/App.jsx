import React from 'react';
import {FlexContent, Hero, Sales, Stories, Footer, Navbar} from './components';
import {
	heroapi, 
	popularsales, 
	toprateslaes, 
	highlight, 
	sneaker,
	story,
	footerAPI
} from './data/data.js';

const App = () => {
	return (
		<>
			<Navbar />
			<main className='flex flex-col gap-16 relative'>
        		<Hero heroapi={heroapi} />
				<Sales endpoint={popularsales} ifExists />
				<FlexContent endpoint={highlight} />
				<Sales endpoint={toprateslaes} />
				<FlexContent endpoint={sneaker} ifExists />
				<Stories story={story} />
      		</main>
			<Footer footerAPI={footerAPI} />

		</>
	)
}

export default App;