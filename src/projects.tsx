import { JSX } from 'solid-js'
import { Card } from './card'
import { translatedMarkdown, t } from './language-select'

import './projects.css'

export function Projects() {
	const MailSyncFix = translatedMarkdown('windows-mail-sync-fix')
	const SimpleVpn = translatedMarkdown('simple-vpn')
	const ParcelPluginIconify = translatedMarkdown('parcel-plugin-iconify')
	const DstMods = translatedMarkdown('dst-mods')
	const UserScripts = translatedMarkdown('user-scripts')
	const ManyMore = translatedMarkdown('many-more-projects')

	return (
		<div class="projects">
			<h2>{t('projectsTitle')}</h2>
			<div class="projects-container">
				<Project
					title={t('projects.mailFix.title')}
					description={t('projects.mailFix.description')}
					fullArticle={MailSyncFix()}
					tags={['c++', 'windows api']}
				/>
				<Project
					title={t('projects.simpleVpn.title')}
					description={t('projects.simpleVpn.description')}
					fullArticle={SimpleVpn()}
					tags={['rust', 'networking', 'vpn']}
				/>
				<Project
					title={t('projects.parcelPluginIconify.title')}
					description={t('projects.parcelPluginIconify.description')}
					fullArticle={ParcelPluginIconify()}
					tags={['typescript', 'module bundler']}
				/>
				<Project
					title={t('projects.dstMods.title')}
					description={t('projects.dstMods.description')}
					fullArticle={DstMods()}
					tags={['lua', 'game mod']}
				/>
				<Project
					title={t('projects.userScripts.title')}
					description={t('projects.userScripts.description')}
					fullArticle={UserScripts()}
					tags={['javascript', 'browser extension']}
				/>
				<Project
					title={t('projects.manyMore.title')}
					description={t('projects.manyMore.description')}
					fullArticle={ManyMore()}
				/>
			</div>
		</div>
	)
}

export function Project(props: {
	description: string
	title: string
	fullArticle: JSX.Element
	tags?: string[]
}) {
	return (
		<div class="project">
			<Card {...props} />
		</div>
	)
}
