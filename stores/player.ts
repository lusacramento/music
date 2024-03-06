import { defineStore } from 'pinia'
import { Howl } from 'howler'

const icons = {
	pause: 'fa-pause',
	play: 'fa-play',
}

export const useMyPlayerStore = defineStore({
	id: 'myPlayerStore',
	state: () => ({
		icon: icons.play,
		currentSong: {} as Object | any,
		sound: undefined as Howl | undefined,
		seek: '00:00' as string | number | undefined,
		duration: '00:00' as string | number | undefined,
		playerProgress: '0%',
	}),

	getters: {
		playing: (state) => {
			if (state.sound?.playing) {
				return state.sound.playing()
			}

			return false
		},
	},

	actions: {
		newSong(song: any) {
			if (this.sound instanceof Howl) {
				this.sound.unload()
			}

			this.currentSong = song

			this.sound = new Howl({
				src: [song.url],
				html5: true,
			})

			this.sound.play()

			this.sound.on('play', () => {
				requestAnimationFrame(this.progress)
			})
			this.icon = icons.pause
		},

		async toogleAudio() {
			if (!this.sound?.playing) {
				return
			}

			this.icon = icons.play

			if (this.sound.playing()) {
				this.sound.pause()
				this.icon = icons.play
			} else {
				this.sound.play()
				this.icon = icons.pause
			}
		},

		progress() {
			this.seek = useHelper().formatTime(this.sound?.seek())
			this.duration = useHelper().formatTime(this.sound?.duration())

			if (this.sound?.seek !== undefined && this.sound.duration !== undefined)
				this.playerProgress = `${
					(this.sound?.seek() / this.sound?.duration()) * 100
				}%`

			if (this.sound?.playing()) {
				requestAnimationFrame(this.progress)
			}
		},

		updateSeek($event: any) {
			if (!this.sound?.playing) {
				return
			}

			const { x, width } = $event.currentTarget.getBoundingClientRect()
			const clickX = $event.clientX - x
			const percentage = clickX / width
			const seconds = this.sound.duration() * percentage

			this.sound.seek(seconds)
			this.sound.once('seek', this.progress)
		},
	},
})
