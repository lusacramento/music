import { defineStore } from 'pinia'

export const useMyModalStore = defineStore({
	id: 'myModalStore',
	state: () => ({
		isOpened: false,
	}),

	getters: {
		hiddenClass(state) {
			return !state.isOpened ? 'hidden' : ''
		},
	},

	actions: {
		toogleIsOpened() {
			this.isOpened = !this.isOpened
		},
	},
})
