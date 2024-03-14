<template>
	<main>
		<!-- Main Content -->
		<section class="container mx-auto">
			<div
				class="bg-white rounded border border-gray-200 relative flex flex-col"
			>
				<div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
					<span class="card-title">Songs</span>
					<!-- AppIcon -->
					<AppIcon
						icon="fa-headphones-alt"
						class="float-right text-green-400 text-xl"
					/>
				</div>
				<ol id="playlist">
					<ClientOnly>
						<SongItem v-for="song in songs" :key="song.id" :song="song" />
					</ClientOnly>
				</ol>
				<button
					type="button"
					class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
					@click.prevent="getMoreSongs"
					v-if="isMoreSongs"
				>
					Get More...
				</button>
			</div>
		</section>
	</main>
</template>

<script lang="ts" setup>
	definePageMeta({
		middleware: [function (to, from) {}, 'index-middleware'],
	})

	useSeoMeta({
		title: 'Music - Home Page',
	})

	import { storeToRefs } from 'pinia'

	const songs: Ref<any[]> = storeToRefs(useMySongsStore()).getSongs
	const isMoreSongs = storeToRefs(useMySongsStore()).getIsMoreSongs

	async function getMoreSongs() {
		useMySongsStore().getMoreSongs()
	}
</script>
