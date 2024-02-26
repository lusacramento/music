<template>
	<div>
		<!-- Main Content -->
		<section class="container mx-auto mt-6">
			<div class="md:grid md:grid-cols-3 md:gap-4">
				<div class="col-span-1">
					<AppUpload ref="upload" />
				</div>
				<div class="col-span-2">
					<div
						class="bg-white rounded border border-gray-200 relative flex flex-col"
					>
						<div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
							<span class="card-title">My Songs</span>
							<AppIcon
								icon="fa-compact-disc"
								class="float-right text-green-400 float-right text-green-400 text-2xl"
							/>
						</div>
						<div class="p-6">
							<!-- Composition Items -->
							<CompositionItem
								v-for="(song, i) in songs"
								:key="song.docId"
								:song="song"
								:updateSong="updateSong"
								:i="i"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Player -->
		<div class="fixed bottom-0 left-0 bg-white px-4 py-2 w-full">
			<!-- Track Info -->
			<div class="text-center">
				<span class="song-title font-bold">Song Title</span> by
				<span class="song-artist">Artist</span>
			</div>
			<div class="flex flex-nowrap gap-4 items-center">
				<!-- Play/Pause Button -->
				<button type="button">
					<AppIcon icon="fa-play" class="text-gray-500 text-xl" />
				</button>
				<!-- Current Position -->
				<div class="player-currenttime">00:00</div>
				<!-- Scrub Container  -->
				<div class="w-full h-2 rounded bg-gray-200 relative cursor-pointer">
					<!-- Player Ball -->
					<span
						class="absolute -top-2.5 -ml-2.5 text-gray-800 text-lg"
						style="left: 50%"
					>
						<AppIcon icon="fa-circle" class="" />
					</span>
					<!-- Player Progress Bar-->
					<span
						class="block h-2 rounded bg-gradient-to-r from-green-500 to-green-400"
						style="width: 50%"
					></span>
				</div>
				<!-- Duration -->
				<div class="player-duration">03:06</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	// definePageMeta({
	// 	middleware: [function (to, from) {}, 'auth'],
	// })

	import Upload from '@/components/AppUpload.vue'
	import {
		collection,
		initializeFirestore,
		getDocs,
		query,
		where,
	} from 'firebase/firestore'

	const songs: any = []

	const nuxtApp = useNuxtApp()
	const app = nuxtApp.$app
	const auth = nuxtApp.$auth

	const store = initializeFirestore(app, {})
	const colection = collection(store, 'songs')

	const queryById = query(colection, where('uid', '==', auth.currentUser?.uid))
	const snapshot = await getDocs(queryById)

	snapshot.forEach((doc) => {
		const song = {
			...doc.data(),
			docId: doc.id,
		}
		songs.push(song)
	})

	useSeoMeta({
		title: 'Music - Manage',
	})

	const upload = ref<InstanceType<typeof Upload> | null>(null)

	onBeforeRouteLeave((to, from, next) => {
		upload.value?.cancelUploads()
		next()
	})

	function updateSong(this: any, i: string, song: any) {
		this.songs[i].modifiedName = songs[i].modifiedName
		this.songs[i].genre = songs[i].genre
	}
</script>
