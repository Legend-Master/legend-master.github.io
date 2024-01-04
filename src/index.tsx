import { render } from 'solid-js/web'

import './index.css'
import { LanguageSelect } from './language-select'
import { Contributions } from './contributions'
import { Projects } from './project'

const root = document.getElementById('root')

render(
	() => (
		<>
			<header>
				<LanguageSelect />
			</header>
			<main>
				<h1>Hi, I'm Tony</h1>
				<Projects />
				<Contributions />
			</main>
		</>
	),
	root!
)
