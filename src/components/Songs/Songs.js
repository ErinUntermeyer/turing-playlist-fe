import React from 'react'
import SongCard from '../SongCard/SongCard'
import './Songs.css'

const Songs = ({ allSongs }) => {
	const songList = allSongs.map(song => {
		return (
			<SongCard
				songName={song.songName}
				artistName={song.artistName}
				link={song.link}
				id={song.id}
				key={song.id}
			/>
		)
	})

	return (
		<section className='Songs-container'>
			<h2>All Songs</h2>
			{songList}
		</section>
	)
}

export default Songs