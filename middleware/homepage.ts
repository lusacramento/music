export default defineNuxtRouteMiddleware(async (to, from) => {
	const nuxtApp = await useNuxtApp()
	await nuxtApp.$onLoad
	return
})
