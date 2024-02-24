<template>
	<div>
		<h1>Error {{ error?.statusCode }}</h1>
		<b>
			This page does not exist. You will be redirected to home page within
			seconds!
		</b>
	</div>
</template>

<script setup lang="ts">
	import type { NuxtError } from '#app'

	const props = defineProps({
		error: Object as () => NuxtError,
	})

	onMounted(() => {
		setTimeout(() => {
			clearError({ redirect: '/' })
		}, 3000)
	})
</script>
