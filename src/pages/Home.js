import React from 'react'
import Header from '../components/header/Header'
function Home() {
	return (
		<>
			<Header />

			<main className='section'>
				<div className='container'>
					<ul className='content-list'>
						<li className='content-list__item'>
							<h2 className='title-2'>Frontend</h2>
							<p>• HTML, CSS, JS</p>
							<p>• React JS,Redux, Redux Toolkit </p>
							<p>• Ant Design, Bootstrap, Material UI </p>
							<p>• SCSS, SASS, GULP </p>
						</li>
						<li className='content-list__item'>
							<h2 className='title-2'>Backend</h2>
							<p>• NodeJS, MySQL </p>
						</li>
					</ul>
				</div>
			</main>
		</>
	)
}

export default Home
