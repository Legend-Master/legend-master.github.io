import { Dict, Projects, Contributions } from '../en/dict'

const projects: Projects = {
	mailFix: {
		title: 'Windows Mail Auto Sync Fix',
		description: '一个可以修复 Windows 邮件应用在后台自动同步 Gmail 的程序',
	},
	simpleVpn: {
		title: 'Simple P2P VPN',
		description: '一个用来打游戏和加速类 WebRTC 应用的简单 P2P VPN',
	},
	parcelPluginIconify: {
		title: 'Parcel Plugin Iconify',
		description: '一个用来给网站加入 Iconify 图标的 Parcel 插件',
	},
	dstMods: {
		title: "Don't Starve Together Mods",
		description: '一大堆饥荒联机版的 Mod',
	},
	userScripts: {
		title: 'Browser User Scripts',
		description: '一大堆提升上网冲浪体验的浏览器用户脚本',
	},
	manyMore: {
		title: '还有更多！',
		description: '你可以在 Github 和 我的 Steam 创意工坊看到更多我做东西',
	},
}

const contributions: Contributions = {
	chromium: {
		title: 'Chromium',
		description:
			'The browser core behind Google Chrome, Microsoft Edge, Android Webview and many others',
		contributions: [
			'Fix screen capture returning smaller than screen size video stream on Windows and Linux',
			'Fix fullscreen on Android pushes the entire pages down a bit',
			'Fix wrong screen capture notification taskbar grouping on Windows',
		],
	},
	yamlLanguegeServer: {
		title: 'Yaml Language Server',
		description: 'The engine behined vscode yaml extension',
		contributions: ['Add selection ranges support'],
	},
}

export const zhDict: Dict = {
	mainDescription: '我做和修能帮到人的软件',
	projectsTitle: '项目',
	openSourceContributionsTitle: '开源项目贡献',
	whatIDid: '我做了',
	projects,
	contributions,
}
