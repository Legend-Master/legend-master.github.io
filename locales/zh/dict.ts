import { Dict } from '../en/dict'

export const zhDict: { [T in keyof Dict]: string } = {
	projectsTitle: '项目',
	openSourceContributionsTitle: '开源项目贡献',
} as const
