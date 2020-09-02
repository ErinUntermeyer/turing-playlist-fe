import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
	constructor() {
		super()
		this.state = {

		}
	}

	render() {
		return (
			<form>
				<h2>Add A New Song!</h2>
				<label htmlFor='song'>Song Name:</label>
				<input
					className='song-input'
					type='text'
					id='song'
					value={this.state.song}
					onChange={(event) => this.handleInput(event)}
				/>
				<label htmlFor='artist'>Artist Name:</label>
				<input
					className='artist-input'
					type='text'
					id='artist'
					value={this.state.artist}
					onChange={(event) => this.handleInput(event)}
				/>
				<label htmlFor='link'>Link:</label>
				<input
					className='link-input'
					type='text'
					id='link'
					value={this.state.link}
					onChange={(event) => this.handleInput(event)}
				/>
			</form>
		)
	}
}

export default Form