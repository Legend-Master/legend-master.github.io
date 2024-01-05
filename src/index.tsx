import { render } from 'solid-js/web'
import { LanguageSelect } from './language-select'
import { Contributions } from './contributions'
import { Projects } from './projects'

import './index.css'

const root = document.getElementById('root')

render(
	() => (
		<>
			<header>
				<LanguageSelect />
			</header>
			<main>
				<h1 class='i-m-tony'>Hi, I'm Tony</h1>
				<Projects />
				<Contributions />
			</main>
		</>
	),
	root!
)
