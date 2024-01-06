import { JSX } from 'solid-js/jsx-runtime'
import { createResource } from 'solid-js'
import { Card } from './card'
import { languageCode, t } from './language-select'

import './contributions.css'

export function Contributions() {
	const [ChromiumAriticle] = createResource(
		languageCode,
		async (code) => (await import(`../locales/${code}/chromium.md`)).default
	)
	return (
		<div class="contributions">
			<h2>{t('openSourceContributionsTitle')}</h2>
			<div class="contributions-container">
				<Contribution
					title={t('contributions.chromium.title')}
					description={t('contributions.chromium.description')}
					fullArticle={ChromiumAriticle()}
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

export function Contribution(props: {
	description: string
	title: string
	fullArticle: JSX.Element
}) {
	return (
		<div class="project">
			<Card {...props} />
		</div>
	)
}
