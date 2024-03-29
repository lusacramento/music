<template>
	<div class="bg-white rounded border border-gray-200 relative flex flex-col">
		<div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
			<span class="card-title">{{ $t('upload.upload') }}</span>
			<AppIcon
				icon="fas fa-upload"
				class="float-right text-green-400 text-2xl"
			/>
		</div>
		<div class="p-6">
			<!-- Upload Dropbox -->
			<div
				class="w-full px-10 py-20 rounded text-center cursor-pointer border border-dashed border-gray-400 text-gray-400 transition duration-500 hover:text-white hover:bg-green-400 hover:border-green-400 hover:border-solid"
				:class="{ 'bg-green-400 border-green-400 border-solid': isDragover }"
				@drag.prevent.stop=""
				@dragstart.prevent.stop=""
				@dragend.prevent.stop="isDragover = false"
				@dragover.prevent.stop="isDragover = true"
				@dragenter.prevent.stop="isDragover = true"
				@dragleave.prevent.stop="isDragover = false"
				@drop.prevent.stop="upload($event)"
			>
				<h5>{{ $t('upload.drop') }}</h5>
			</div>
			<input
				type="file"
				name="upload-songs"
				id="upload-songs"
				multiple
				title="haga clic para cargar el archivo"
				@change="upload($event)"
			/>
			<hr class="my-6" />
			<!-- Progess Bars -->
			<div class="mb-4" v-for="upload in uploads" :key="upload.name">
				<!-- File Name -->
				<div class="font-bold text-sm" :class="upload.textClass">
					<AppIcon :icon="upload.icon" :is-animate="upload.isAnimateIcon" />
					{{ upload.name }}
				</div>
				<div class="flex h-4 overflow-hidden bg-gray-200 rounded">
					<!-- Inner Progress Bar -->
					<div
						class="transition-all progress-bar bg-blue-400"
						:class="upload.variant"
						:style="{ width: upload.currentProgress + '%' }"
					></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { type UploadTask, getDownloadURL } from 'firebase/storage'

	import type { SongDetails } from '~/composables/songDetail'

	const props = defineProps({
		addSong: { type: Function, required: true },
	})

	interface upLoad {
		task: UploadTask | null
		currentProgress: number
		name: string
		variant: string
		icon: string
		isAnimateIcon: boolean
		textClass: string
	}

	const uploads: Ref<upLoad[]> | any = ref([])

	const isDragover = ref(false)

	const nuxtApp = useNuxtApp()
	const auth = nuxtApp.$auth

	function upload($event: any) {
		isDragover.value = false

		const files = $event.dataTransfer
			? [...$event.dataTransfer.files]
			: [...$event.target.files]

		files.forEach(async (file) => {
			if (!isAudioFile(file.type)) return

			if (!navigator.onLine) {
				uploads.value.push({
					task: null,
					currentProgress: 100,
					name: file.name,
					variant: 'bg-red-400',
					icon: 'faTimes',
					textClass: 'text-red-400',
				})
				return
			}

			const task = useISong().addSong(file)

			const uploadIndex =
				uploads.value.push({
					task: task,
					currentProgress: 0,
					name: file.name,
					variant: 'bg-blue-400',
					icon: 'fa-solid fa-spinner',
					textClass: '',
					isAnimateIcon: true,
				}) - 1

			task.on(
				'state_changed',
				(snapshot) => {
					const progress =
						(snapshot.bytesTransferred / snapshot.totalBytes) * 100
					uploads.value[uploadIndex].currentProgress = progress
					uploads.value[uploadIndex].name = `${file.name} (${progress.toFixed(
						0,
					)}%)`
				},
				() => {
					showErrorMessage(uploadIndex, file.name)
				},
				async () => {
					const song: SongDetails = await {
						uid: await auth.currentUser?.uid,
						displayName: await auth.currentUser?.displayName,
						originalName: await task.snapshot.ref.name,
						modifiedName: await task.snapshot.ref.name,
						genre: '',
						commentCount: 0,
						url: await getDownloadURL((await task).ref),
						created: new Date(),
					}

					await postSongDetail(song)

					showSuccessMessage(uploadIndex, file.name)
				},
			)
		})
	}

	function isAudioFile(file: any) {
		return file === 'audio/mpeg'
	}

	async function postSongDetail(song: SongDetails) {
		try {
			const songRef = await useISong().addDetailsSong(song)

			const songSnapshot = await useISong().getSong(songRef)

			await props.addSong(songSnapshot)
		} catch (error) {
			return error
		}
	}

	const cancelUploads = function () {
		uploads.value.forEach((upload: any) => {
			upload.task.cancel()
		})
	}

	defineExpose({
		cancelUploads,
	})

	function showSuccessMessage(uploadIndex: number, fileName: string) {
		uploads.value[uploadIndex].variant = 'bg-green-400'
		uploads.value[uploadIndex].icon = 'fa fa-check'
		uploads.value[uploadIndex].textClass = 'text-green-400	'
		uploads.value[uploadIndex].isAnimateIcon = false
		uploads.value[uploadIndex].name = `"${fileName}" upload with success!`
	}

	function showErrorMessage(uploadIndex: number, fileName: string) {
		uploads.value[uploadIndex].variant = 'bg-red-400'
		uploads.value[uploadIndex].icon = 'fa fa-times'
		uploads.value[uploadIndex].textClass = 'text-red-400	'
		uploads.value[uploadIndex].isAnimateIcon = false
		uploads.value[
			uploadIndex
		].name = `Error. The "${fileName}" file size may be too large.`
	}
</script>
