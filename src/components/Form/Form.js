import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
	constructor() {
		super()
		this.state = {
			song: '',
			artist: '',
			link: ''
		}
	}

	handleInput(event) {
		const inputName = event.target.id
		const inputValue = event.target.value
		this.setState({ [inputName]: inputValue})
	}

	handleSubmit(event) {
		event.preventDefault()
		this.props.addSong(this.state.song, this.state.artist, this.state.link)
		this.setState({
			song: '',
			artist: '',
			link: ''
		})
	}

	render() {
		return (
			<form className='Form-container' onSubmit={(event => this.handleSubmit(event))}>
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
				<button type='submit'>Add Song!</button>
			</form>
		)
	}
}

export default Form