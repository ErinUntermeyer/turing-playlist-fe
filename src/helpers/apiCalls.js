export const getSongs = () => {
	return fetch('http://localhost:8080/api/v1/playlist')
		.then(response => {
			if (response.ok) {
				return response.json()
			} else {
				throw response
			}
		})
}

export const postSong = (newSong) => {
	return fetch('http://localhost:8080/api/v1/playlist', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(newSong)
	})
	.then(response => {
		if (response.ok) {
			return response.json()
		} else {
			throw response
		}
	})
}