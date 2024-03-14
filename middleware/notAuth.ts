import { useMyUserStore as userStore } from '~/stores/user'
import { useMySongStore as songStore } from '~/stores/song'

export default defineNuxtRouteMiddleware(async (to, from) => {
	const id = to.params.id as string | undefined
	await getLoggedIn()

	if (id === undefined) return
	await songStore().setSong(id)

	async function getLoggedIn() {
		return userStore().isLoggedIn
	}
})
