import {
	collection,
	initializeFirestore,
	getDocs,
	query,
	where,
} from 'firebase/firestore'

import {
	getStorage,
	uploadBytesResumable,
	ref,
	type UploadTask,
	getDownloadURL,
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

function deleteSong() {}
export const useISong = () => {
	return {
		getSongs,
		addSong,
		alterSong,
		deleteSong,
	}
}
