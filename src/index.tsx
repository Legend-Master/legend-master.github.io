import { render } from 'solid-js/web'
import { LanguageSelect } from './language-select'
import { MainDescription } from './main-description'
import { Contributions } from './contributions'
import { Projects } from './projects'

import './index.css'

const root = document.getElementById('root')

render(
	() => (
		<>
			<header>
				<LanguageSelect />
				<a href="https://github.com/Legend-Master">
					<IconMdiGithub />
				</a>
			</header>
			<main>
				<MainDescription />
				<Projects />
				<Contributions />
			</main>
		</>
	),
	root!
)
