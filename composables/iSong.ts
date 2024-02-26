import {
	collection,
	initializeFirestore,
	getDocs,
	query,
	where,
} from 'firebase/firestore'

const app = useNuxtApp().$app
const auth = useNuxtApp().$auth

const store = initializeFirestore(app, {})
const colection = collection(store, 'songs')

const queryById = query(colection, where('uid', '==', auth.currentUser?.uid))

async function getSongs() {
	return await getDocs(queryById)
}

function addSong() {}

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
