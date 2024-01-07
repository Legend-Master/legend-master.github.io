import { render } from 'solid-js/web'
import { LanguageSelect } from './language-select'
import { MainDescription } from './main-description'
import { Contributions } from './contributions'
import { Projects } from './projects'

import './index.css'

render(
	() => (
		<>
			<header>
				<LanguageSelect />
				<a href="mailto:legendmastertony@gmail.com" title="E-Mail me">
					{/* Email me */}
					<IconMdiEmail />
				</a>
				<a href="https://github.com/Legend-Master" title="My GitHub profile page">
					{/* Find me on GitHub */}
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
	document.getElementById('root')!
)
