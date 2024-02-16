import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

export default defineNuxtPlugin((nuxtApp) => {
	const env = useRuntimeConfig().public

	const firebaseConfig = {
		apiKey: env.API_KEY,
		authDomain: env.AUTH_DOMAIN,
		projectId: env.PROJECT_ID,
		storageBucket: env.STORAGE_BUCKET,
		messagingSenderId: env.MESSAGING_SENDER_ID,
		appId: env.APP_ID,
	}

	const app = initializeApp(firebaseConfig)
	const auth = getAuth(app)

	const onLoad = auth.onAuthStateChanged(() => {
		const user = auth.currentUser
		if (user) {
			useMyUserStore().loginUser()
		}
	})

	return {
		provide: {
			app: app,
			auth: auth,
			onLoad: onLoad,
		},
	}
})