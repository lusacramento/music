export default defineNuxtRouteMiddleware(async (to, from) => {
	const nuxtApp = await useNuxtApp()
	await nuxtApp.$onLoad

	const isLoggedIn = await getLoggedIn()

	if (!isLoggedIn) {
		return navigateTo('/')
	}
	return

	function getLoggedIn() {
		const store = useMyUserStore()
		return store.isLoggedIn
	}
})
