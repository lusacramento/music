<template>
	<main>
		<!-- Music Header -->
		<section class="w-full mb-8 py-14 text-center text-white relative">
			<div
				class="absolute inset-0 w-full h-full box-border bg-contain music-bg"
				style="background-image: url(/imgs/song-header.png)"
			></div>
			<div class="container mx-auto flex items-center">
				<!-- Play/Pause Button -->
				<button
					type="button"
					class="z-50 h-24 w-24 text-3xl bg-white text-black rounded-full focus:outline-none"
					@click.prevent="newSong(song)"
				>
					<AppIcon icon="fa-play" class="" />
				</button>
				<div class="z-50 text-left ml-8">
					<!-- Song Info -->
					<ClientOnly>
						<div class="text-3xl font-bold">{{ song.modifiedName }}</div>
						<div>{{ song.genre }}</div>
					</ClientOnly>
				</div>
			</div>
		</section>
		<!-- Form -->
		<section id="comments" class="container mx-auto mt-6">
			<div
				class="bg-white rounded border border-gray-200 relative flex flex-col"
			>
				<div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
					<!-- Comment Count -->
					<ClientOnly>
						<span class="card-title">Comments ({{ song.commentCount }}) </span>
					</ClientOnly>
					<AppIcon
						icon="fa-comments"
						class="float-right text-green-400 text-2xl"
					/>
				</div>
				<div class="p-6">
					<div
						v-if="comment_show_alert"
						class="text-white text-center font-bold p-4 mb-4"
						:class="comment_alert_variant"
					>
						{{ comment_alert_msg }}
					</div>
					<VeeForm
						v-if="isLoggedIn"
						:validation-schema="schema"
						@submit="addComment"
					>
						<VeeField
							as="textarea"
							name="comment"
							class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded mb-4"
							placeholder="Your comment here..."
						/>
						<ErrorMessage class="text-red-600" name="comment" />
						<button
							type="submit"
							class="py-1.5 px-3 rounded text-white bg-green-600 block"
							:disabled="comment_in_submission"
						>
							Submit
						</button>
					</VeeForm>
					<!-- Sort Comments -->
					<select
						id="order-select"
						class="block mt-4 py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
						v-model="order"
					>
						<option value="true">Latest</option>
						<option value="false">Oldest</option>
					</select>
				</div>
			</div>
		</section>
		<!-- Comments -->
		<ul class="container mx-auto">
			<ClientOnly>
				<li
					class="p-6 bg-gray-50 border border-gray-200"
					v-for="comment in comments"
					:key="comment.id"
				>
					<!-- Comment Author -->
					<div class="mb-5">
						<div class="font-bold">{{ comment.auth }}</div>
						<time>{{ comment.datePosted }}</time>
					</div>

					<p>{{ comment.content }}</p>
				</li>
			</ClientOnly>
		</ul>
	</main>
</template>

<script lang="ts" setup>
	import {
		collection,
		initializeFirestore,
		doc,
		getDoc,
		getFirestore,
		addDoc,
		query,
		where,
		getDocs,
		orderBy,
		serverTimestamp,
		updateDoc,
	} from 'firebase/firestore'

	import {
		Form as VeeForm,
		Field as VeeField,
		ErrorMessage as VeeErrorMessage,
	} from 'vee-validate'
	import { useMyPlayerStore } from '~/stores/player'

	definePageMeta({
		middleware: [function (to, from) {}, 'not-auth'],
		pageTransition: { name: 'fade', mode: 'out-in' },
	})

	const schema = {
		comment: 'required|min:3|max:300|alpha-spaces',
	}

	const comment_in_submission = ref(false)
	const comment_show_alert = ref(false)
	const comment_alert_variant = ref('bg-blue-500')
	const comment_alert_msg = ref('Please wait! Your comment is being submitted.')

	const route = useRoute()
	const router = useRouter()
	const app = useNuxtApp().$app
	const auth = useNuxtApp().$auth

	const id = route.params.id as string | undefined
	const song: Ref<any> = ref({})
	const comments: Ref<any[]> = ref([])
	let order = ref(true)

	watch(order, () => {
		invertOrder()
	})

	const isLoggedIn = await useMyUserStore().isLoggedIn
	await getSong()
	await getComments()

	async function getSong() {
		try {
			const store = initializeFirestore(app, {})
			const collectionRef = collection(store, 'songs')
			const docRef = doc(collectionRef, id)

			await getDoc(docRef).then((docSnap) => {
				!docSnap.exists()
					? router.push('/')
					: (song.value = { ...docSnap.data() })
			})
		} catch (error) {}
	}

	async function addComment(values: any, { resetForm }: any) {
		comment_in_submission.value = true
		comment_show_alert.value = true

		comment_alert_variant.value = 'bg-blue-500'
		comment_alert_msg.value = 'Please wait! Your comment is being submitted'

		const now = serverTimestamp()

		const comment = {
			content: values.comment,
			datePosted: now,
			sid: id,
			auth: auth.currentUser?.displayName,
			uid: auth.currentUser?.uid,
		}

		try {
			const store = getFirestore(app)
			const collectionRef = collection(store, 'comments')

			await addDoc(collectionRef, comment).then(async (snapshot) => {
				await updateCommentsCounter()

				await comments.value.push(comment)

				resetForm()
				comment_in_submission.value = false

				showSuccessMessage()
			})
		} catch (error) {
			showErrorMessage(error)
		}
	}

	async function updateCommentsCounter() {
		song.value.commentCount++

		try {
			const store = initializeFirestore(app, {})
			const collectionRef = collection(store, 'songs')
			const docRef = doc(collectionRef, id)

			await updateDoc(docRef, { commentCount: song.value.commentCount++ })
		} catch (error) {}
	}

	function showSuccessMessage() {
		comment_alert_variant.value = 'bg-green-500'
		comment_alert_msg.value = 'Comment added!'
	}

	async function getComments() {
		try {
			const store = getFirestore(app)
			const collectionRef = collection(store, 'comments')
			const queryRef = query(
				collectionRef,
				where('sid', '==', id),
				orderBy('datePosted', 'desc'),
			)

			await getDocs(queryRef).then((snapshot) => {
				snapshot.forEach(async (doc) => {
					const currentComment: any = await {
						id: doc.id,
						...doc.data(),
					}
					currentComment.datePosted = new Date(currentComment.datePosted * 1000)
					comments.value.push({
						...currentComment,
					})
				})
			})
		} catch (error) {
			console.log(error)
		}
	}

	function invertOrder() {
		comments.value = comments.value.reverse()
	}

	function showErrorMessage(error: any) {
		comment_alert_variant.value = 'bg-red-500'
		comment_alert_msg.value =
			'An unexpected error occured. Please try again later.'
	}

	function newSong(song: any) {
		useMyPlayerStore().newSong(song)
	}
</script>