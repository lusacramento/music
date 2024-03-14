import {
	Query,
	doc,
	getDoc,
	getDocs,
	limit,
	limitToLast,
	orderBy,
	query,
	startAfter,
} from 'firebase/firestore'
import { defineStore } from 'pinia'

export const useMySongsStore = defineStore({
	id: 'mySongsStore',
	state: () => ({
		songs: [] as any[],
		limitFiles: 4 as number,
		lastSongId: '' as string,
		lastLoadedSongId: '' as string,
		isMoreSongs: true as boolean,
	}),

	getters: {
		getSongs: function (state) {
			return state.songs
		},

		getIsMoreSongs(state) {
			return state.isMoreSongs
		},
	},
	actions: {
		async initializeSongs() {
			await this.clearStore()

			try {
				const songsCollection = useNuxtApp().$songCollection
				const queryRef = query(songsCollection, limit(this.limitFiles))

				const snapshot = await this.getSongsOnStore(queryRef)

				if (!snapshot.empty) {
					snapshot.forEach((doc: any) => {
						this.addSong(doc)
					})

					this.verifyIsMoreSongs()
				}
			} catch (error) {
				console.log(error)
			}
		},

		async getSongsOnStore(queryRef: Query) {
			return await getDocs(queryRef)
		},

		async addSong(doc: any) {
			const song = {
				...doc.data(),
				id: doc.id,
			}
			this.songs.push(song)
		},

		async verifyIsMoreSongs() {
			this.lastLoadedSongId = this.songs[this.songs.length - 1].id

			const songsCollection = useNuxtApp().$songCollection
			const queryRef = query(
				songsCollection,
				orderBy('__name__', 'asc'),
				limitToLast(1),
			)

			const snapshot = await getDocs(queryRef)
			this.lastSongId = !snapshot.empty ? snapshot.docs[0].id : ''

			this.isMoreSongs = this.existsMoreSongs(
				this.lastSongId,
				this.lastLoadedSongId,
			)
		},

		existsMoreSongs(lastSongId: string, lastLoadedSongId: string) {
			return lastSongId !== lastLoadedSongId
		},

		async getMoreSongs() {
			const loadedLastId = this.songs[this.songs.length - 1].id

			const songsCollection = useNuxtApp().$songCollection

			const lastDocRef = doc(songsCollection, loadedLastId)

			const lastDoc = await getDoc(lastDocRef)
			const queryRef = query(
				songsCollection,
				limit(this.limitFiles),
				startAfter(lastDoc),
			)

			const snapshot = await this.getSongsOnStore(queryRef)
			snapshot.forEach((doc: any) => {
				this.addSong(doc)
			})
			this.verifyIsMoreSongs()
		},

		clearStore() {
			this.$reset()
		},
	},
})
