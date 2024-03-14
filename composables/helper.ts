function formatTime(time: number | undefined) {
	if (time !== undefined) {
		const minutes = Math.floor(time / 60) || 0
		const seconds = Math.round(time - minutes * 60 || 0)
		return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
	}
}

function getElapsedTime(date: Date): string {
	const now = new Date()
	const elapsed = now.getTime() - date.getTime()

	const seconds = Math.floor((elapsed / 1000) % 60)
	const minutes = Math.floor((elapsed / (1000 * 60)) % 60)
	const hours = Math.floor((elapsed / (1000 * 60 * 60)) % 24)
	const days = Math.floor(elapsed / (1000 * 60 * 60 * 24))

	if (days > 0) {
		return `${days} day(s) ago`
	} else if (hours > 0) {
		return `${hours} hour(s) ago`
	} else if (minutes > 0) {
		return `${minutes} minute(s) ago`
	} else {
		return `${seconds} second(s) ago`
	}
}

export const useHelper = () => {
	return {
		formatTime,
		getElapsedTime,
	}
}
