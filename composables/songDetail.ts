export interface SongDetails {
	uid: string | undefined
	displayName: string | null | undefined
	originalName: string
	modifiedName: string
	genre: string
	commentCount: number
	url: string
	created: Date
}
