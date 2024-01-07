import { Dict, Projects, Contributions } from '../en/dict'

const projects: Projects = {
	mailFix: {
		title: 'Windows Mail Auto Sync Fix',
		description: '一个可以修复 Windows 邮件应用在后台自动同步 Gmail 的程序',
	},
	simpleVpn: {
		title: 'Simple P2P VPN',
		description: 'A simple peer to peer VPN for gaming and speeding up WebRTC like applications',
	},
	parcelPluginIconify: {
		title: 'Browser User Scripts',
		description: 'A lot of browser user scripts that improves the web experience',
	},
	dstMods: {
		title: "Don't Starve Together Mods",
		description: "A lot of mods for Don't Starve Together game",
	},
	userScripts: {
		title: 'Browser User Scripts',
		description: 'A lot of browser user scripts that improves the web experience',
	},
	manyMore: {
		title: 'And Many More',
		description: 'You can find them on Github and my Steam workshop page',
	},
}

const contributions: Contributions = {
	chromium: {
		title: 'Chromium',
		description: 'chrome',
	},
}

export const zhDict: Dict = {
	mainDescription: '我做和修能帮到人的软件',
	projectsTitle: '项目',
	openSourceContributionsTitle: '开源项目贡献',
	projects,
	contributions,
}
