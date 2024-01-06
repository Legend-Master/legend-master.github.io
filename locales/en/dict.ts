const projects = {
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

export const enDict = {
	projectsTitle: 'Projects',
	openSourceContributionsTitle: 'Open Source Contributions',
	projects,
} as const

export type Dict = typeof enDict
export type Projects = typeof projects
