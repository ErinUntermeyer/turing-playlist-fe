import React from 'react'
import SongCard from './SongCard'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('SongCard Component', () => {

	it('Should display an individual song card', () => {
		render(
			<SongCard
				songName='I am a beautiful song'
				artistName='Yours Truly'
				link='Listen here!'
				id={1}
			/>
		)

		const songName = screen.getByRole('heading', {name: /i am a beautiful song/i})
		const artistName = screen.getByText(/yours truly/i)
		
		expect(songName).toBeInTheDocument()
		expect(artistName).toBeInTheDocument()
	})

})