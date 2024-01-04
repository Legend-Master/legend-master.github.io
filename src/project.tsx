import { t } from './language-select'

export function Projects() {
	return (
		<div>
			<h2>{t('projectsTitle')}</h2>
			<Project />
			<Project />
			<Project />
		</div>
	)
}

export function Project() {
	return <></>
}
