<template>
	<div>
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
				>
					<AppIcon icon="fa-play" class="" />
				</button>
				<div class="z-50 text-left ml-8">
					<!-- Song Info -->
					<div class="text-3xl font-bold">{{ song.modifiedName }}</div>
					<div>{{ song.genre }}</div>
				</div>
			</div>
		</section>
		<!-- Form -->
		<section class="container mx-auto mt-6">
			<div
				class="bg-white rounded border border-gray-200 relative flex flex-col"
			>
				<div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
					<!-- Comment Count -->
					<span class="card-title">Comments (15)</span>
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
		</ul>

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
	} from 'firebase/firestore'

	import {
		Form as VeeForm,
		Field as VeeField,
		ErrorMessage as VeeErrorMessage,
	} from 'vee-validate'

	definePageMeta({
		middleware: [function (to, from) {}, 'auth'],
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

	// computed(() => {
	// 	const sortedComments = function () {
	// 		return comments.value.slice().sort((a: Object, b: Object) => {
	// 			if (sort.value === 1) {
	// 				return new Date(b.datePosted) - new Date(a.datePosted)
	// 			}
	// 		})
	// 	}
	// })

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

		const now = new Date()

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
				comment_in_submission.value = false
				showSuccessMessage()
				await comments.value.push(comment)
				resetForm()
			})
		} catch (error) {
			console.log(error)
		}
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
		console.log(comments.value)
	}

	function invertOrder() {
		comments.value = comments.value.reverse()
	}

	// function showErrorMessage(error: any) {
	// 	comment_alert_variant.value = 'bg-red-500'

	// 	const messengeErrorResponse = error.customData._tokenResponse.error.message
	// 	messengeErrorResponse === 'EMAIL_EXISTS'
	// 		? (comment_alert_msg.value = 'This email is already commentistered!')
	// 		: (comment_alert_msg.value =
	// 				'An unexpected error occured. Please try again later.')
	// }
</script>
