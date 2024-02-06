// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
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
		'@pinia/nuxt',
	],
	css: [
		'~/assets/css/main.css',
		'@fortawesome/fontawesome-svg-core/styles.css',
	],
})
