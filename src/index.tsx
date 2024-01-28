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
				<a href="mailto:legendmastertony@gmail.com" title="E-Mail me" class="icon-link">
					{/* Email me */}
					<IconMdiEmail />
				</a>
				<a href="https://github.com/Legend-Master" title="My GitHub profile page" class="icon-link">
					{/* Find me on GitHub */}
					<IconMdiGithub />
				</a>
			</header>
			<main>
				<MainDescription />
				<Contributions />
				<Projects />
			</main>
			<footer>
				<a
					href="https://github.com/Legend-Master/legend-master.github.io"
					title="Page source"
					class="icon-link icon-text-link"
				>
					<span>View page source on GitHub</span>
					<IconMdiGithub />
				</a>
			</footer>
		</>
	),
	document.getElementById('root')!
)
