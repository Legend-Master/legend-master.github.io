import { t, translatedMarkdown } from './language-select'
import { Card } from './card'

import './main-description.css'

export function MainDescription() {
	const MainDescription = translatedMarkdown('main-description')
	return (
		<div class="main-description">
			<h1 class="i-m-tony">Hi, I'm Tony</h1>
			<Card
				// title={`Hi, I'm Tony`}
				description={t('mainDescription')}
				fullArticle={MainDescription()}
			/>
		</div>
	)
}
