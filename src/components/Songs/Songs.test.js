import React from 'react'
import Songs from './Songs'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Songs Component', () => {
	let allSongs

	beforeEach(() => {
		allSongs = [
			{
				'songName': 'Cool Beans',
				'artistName': 'The Beans',
				'link': 'link to cool beans',
				'id': 1
			},
			{
				'songName': 'You Are Crushing It',
				'artistName': 'Affirmations',
				'link': 'link to you are crushing it',
				'id': 2
			}
		]
	})

	it('Should display a list of songs', () => {
		render(
			<Songs
				allSongs={allSongs}
			/>
		)

		const songName1 = screen.getByText(/cool beans/i)
		const songName2 = screen.getByText(/you are crushing it/i)
		const artistName1 = screen.getByText(/the beans/i)
		const artistName2 = screen.getByText(/affirmations/i)

		expect(songName1).toBeInTheDocument()
		expect(songName2).toBeInTheDocument()
		expect(artistName1).toBeInTheDocument()
		expect(artistName2).toBeInTheDocument()
	})

})