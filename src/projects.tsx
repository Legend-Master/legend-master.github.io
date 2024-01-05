import { Card } from './card'
import { t } from './language-select'

import './projects.css'

export function Projects() {
	return (
		<div class="projects">
			<h2>{t('projectsTitle')}</h2>
			<div class="projects-container">
				<Project />
				{/* <Project /> */}
				{/* <Project /> */}
			</div>
		</div>
	)
}

export function Project() {
	return (
		<div class="project">
			<Card />
		</div>
	)
}
