import { defineConfig } from 'vite'
import mdx from '@mdx-js/rollup'
import remarkGfm from 'remark-gfm'
import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
	plugins: [
		{
			enforce: 'pre',
			...mdx({
				jsxImportSource: 'solid-js/h',
				remarkPlugins: [remarkGfm],
			}),
		},
		solidPlugin({ extensions: ['.md', '.mdx'] }),
	],
	build: {
		target: 'esnext',
	},
})
