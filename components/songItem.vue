<template>
	<li
		class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50"
	>
		<div>
			<a href="#" class="font-bold block text-gray-600">{{
				song.modifiedName
			}}</a>
			<span class="text-gray-500 text-sm"
				>{{ song.displayName }} - {{ song.id }}</span
			>
		</div>

		<div class="text-gray-600 text-lg">
			<span class="comments">
				<AppIcon icon="fa fa-comments" class="text-gray-600" />
				{{ song.commentCount }}
			</span>
		</div>
	</li>
</template>

<script lang="ts" setup>
	const props = defineProps({
		song: { type: Object, required: true },
	})
</script>

<style></style>
