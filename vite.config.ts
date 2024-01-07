import { defineConfig } from 'vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import mdx from '@mdx-js/rollup'
import remarkGfm from 'remark-gfm'
import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
	plugins: [
		AutoImport({
			resolvers: [
				IconsResolver({
					prefix: 'Icon',
					extension: 'jsx',
				}),
			],
		}),
		Icons({
			compiler: 'solid',
		}),
		{
			enforce: 'pre',
			...mdx({
				jsxImportSource: 'solid-js/h',
				remarkPlugins: [remarkGfm],
			}),
		},
		solidPlugin({ extensions: ['.md', '.mdx'], hot: false }),
	],
	build: {
		target: 'esnext',
	},
})
