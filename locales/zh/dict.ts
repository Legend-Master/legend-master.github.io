import { Dict, Projects } from '../en/dict'

const projects: Projects = {
	mailFix: {
		title: 'Windows Mail Auto Sync Fix',
		description:
			"A small program that fixes Windows Mail app doesn't sync Gmail automatically in background",
	},
	chromium: {
		title: 'Chromium',
		description: 'chrome',
	},
}

export const zhDict: { [T in keyof Dict]: string | Projects } = {
	projectsTitle: '项目',
	openSourceContributionsTitle: '开源项目贡献',
	projects,
} as const
