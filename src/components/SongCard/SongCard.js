import React from 'react'
import './SongCard.css'

const SongCard = ({ songName, artistName, link, id }) => {
	return (
		<article className='SongCard'>
			<h3>Song Name: {songName}</h3>
			<h4>Artist: {artistName}</h4>
			<a href={link}>Listen to {songName} Here!</a>
		</article>
	)
}

export default SongCard