import React, { Component } from 'react'
import Form from '../Form/Form'
import Songs from '../Songs/Songs'
import './App.css'
import SongController from '../SongController/SongController'
import { getSongs } from '../../helpers/apiCalls'

class App extends Component {
  constructor() {
    super()
    this.state = {
      songQueue: []
    }
	}
	
	componentDidMount() {
		getSongs()
			.then(data => {
				this.setState({ songQueue: data })
			})
	}


  render() {
    return (
      <body className='App'>
        <header className='App-header'>
          <h1>Turing Playlist</h1>
        </header>
        <div className='App-background'>
          <main>
						<Form />
						<Songs allSongs={this.state.songQueue} />
          </main>
        </div> 
      </body>
    )
  }
}

export default App
