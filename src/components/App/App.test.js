import React from 'react'
import App from './App'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('App Component', () => {

	it('Should allow a user to add a new song', () => {
		render(<App />)

		const songInputLabel = screen.getByLabelText(/song name:/i)
		const artistInputLabel = screen.getByLabelText(/artist name:/i)
		const linkInputLabel = screen.getByLabelText(/link:/i)
		fireEvent.change((songInputLabel), { target: { value: 'Reacc Attac' } })
		fireEvent.change((artistInputLabel), { target: { value: 'Khalid and Casey' } })
		fireEvent.change((linkInputLabel), { target: { value: 'link to reacc attac' } })
		const addSongButton = screen.getByRole('button', {name: /add song!/i})
		fireEvent.click(addSongButton)
		const newSongName = screen.getByRole('heading', {name: /reacc attac/i})
		const newArtistName = screen.getByRole('heading', {name: /khalid and casey/i})
		const newLink = screen.getByText(/listen to reacc attac here!/i)

		expect(newSongName).toBeInTheDocument()
		expect(newArtistName).toBeInTheDocument()
		expect(newLink).toBeInTheDocument()
	})

})
