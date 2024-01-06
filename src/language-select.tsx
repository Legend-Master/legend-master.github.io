import { makePersisted } from '@solid-primitives/storage'
import { translator, flatten, Flatten } from '@solid-primitives/i18n'
import { createEffect, createSignal } from 'solid-js'
import { enDict } from '../locales/en/dict'
import { zhDict } from '../locales/zh/dict'

import './language-select.css'

// const languages = ['en', 'zh'] as const
export type LanguageCodes = 'en' | 'zh'
export const [languageCode, setLanguageCode] = makePersisted(
	createSignal<LanguageCodes>(navigator.language.includes('zh') ? 'zh' : 'en')
)

type RawDictionary = typeof enDict
const dictionaries = {
	en: enDict,
	zh: zhDict,
} as const
export const t = translator<Flatten<RawDictionary>>(() =>
	flatten(dictionaries[languageCode()] as RawDictionary)
)

export function LanguageSelect() {
	createEffect(() => {
		document.documentElement.lang = languageCode()
	})

	const languages = [
		{ code: 'en', display: 'English' },
		{ code: 'zh', display: '简体中文' },
	] as const

	return (
		<div>
			<select
				class="language-select"
				onChange={(event) => {
					setLanguageCode(languages[event.target.selectedIndex]!.code)
				}}
			>
				{languages.map((language) => (
					<option value={language.code} selected={language.code == languageCode()}>
						{language.display}
					</option>
				))}
			</select>
		</div>
	)
}
