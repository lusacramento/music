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
						<div class="song-price">{{ $n(price, 'currency') }}</div>
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
						<span class="card-title"
							>{{
								$t('song.commentCount', {
									count: song.commentCount,
								})
							}}
							({{ song.commentCount }})
						</span>
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
							:placeholder="$t('song.placeholder')"
						/>
						<ErrorMessage class="text-red-600" name="comment" />
						<button
							type="submit"
							class="py-1.5 px-3 rounded text-white bg-green-600 block"
							:disabled="comment_in_submission"
						>
							{{ $t('song.submit') }}
						</button>
					</VeeForm>
					<!-- Sort Comments -->
					<select
						id="order-select"
						class="block mt-4 py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
						v-model="order"
					>
						<option value="true">{{ $t('song.order.latest') }}</option>
						<option value="false">{{ $t('song.order.oldest') }}</option>
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
	import { serverTimestamp } from 'firebase/firestore'

	import { Form as VeeForm, Field as VeeField } from 'vee-validate'
	import { useMyPlayerStore } from '~/stores/player'

	import Freecurrencyapi from '@everapi/freecurrencyapi-js'

	definePageMeta({
		middleware: [function (to, from) {}, 'song-middleware'],
		pageTransition: { name: 'fade', mode: 'out-in' },
	})

	import '@/plugins/firebase.client'
	const schema = {
		comment: 'required|min:3|max:300|alpha-spaces',
	}

	import { storeToRefs } from 'pinia'

	const comment_in_submission = ref(false)
	const comment_show_alert = ref(false)
	const comment_alert_variant = ref('bg-blue-500')
	const comment_alert_msg = ref('Please wait! Your comment is being submitted.')

	const route = useRoute()
	const auth = useNuxtApp().$auth

	const id = route.params.id as string | undefined
	const song: Ref<any> = storeToRefs(useMySongStore()).getSong
	const commentsStore = useMyCommentsStore()
	const comments: Ref<any[]> = storeToRefs(commentsStore).getComments
	if (id != undefined) commentsStore.getCommentsOnStore(id)

	let order = ref(true)

	watch(order, () => {
		invertOrder()
	})

	const isLoggedIn = await useMyUserStore().isLoggedIn

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
			await commentsStore.addCommentOnStore(comment)
			await updateCommentsCounter()
			resetForm()
			comment_in_submission.value = false
			showSuccessMessage()
		} catch (error) {
			showErrorMessage(error)
		}
	}

	async function updateCommentsCounter() {
		song.value.commentCount++

		useMySongStore().updateCommentsCounterOnStore()
	}

	function showSuccessMessage() {
		comment_alert_variant.value = 'bg-green-500'
		comment_alert_msg.value = 'Comment added!'
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

	const price = ref(0)
	price.value = getPrice()

	function getPrice() {
		const price2 = 2

		const currencyRate = 4.79
		// const currency = new Freecurrencyapi(
		// 	'fca_live_AXSk1x6BuCgKsUzOFhqiw6983ghx9i6kdwYD8oA1',
		// )

		// currency
		// 	.latest({
		// 		base_currency: 'USD',
		// 		currencies: 'BRL',
		// 	})
		// 	.then((response: any) => {
		// 		console.log(response)
		// 	})

		if (useNuxtApp().$i18n.locale.value === 'pt') return price2 * currencyRate
		return price2
	}
</script>
