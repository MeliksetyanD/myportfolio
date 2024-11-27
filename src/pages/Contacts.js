import React from 'react'

function Contacts() {
	return (
		<>
			<main className='section'>
				<div className='container'>
					<h1 className='title-1'>Contacts</h1>

					<ul className='content-list'>
						<li className='content-list__item'>
							<h2 className='title-2'>Location</h2>
							<p>Yerevan, Armenia</p>
						</li>
						<li className='content-list__item'>
							<h2 className='title-2'>Telegram / WhatsApp</h2>
							<p>
								<a href='tel:+79051234567'>+374 - 43 - 07 -53-37</a>
							</p>
						</li>
						<li className='content-list__item'>
							<h2 className='title-2'>Email</h2>
							<p>
								<a href='mailto:webdev@protonmail.com'>
									davmelsim.01@gmail.com
								</a>
							</p>
						</li>
					</ul>
				</div>
			</main>
		</>
	)
}

export default Contacts
