import React from 'react'
import Form from './Form'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Form Component', () => {

	it('Should display a form to add a new song', () => {
		render(<Form />)

		const songInput = screen.getByLabelText(/song name:/i)
		const artistInput = screen.getByLabelText(/artist name:/i)
		const linkInput = screen.getByLabelText(/link:/i)

		expect(songInput).toBeInTheDocument()
		expect(artistInput).toBeInTheDocument()
		expect(linkInput).toBeInTheDocument()
	})

})