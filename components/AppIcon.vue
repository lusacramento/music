<template>
	<ClientOnly>
		<font-awesome-icon v-if="!isAnimate" :icon="icon" :class="class" />
		<font-awesome-icon v-else="isAnimate" :icon="icon" :class="class" spin />
	</ClientOnly>
</template>

<script lang="ts" setup>
	const props = defineProps({
		icon: { type: String, required: true },
		class: { type: String, required: false, default: '' },
		isAnimate: { type: Boolean, required: false, default: false },
	})
</script>

<style></style>
