import React, { Component } from 'react'
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
      <div className='App'>
        <header className='App-header'>
          <h1>Turing Playlist</h1>
        </header>
        <div className='App-background'>
          <main>
						<Songs
							allSongs={this.state.songQueue}
						/>
          </main>
        </div> 
      </div>
    )
  }
}

export default App
