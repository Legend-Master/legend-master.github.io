import { createResource } from 'solid-js'
import { languageCode, t } from './language-select'
import { Card } from './card'

import './main-description.css'

export function MainDescription() {
	const [MainDescription] = createResource(
		languageCode,
		async (code) => (await import(`../locales/${code}/main-description.md`)).default
	)
	return (
		<div class="main-description">
			<h1 class="i-m-tony">Hi, I'm Tony</h1>
			<Card description={t('mainDescription')} fullArticle={MainDescription()} />
		</div>
	)
}
