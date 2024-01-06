import { Card } from './card'
import { languageCode, t } from './language-select'
import { JSX } from 'solid-js/jsx-runtime'

import './projects.css'
import { createResource } from 'solid-js'

export function Projects() {
	const [ChromiumAriticle] = createResource(
		languageCode,
		async (code) => (await import(`../locales/${code}/chromium.md`)).default
	)
	const [MailSyncFix] = createResource(
		languageCode,
		async (code) => (await import(`../locales/${code}/windows-mail-sync-fix.md`)).default
	)

	return (
		<div class="projects">
			<h2>{t('projectsTitle')}</h2>
			<div class="projects-container">
				<Project
					title={t('projects.chromium.title')}
					description={t('projects.chromium.description')}
					fullArticle={ChromiumAriticle()}
				/>
				<Project
					title={t('projects.mailFix.title')}
					description={t('projects.mailFix.description')}
					fullArticle={MailSyncFix()}
				/>
				{/* <Project /> */}
				{/* <Project /> */}
				{/* <Project /> */}
				{/* <Project /> */}
				{/* <Project /> */}
			</div>
		</div>
	)
}

export function Project(props: { description: string; title: string; fullArticle: JSX.Element }) {
	return (
		<div class="project">
			<Card {...props} />
		</div>
	)
}
