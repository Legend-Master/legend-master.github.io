const projects = {
	mailFix: {
		title: 'Windows Mail Auto Sync Fix',
		description:
			"A small program that fixes Windows Mail app doesn't sync Gmail automatically in background",
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
