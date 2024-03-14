<template>
	<div class="border border-gray-200 p-3 mb-4 rounded">
		<div v-show="!showForm">
			<h4 class="inline-block text-2xl font-bold">
				{{ props.song.modifiedName }}
			</h4>
			<button
				class="ml-1 py-1 px-2 text-sm rounded text-white bg-red-600 float-right"
				@click.prevent="deleteSong"
			>
				<AppIcon icon="fa-times" class="" />
			</button>
			<button
				class="ml-1 py-1 px-2 text-sm rounded text-white bg-blue-600 float-right"
				@click.prevent="toogleShowform()"
			>
				<AppIcon icon="fa-pencil-alt" class="" />
			</button>
		</div>
		<div v-show="showForm">
			<div
				v-if="showAlert"
				class="text-white text-center font-bold p-4 mb-4"
				:class="alertVariant"
			>
				{{ alertMsg }}
			</div>
			<VeeForm
				:validation-schema="schema"
				:initial-values="song"
				@submit="edit"
			>
				<div class="mb-3">
					<label class="inline-block mb-2">{{
						$t('compositionItem.songTitle')
					}}</label>
					<VeeField
						name="modifiedName"
						type="text"
						class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
						:placeholder="$t('compositionItem.placeholder.title')"
						@input="props.updateUnsavedFlag(true)"
					/>
					<VeeErrorMessage name="modifiedName" class="text-red-600" />
				</div>
				<div class="mb-3">
					<label class="inline-block mb-2">{{
						$t('compositionItem.genre')
					}}</label>
					<VeeField
						name="genre"
						type="text"
						class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
						:placeholder="$t('compositionItem.placeholder.genre')"
						@input="props.updateUnsavedFlag(true)"
					/>
					<VeeErrorMessage name="genre" class="text-red-600" />
				</div>
				<button
					type="submit"
					class="py-1.5 px-3 rounded text-white bg-green-600"
					:disabled="inSubmission"
				>
					{{ $t('compositionItem.submit') }}
				</button>
				<button
					type="button"
					class="py-1.5 px-3 rounded text-white bg-gray-600"
					:disabled="inSubmission"
					@click.prevent="showForm = false"
				>
					{{ $t('compositionItem.back') }}
				</button>
			</VeeForm>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import {
		Form as VeeForm,
		Field as VeeField,
		ErrorMessage as VeeErrorMessage,
	} from 'vee-validate'

	const props = defineProps({
		song: { type: Object, required: true },
		i: { type: Number, required: true },
		updateSong: { type: Function, required: true },
		deleteSong: { type: Function, required: true },
		updateUnsavedFlag: { type: Function, required: true },
	})

	const song = ref({
		modifiedName: props.song.modifiedName,
		genre: props.song.genre,
	})

	const showForm = ref(false)

	function toogleShowform() {
		showForm.value = !showForm.value
	}

	const schema = {
		modifiedName: 'required|min:2|max:100',
		genre: '',
	}

	const inSubmission = ref(false)
	const showAlert = ref(false)

	const alertVariant = ref('')
	const alertMsg = ref('')

	async function edit(values: any) {
		inSubmission.value = true
		showAlert.value = true

		showWaitMessage()

		try {
			await useISong().alterSong(props.song.docId, values)
			props.updateSong(props.i, values)
			props.updateUnsavedFlag(false)
		} catch (error) {
			inSubmission.value = false
			showErrorMessage()
			return
		}

		inSubmission.value = false

		showSuccessMessage()
	}

	async function deleteSong() {
		await useISong().deleteSong(props.song.originalName, props.song.docId)

		props.deleteSong(props.i)
	}

	function showSuccessMessage() {
		alertVariant.value = 'bg-green-500'
		alertMsg.value = 'Success!'
	}

	function showErrorMessage() {
		alertVariant.value = 'bg-red-500'
		alertMsg.value = 'Something went wrong! Try again later'
	}

	function showWaitMessage() {
		alertVariant.value = 'bg-blue-500'
		alertMsg.value = 'Please wait! Updating song info.'
	}
</script>
