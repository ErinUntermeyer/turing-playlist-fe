import React from 'react'
import Form from './Form'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Form Component', () => {

	it('Should display a form to add a new song', () => {
		render(<Form />)

		const songInputLabel = screen.getByLabelText(/song name:/i)
		const artistInputLabel = screen.getByLabelText(/artist name:/i)
		const linkInputLabel = screen.getByLabelText(/link:/i)

		expect(songInputLabel).toBeInTheDocument()
		expect(artistInputLabel).toBeInTheDocument()
		expect(linkInputLabel).toBeInTheDocument()
	})

	it('Should capture the value from the input fields', () => {
		render(<Form />)

		const songInputLabel = screen.getByLabelText(/song name:/i)
		const artistInputLabel = screen.getByLabelText(/artist name:/i)
		fireEvent.change((songInputLabel), {target: {value: 'LALALA!'}})
		fireEvent.change((artistInputLabel), {target: {value: 'Howard and Finn'}})
		const songInput = screen.getByDisplayValue(/lalala!/i)
		const artistInput = screen.getByDisplayValue(/howard and finn/i)

		expect(songInput).toBeInTheDocument()
		expect(artistInput).toBeInTheDocument()
	})

})