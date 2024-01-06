import { Card } from './card'
import { languageCode, t } from './language-select'
import { JSX } from 'solid-js/jsx-runtime'
import { createResource } from 'solid-js'

import './projects.css'

export function Projects() {
	const [MailSyncFix] = createResource(
		languageCode,
		async (code) => (await import(`../locales/${code}/windows-mail-sync-fix.md`)).default
	)

	return (
		<div class="projects">
			<h2>{t('projectsTitle')}</h2>
			<div class="projects-container">
				<Project
					title={t('projects.mailFix.title')}
					description={t('projects.mailFix.description')}
					fullArticle={MailSyncFix()}
				/>
				<Project
					title={t('projects.simpleVpn.title')}
					description={t('projects.simpleVpn.description')}
					fullArticle={MailSyncFix()}
				/>
				<Project
					title={t('projects.parcelPluginIconify.title')}
					description={t('projects.parcelPluginIconify.description')}
					fullArticle={MailSyncFix()}
				/>
				<Project
					title={t('projects.dstMods.title')}
					description={t('projects.dstMods.description')}
					fullArticle={MailSyncFix()}
				/>
				<Project
					title={t('projects.userScripts.title')}
					description={t('projects.userScripts.description')}
					fullArticle={MailSyncFix()}
				/>
				<Project
					title={t('projects.manyMore.title')}
					description={t('projects.manyMore.description')}
					fullArticle={MailSyncFix()}
				/>
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
