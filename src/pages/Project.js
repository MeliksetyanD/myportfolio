import React from 'react'
import { useParams } from 'react-router-dom'

import { projects } from '../helpers/projectList'

import BtnGitHub from '../components/btnGitHub/BtnGitHub'

function Project() {
	const { id } = useParams()

	const project = projects[id]
	return (
		<>
			<main className='section'>
				<div className='container'>
					<div className='project-details'>
						<h1 className='title-1'>{project.title}</h1>
						<a href='https://meliksetyand.github.io/moah/' target='_blank'>
							<img
								src={project.imgBig}
								alt={project.title}
								width={300}
								height={400}
								className='project-details__cover'
							/>
						</a>

						<div className='project-details__desc'>
							<p>{project.skills}</p>
						</div>

						<BtnGitHub link={`${project.gitHubLink}`} />
					</div>
				</div>
			</main>
		</>
	)
}

export default Project
