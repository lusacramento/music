import { createUserWithEmailAndPassword, type Auth } from 'firebase/auth'

export const useUser = () => {
	const nuxtApp = useNuxtApp()
	const auth = nuxtApp.$auth

	const createUser = async (email: string, password: string) => {
		try {
			const { user } = await createUserWithEmailAndPassword(
				auth,
				email,
				password,
			)
		} catch (error: unknown) {
			if (error instanceof Error) {
				console.log(`Erro: ${error}`)
			}
		}
	}

	return { createUser }
}
