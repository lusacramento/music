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
		firebase: { gen: 2 },
		prerender: {
			routes: ['/'],
			crawlLinks: true,
		},
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

		[
			'@vite-pwa/nuxt',
			{
				registerWebManifestInRouteRules: true,
				registerType: 'autoUpdate',
				manifest: {
					name: 'Music App',
					short_name: 'MusicApp',
					theme_color: '#ff5e3a',
					display: 'standalone',
					lang: 'en',

					icons: [
						{
							src: '/imgs/pwa-192x192.png',
							sizes: '192x192',
							type: 'image/png',
						},
						{
							src: '/imgs/pwa-512x512.png',
							sizes: '512x512',
							type: 'image/png',
						},
					],
				},

				workbox: {
					globPatterns: ['**/*.{js,css,html,png,svg,ico,jpg}'],
				},
				injectManifest: {
					globPatterns: ['**/*.{js,css,html,png,svg,ico,jpg}'],
				},
				client: {
					installPrompt: true,
				},
				devOptions: {
					enabled: true,
					suppressWarnings: true,
					navigateFallback: '/',
					navigateFallbackAllowlist: [/^\/$/],
					type: 'module',
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
