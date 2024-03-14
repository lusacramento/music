import { FontAwesomeAppIcon } from '@fortawesome/vue-fontawesome';
<template>
	<VitePwaManifest />
	<NuxtLoadingIndicator />
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>
<script lang="ts" setup>
	const nuxtApp = useNuxtApp()
	nuxtApp.$onLoad
</script>
