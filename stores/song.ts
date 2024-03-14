import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { defineStore } from 'pinia'

export const useMySongStore = defineStore({
	id: 'mySongStore',
	state: () => ({
		song: {} as any,
	}),

	getters: {
		getSong: function (state) {
			return state.song
		},
	},

	actions: {
		async setSong(id: string) {
			this.clearStore()
			const songCollection = useNuxtApp().$songCollection
			try {
				const collectionRef = songCollection
				const docRef = doc(collectionRef, id)
				await getDoc(docRef).then((docSnap) => {
					if (!docSnap.exists()) return

					this.song = { ...docSnap.data() }
				})
			} catch (error) {}
		},

		async updateCommentsCounterOnStore() {
			const route = useRoute()
			const id = route.params.id as string | undefined

			const songCollection = useNuxtApp().$songCollection

			try {
				const docRef = doc(songCollection, id)

				this.song.commentCount + 1

				await updateDoc(docRef, { commentCount: this.song.commentCount })
			} catch (error) {}
		},

		clearStore() {
			this.$reset()
		},
	},
})
