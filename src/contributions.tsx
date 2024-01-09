import { JSX } from 'solid-js'
import { Card } from './card'
import { t, translatedMarkdown } from './language-select'

import './contributions.css'

function makdeDescription(description: string, contributions: string[]) {
	return (
		<div class="contribution-description">
			<div>{description}</div>
			<div>
				<p>{`${t('whatIDid')}:`}</p>
				<ul class="contribution-list">
					{contributions.map((contribution) => (
						<li>{contribution}</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export function Contributions() {
	const ChromiumAriticle = translatedMarkdown('chromium')
	const YamlLanguageServer = translatedMarkdown('yaml-language-server')

	return (
		<div class="contributions">
			<h2>{t('openSourceContributionsTitle')}</h2>
			<div class="contributions-container">
				<Contribution
					title={t('contributions.chromium.title')}
					description={makdeDescription(
						t('contributions.chromium.description'),
						t('contributions.chromium.contributions')
					)}
					fullArticle={ChromiumAriticle()}
					tags={['c++', 'java', 'windows api', 'android api']}
				/>
				<Contribution
					title={t('contributions.yamlLanguegeServer.title')}
					description={makdeDescription(
						t('contributions.yamlLanguegeServer.description'),
						t('contributions.yamlLanguegeServer.contributions')
					)}
					fullArticle={YamlLanguageServer()}
					tags={['typescript', 'ide plugin']}
				/>
			</div>
		</div>
	)
}

export function Contribution(props: {
	description: string | JSX.Element
	title: string
	fullArticle: JSX.Element
	tags?: string[]
}) {
	return (
		<div class="contribution">
			<Card {...props} />
		</div>
	)
}
