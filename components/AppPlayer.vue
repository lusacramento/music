<template>
	<div class="fixed bottom-0 left-0 bg-white px-4 py-2 w-full">
		<!-- Track Info -->
		<div class="text-center" v-if="currentSong.modifiedName">
			<span class="song-title font-bold">{{ currentSong.modifiedName }}</span>
			by
			<span class="song-artist">{{ currentSong.displayName }}</span>
		</div>
		<div class="flex flex-nowrap gap-4 items-center">
			<!-- Play/Pause Button -->
			<button type="button" @click.prevent="toggleAudio()">
				<AppIcon :icon="icon" class="text-gray-500 text-xl" />
			</button>
			<!-- Current Position -->
			<div class="player-currenttime">{{ seek }}</div>
			<!-- Scrub Container  -->
			<div
				class="w-full h-2 rounded bg-gray-200 relative cursor-pointer"
				@click.prevent="updateSeek($event)"
			>
				<!-- Player Ball -->
				<span
					class="absolute -top-2.5 -ml-2.5 text-gray-800 text-lg"
					:style="{ left: playerProgress }"
				>
					<AppIcon icon="fa-circle" class="" />
				</span>
				<!-- Player Progress Bar-->
				<span
					class="block h-2 rounded bg-gradient-to-r from-green-500 to-green-400"
					:style="{ width: playerProgress }"
				></span>
			</div>
			<!-- Duration -->
			<div class="player-duration">{{ duration }}</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	const playerStore = useMyPlayerStore()
	const { icon, duration, seek, playerProgress, currentSong } =
		storeToRefs(playerStore)

	function toggleAudio() {
		playerStore.toogleAudio()
	}

	function updateSeek($event: any) {
		playerStore.updateSeek($event)
	}
</script>
