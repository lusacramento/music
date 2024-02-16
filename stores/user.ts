import { defineStore } from 'pinia'

import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
	type UserCredential,
} from 'firebase/auth'
import {
	initializeFirestore,
	collection,
	doc,
	setDoc,
} from 'firebase/firestore'

export const useMyUserStore = defineStore({
	id: 'myUserStore',
	state: () => ({
		credential: null as UserCredential | null,
		isUserLoggedIn: false,
	}),

	getters: {
		isLoggedIn(state) {
			return state.isUserLoggedIn
		},
	},

	actions: {
		loginUser() {
			this.isUserLoggedIn = true
		},

		async createUser(values: UserDetails) {
			const nuxtApp = useNuxtApp()
			const auth = nuxtApp.$auth
			const app = nuxtApp.$app

			let user = {
				name: values.name,
				age: values.age,
				country: values.country,
			}

			try {
				this.credential = await createUserWithEmailAndPassword(
					auth,
					values.email,
					values.password,
				)

				try {
					const store = initializeFirestore(app, {})
					const colection = collection(store, 'users')

					const docRef = doc(colection, this.credential?.user?.uid!)

					await setDoc(docRef, user)

					await updateProfile(this.credential.user, { displayName: user.name })

					this.isUserLoggedIn = true
				} catch (error) {
					// const user = getUser()
					// deleteUser(userResponse)
					return error
				}

				return 'Success! Your account has been created!'
			} catch (error) {
				return error
			}
		},

		async authenticate(values: { email: string; password: string }) {
			const nuxtApp = useNuxtApp()
			const auth = nuxtApp.$auth

			try {
				const response = await signInWithEmailAndPassword(
					auth,
					values.email,
					values.password,
				)

				this.isUserLoggedIn = true

				return response
			} catch (error) {
				return error
			}
		},

		async signOut() {
			const nuxtApp = useNuxtApp()
			const auth = nuxtApp.$auth

			auth.signOut()
			this.isUserLoggedIn = false
			this.credential = null
		},
	},
})
