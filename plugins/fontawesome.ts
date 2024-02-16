import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
	faHeadphonesAlt,
	faComments,
	faPlay,
	faCircle,
	faTimes,
	faUpload,
	faCompactDisc,
	faPencilAlt,
} from '@fortawesome/free-solid-svg-icons'

library.add(
	faHeadphonesAlt,
	faComments,
	faPlay,
	faCircle,
	faTimes,
	faUpload,
	faCompactDisc,
	faPencilAlt,
)

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
