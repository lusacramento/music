import {
	collection,
	initializeFirestore,
	getDocs,
	query,
	where,
	deleteDoc,
	doc,
} from 'firebase/firestore'

import {
	getStorage,
	uploadBytesResumable,
	ref,
	type UploadTask,
	getDownloadURL,
	deleteObject,
} from 'firebase/storage'

const app = useNuxtApp().$app
const auth = useNuxtApp().$auth

const store = initializeFirestore(app, {})
const colection = collection(store, 'songs')

const queryById = query(colection, where('uid', '==', auth.currentUser?.uid))

const storage = getStorage(app)

async function getSongs() {
	return await getDocs(queryById)
}

function addSong(file: any) {
	const storageRef = ref(storage, `songs/${file.name}`)
	return uploadBytesResumable(storageRef, file)
}

function alterSong() {}

async function deleteSong(originalName: string, id: string) {
	const storageRef = ref(storage, `/songs/${originalName}`)

	await deleteObject(storageRef)
		.then(async () => {
			await deleteDoc(getDocRefById(id))
		})
		.catch((err: any) => {
			console.log(err)
		})
}

function getDocRefById(id: string) {
	return doc(colection, id)
}

export const useISong = () => {
	return {
		getSongs,
		addSong,
		alterSong,
		deleteSong,
	}
}
