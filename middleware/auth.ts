import { useMyUserStore as store } from '~/stores/user'
export default defineNuxtRouteMiddleware(async (to, from) => {
	const nuxtApp = await useNuxtApp()
	await nuxtApp.$onLoad

	const isLoggedIn = await getLoggedIn()

	if (!isLoggedIn) {
		return navigateTo('/')
	}
	return

	async function getLoggedIn() {
		return store().isLoggedIn
	}
})
