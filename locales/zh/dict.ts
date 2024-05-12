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
		description: 'Google Chrome, Microsoft Edge, Android Webview, 微信小程序 背后的浏览器内核',
		contributions: [
			'修复屏幕捕获在 Windows 和 Linux 上给的画面大小小于实际屏幕大小',
			'修复在 Android 上全屏会把整个页面往下推一点',
			'修复屏幕捕获在 Windows 上窗口任务栏上分组错误',
		],
	},
	// yamlLanguegeServer: {
	// 	title: 'Yaml Language Server',
	// 	description: '在 vscode yaml 扩展背后的引擎',
	// 	contributions: ['添加了选择范围支持'],
	// },
	tauri: {
		title: 'Tauri',
		description: '一个用 web 技术来制作跨平台应用的框架',
		contributions: ['修复了在不同组件里各种各样 bug', '制作了新的功能也改进了旧的', '影响设计决策'],
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
