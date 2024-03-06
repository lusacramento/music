<template>
	<div>
		<!-- Main Content -->
		<section class="container mx-auto mt-6">
			<div class="md:grid md:grid-cols-3 md:gap-4">
				<div class="col-span-1">
					<AppUpload ref="upload" :addSong="addSong" />
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
								:i="i"
								:updateSong="updateSong"
								:deleteSong="deleteSong"
								:updateUnsavedFlag="updateUnsavedFlag"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script lang="ts" setup>
	definePageMeta({
		middleware: [function (to, from) {}, 'auth'],
	})

	useSeoMeta({
		title: 'Music - Manage',
	})

	import Upload from '@/components/AppUpload.vue'

	import { useISong } from '~/composables/iSong'

	const songs: any = ref([])

	const snapshot = await useISong().getSongsById()

	snapshot.forEach((doc) => {
		addSong(doc)
	})

	useSeoMeta({
		title: 'Music - Manage',
	})

	const upload = ref<InstanceType<typeof Upload> | null>(null)

	let unsavedFlag = false

	onBeforeRouteLeave((to, from, next) => {
		upload.value?.cancelUploads()

		if (!unsavedFlag) {
			next()
		} else {
			const leave = confirm(
				'You have unsaved changes. Are you sure you want to leave?',
			)
			next(leave)
		}
	})

	function addSong(doc: any) {
		const song = {
			...doc.data(),
			docId: doc.id,
		}
		songs.value.push(song)
	}

	function updateSong(this: any, i: string, song: any) {
		songs.value[i].modifiedName = song.modifiedName
		songs.value[i].genre = song.genre
	}

	function deleteSong(i: number) {
		songs.value.splice(i, 1)
	}

	function updateUnsavedFlag(isUnsaved: boolean) {
		unsavedFlag = isUnsaved
	}
</script>
