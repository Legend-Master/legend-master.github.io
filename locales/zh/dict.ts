import { Dict, Projects, Contributions } from '../en/dict'

const projects: Projects = {
	mailFix: {
		title: 'Windows Mail Auto Sync Fix',
		description: '一个可以修复 Windows 邮件应用在后台自动同步 Gmail 的程序',
	},
}

const contributions: Contributions = {
	chromium: {
		title: 'Chromium',
		description: 'chrome',
	},
}

export const zhDict: { [T in keyof Dict]: string | Projects | Contributions } = {
	mainDescription: '我做和修能帮到人的软件',
	projectsTitle: '项目',
	openSourceContributionsTitle: '开源项目贡献',
	projects,
	contributions,
} as const
