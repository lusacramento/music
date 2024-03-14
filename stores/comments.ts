import { addDoc, getDocs, orderBy, query, where } from 'firebase/firestore'
import { defineStore } from 'pinia'

export const useMyCommentsStore = defineStore({
	id: 'myCommentsStore',
	state: () => ({
		comments: [] as any[],
	}),

	getters: {
		getComments: function (state) {
			return state.comments
		},
	},

	actions: {
		async getCommentsOnStore(id: string) {
			try {
				const commentsColection = useNuxtApp().$commentsCollection

				const collectionRef = commentsColection
				const queryRef = query(
					collectionRef,
					where('sid', '==', id),
					orderBy('datePosted', 'desc'),
				)

				const snapshot = await getDocs(queryRef)
				snapshot.forEach(async (doc) => {
					const currentComment: any = await {
						id: doc.id,
						...doc.data(),
					}
					currentComment.datePosted = useHelper().getElapsedTime(
						new Date(currentComment.datePosted.seconds * 1000),
					)

					this.comments.push({
						...currentComment,
					})
				})
			} catch (error) {
				console.log(error)
			}
		},

		async addCommentOnStore(comment: any) {
			try {
				const commentsCollection = useNuxtApp().$commentsCollection

				await addDoc(commentsCollection, comment).then(async () => {
					comment.datePosted = 'now'

					this.comments.unshift(comment)
				})
			} catch (error) {}
		},
	},
})
