import { useMySongsStore as songsStore } from '~/stores/songs'

export default defineNuxtRouteMiddleware((to, from) => {
	songsStore().initializeSongs()
})
