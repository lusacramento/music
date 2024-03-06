import { defineStore } from 'pinia'
import { Howl } from 'howler'

export const useMyPlayerStore = defineStore({
	id: 'myPlayerStore',
	state: () => ({
		currentSong: {},
		sound: undefined as Howl | undefined,
	}),
	actions: {
		newSong(song: any) {
			this.currentSong = song

			this.sound = new Howl({
				src: [song.url],
				html5: true,
			})

			console.log(this.sound)

			this.sound.play()
		},
	},
})
