function formatTime(time: number | undefined) {
	if (time !== undefined) {
		const minutes = Math.floor(time / 60) || 0
		const seconds = Math.round(time - minutes * 60 || 0)
		return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
	}
}

export const useHelper = () => {
	return {
		formatTime,
	}
}
