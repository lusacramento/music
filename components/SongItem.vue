<template>
	<li
		class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50"
	>
		<div>
			<NuxtLink :to="songUrl" class="font-bold block text-gray-600">
				{{ song.modifiedName }}
			</NuxtLink>
			<span class="text-gray-500 text-sm">
				{{ song.displayName }} - {{ song.id }}
			</span>
		</div>

		<div class="text-gray-600 text-lg">
			<NuxtLink
				custom
				:to="{ path: songUrl, hash: '#comments' }"
				v-slot="{ navigate }"
			>
				<span class="comments" @click="navigate">
					<AppIcon icon="fa fa-comments" class="text-gray-600" />
					{{ song.commentCount }}
				</span>
			</NuxtLink>
		</div>
	</li>
</template>

<script lang="ts" setup>
	const props = defineProps({
		song: { type: Object, required: true },
	})

	const songUrl = `/song/${props.song.id}`
</script>

<style></style>
