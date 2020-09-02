import React from 'react'
import App from './App'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { getSongs, postSong } from '../../helpers/apiCalls.js'
jest.mock('../../helpers/apiCalls.js')

describe('App Component', () => {

	it('Should allow a user to add a new song', async () => {
		getSongs.mockResolvedValueOnce([])
		const { findByRole, findByText } = render(<App />)

		const songInputLabel = screen.getByLabelText(/song name:/i)
		const artistInputLabel = screen.getByLabelText(/artist name:/i)
		const linkInputLabel = screen.getByLabelText(/link:/i)
		fireEvent.change((songInputLabel), { target: { value: 'Reacc Attac' } })
		fireEvent.change((artistInputLabel), { target: { value: 'Khalid and Casey' } })
		fireEvent.change((linkInputLabel), { target: { value: 'link to reacc attac' } })
		const addSongButton = screen.getByRole('button', {name: /add song!/i})

		postSong.mockResolvedValueOnce({
				'songName': 'reacc attac',
				'artistName': 'khalid and casey',
				'link': 'www.youtube.com/reaccattac',
				'id': 1
		})
		fireEvent.click(addSongButton)

		const newSongName = await findByRole('heading', {name: /reacc attac/i})
		const newArtistName = await findByRole('heading', {name: /khalid and casey/i})
		const newLink = await findByText(/listen to reacc attac here!/i)

		expect(newSongName).toBeInTheDocument()
		expect(newArtistName).toBeInTheDocument()
		expect(newLink).toBeInTheDocument()
	})

})
