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
		description: 'chrome',
	},
}

export const enDict = {
	mainDescription: 'I make and fix software that helps people out',
	projectsTitle: 'Projects',
	openSourceContributionsTitle: 'Open Source Contributions',
	projects,
	contributions,
} as const

export type Dict = typeof enDict
export type Projects = typeof projects
export type Contributions = typeof contributions
