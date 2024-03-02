<template>
	<div>
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
				<!-- Playlist -->
				<ol id="playlist">
					<SongItem v-for="song in songs" :key="song.id" :song="song" />
				</ol>
				<button
					type="button"
					v-if="isMoreSongs"
					@click.prevent="getMoreSongs"
					class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
				>
					Get More...
				</button>

				<!-- .. end Playlist -->
			</div>
		</section>

		<!-- Player -->
		<div
			class="fixed bottom-0 left-0 bg-white px-4 py-2 w-full"
			style="display: none"
		>
			<!-- Track Info -->
			<div class="text-center">
				<span class="song-title font-bold">Song Title</span> by
				<span class="song-artist">Artist</span>
			</div>
			<div class="flex flex-nowrap gap-4 items-center">
				<!-- Play/Pause Button -->
				<button type="button">
					<AppIcon icon="fa fa-play" class="text-gray-500 text-xl" />
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
						<AppIcon icon="fas fa-circle" class="" />
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
	definePageMeta({
		middleware: [function (to, from) {}, 'homepage'],
	})

	import {
		Query,
		collection,
		doc,
		getDoc,
		getDocs,
		initializeFirestore,
		getFirestore,
		limit,
		query,
		startAfter,
		orderBy,
		limitToLast,
	} from 'firebase/firestore'

	useSeoMeta({
		title: 'Music - Home Page',
	})

	const isMoreSongs = ref(false)

	let lastSongId = ''
	let lastLoadedSongId = ''

	const app = useNuxtApp().$app

	const songs: any = ref([])
	const limitFiles = 3

	try {
		const store = initializeFirestore(app, {})
		const collectionRef = collection(store, 'songs')
		const queryRef = query(collectionRef, limit(limitFiles))

		await getSongs(queryRef).then(async (snapshot) => {
			if (!snapshot.empty) {
				snapshot.forEach((doc: any) => {
					addSong(doc)
				})

				lastSongId = songs.docIdLast = await getLastSongId()
				isMoreSongs.value = existsMoreSongs(lastSongId, lastLoadedSongId)
			}
		})
	} catch (error) {
		console.log(error)
	}

	async function getMoreSongs() {
		const loadedLastId = songs.value[songs.value.length - 1].id

		const store = getFirestore(app)
		const collectionRef = collection(store, 'songs')
		const lastDocRef = doc(collectionRef, loadedLastId)

		const lastDoc = await getDoc(lastDocRef)
		const queryRef = query(
			collectionRef,
			limit(limitFiles),
			startAfter(lastDoc),
		)

		const snapshot = await getSongs(queryRef)
		snapshot.forEach((doc: any) => {
			addSong(doc)
			isMoreSongs.value = existsMoreSongs(lastSongId, lastLoadedSongId)
		})
	}

	async function getSongs(queryRef: Query) {
		return await getDocs(queryRef)
	}

	async function getLastSongId() {
		let id = ''
		const store = getFirestore(app)
		const collectionRef = collection(store, 'songs')
		const queryRef = query(
			collectionRef,
			orderBy('__name__', 'asc'),
			limitToLast(1),
		)

		await getDocs(queryRef).then((snapshot) => {
			id = !snapshot.empty ? snapshot.docs[0].id : ''
		})
		return id
	}

	function existsMoreSongs(lastSongId: string, lastLoadedSongId: string) {
		return lastSongId !== lastLoadedSongId
	}

	function addSong(doc: any) {
		const song = {
			...doc.data(),
			id: doc.id,
		}
		songs.value.push(song)
		lastLoadedSongId = songs.value[songs.value.length - 1].id
	}
</script>
