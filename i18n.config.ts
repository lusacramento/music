import en from './locales/en.json'
import pt from './locales/pt.json'

// You can use `defineI18nConfig` to get type inferences for options to pass to vue-i18n.
export default {
	legacy: false,
	locale: 'pt',
	fallbackLocale: 'en',
	messages: {
		en,
		pt,
	},
}
