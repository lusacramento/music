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
		middleware: [function (to, from) {}, 'not-auth'],
		pageTransition: { name: 'fade', mode: 'out-in' },
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

	const isMoreSongs = ref(true)

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
				isMoreSongs.value = await existsMoreSongs(lastSongId, lastLoadedSongId)
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
