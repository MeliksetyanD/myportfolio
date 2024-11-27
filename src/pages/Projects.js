import React from 'react'
import Project from '../components/project/Project'
import { projects } from '../helpers/projectList'
function Projects() {
	return (
		<>
			<main className='section'>
				<div className='container'>
					<h2 className='title-1'>Projects</h2>
					<ul className='projects'>
						{projects.map((project, index) => (
							<Project
								key={index}
								img={project.img}
								title={project.title}
								index={index}
								link={project.gitHubLink}
							/>
						))}
					</ul>
				</div>
			</main>
		</>
	)
}

export default Projects
