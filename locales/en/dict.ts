const projects = {
	mailFix: {
		title: 'Windows Mail Auto Sync Fix',
		description:
			"A small program that fixes Windows Mail app doesn't sync Gmail automatically in background",
	},
	simpleVpn: {
		title: 'Simple P2P VPN',
		description: 'A simple peer to peer VPN for gaming and speeding up WebRTC like applications',
	},
	parcelPluginIconify: {
		title: 'Parcel Plugin Iconify',
		description: 'A Parcel plugin to add iconify icons',
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

const contributions = {
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

export const enDict = {
	mainDescription: 'I make and fix software that helps people out',
	projectsTitle: 'Projects',
	openSourceContributionsTitle: 'Open Source Contributions',
	whatIDid: 'What I did',
	projects,
	contributions,
}

export type Dict = typeof enDict
export type Projects = typeof projects
export type Contributions = typeof contributions
