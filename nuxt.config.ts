// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },

	runtimeConfig: {
		public: {
			API_KEY: process.env.API_KEY,
			AUTH_DOMAIN: process.env.AUTH_DOMAIN,
			PROJECT_ID: process.env.PROJECT_ID,
			STORAGE_BUCKET: process.env.STORAGE_BUCKET,
			MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
			APP_ID: process.env.APP_ID,
		},
	},

	nitro: {
		preset: 'firebase',
	},
	modules: [
		'@nuxtjs/tailwindcss',
		[
			'@nuxtjs/google-fonts',
			{
				families: {
					Roboto: [300, 400, 500, 700],
				},
			},
		],

		[
			'@vee-validate/nuxt',
			{
				autoImports: true,

				componentNames: {
					VeeForm: 'VeeForm',
					VeeField: 'VeeField',
					VeeFieldArray: 'VeeFieldArray',
					VeeErrorMessage: 'VeeErrorMessage',
				},
			},
		],

		'@pinia/nuxt',
		[
			'@nuxtjs/i18n',
			{
				i18n: {
					vueI18n: './i18n.config.ts', // if you are using custom path, default
				},
			},
		],
	],

	plugins: ['~/plugins/firebase.client.ts'],

	css: [
		'~/assets/css/main.css',
		'@fortawesome/fontawesome-svg-core/styles.css',
	],
})
