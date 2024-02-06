<template>
	<ClientOnly>
		<font-awesome-icon :icon="icon" :class="class" />
	</ClientOnly>
</template>

<script lang="ts" setup>
	const props = defineProps({
		icon: { type: String, required: true },
		class: { type: String, required: true, default: '' },
	})
</script>

<style></style>
