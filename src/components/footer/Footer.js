import React from 'react'
import {
	gitHub,
	instagram,
	linkedIn,
	twitter,
} from '../../img/icons/exportAllIcons'
import './style.css'

function Footer() {
	return (
		<>
			<footer className='footer'>
				<div className='container'>
					<div className='footer__wrapper'>
						<ul className='social'>
							<li className='social__item'>
								<a
									href='https://www.instagram.com/melliksetyan/'
									target='_blank'
								>
									<img src={instagram} alt='Link' />
								</a>
							</li>
							<li className='social__item'>
								<a href='https://x.com/davmel01' target='_blank'>
									<img src={twitter} alt='Link' />
								</a>
							</li>
							<li className='social__item'>
								<a href='https://github.com/MeliksetyanD' target='_blank'>
									<img src={gitHub} alt='Link' />
								</a>
							</li>
							<li className='social__item'>
								<a
									href='https://www.linkedin.com/in/david-meliqsetyan'
									target='_blank'
								>
									<img src={linkedIn} alt='Link' />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Footer
