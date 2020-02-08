import React, {Component} from 'react';
import ReactAudioPlayer from 'react-audio-player';

/*
https://www.freexmasmp3.com/
https://www.npmjs.com/package/react-h5-audio-player
 */


var fileSongs = [
	        	{
	        		"title": "\"Jingle Bells\" - Country take",
	        		"fileName": "jingle-bells-country.mp3",
	        		"creditUrl": "https://www.freexmasmp3.com/jingle-bells-country.html",
	        		"creditDescription": "Worldwide known Christmas song composed in 1850 by James Pierpont while living in Georgia. Even if very popular for Christmas, this song tells of popular sled races. Original name of the song was \"One Horse Open Sleigh\". Share with your friends this funny version."
	        	},
	        	{
	        		"title": "\"We wish you a Merry Christmas\"",
	        		"fileName": "we-wish-you-a-merry-christmas.mp3",
	        		"creditUrl": "https://www.freexmasmp3.com/we-wish-you.html",
	        		"creditDescription": "Traditional English carol from England. Original author is unknown. This song is linked to the old tradition of the carolers singing this song on Christmas Eve for wealthy song."
	        	},
	        	{
	        		"title": "\"O Little Town of Bethlehem\"",
	        		"fileName": "bethlem-jazz.mp3",
	        		"creditUrl": "https://www.freexmasmp3.com/bethlem-jazz.html",
	        		"creditDescription": "Jazz arrangement of this traditional Christmas carol. Lyrics was written from the priest Philips Brooks inspired by his visit to the city of Bethlehem, while his organist Lewis Redner added the melody. This record is one of our best tracks. Use it to test audio quality of your device."
	        	},
	        	{
	        		"title": "\"Silent Night\" - Solo piano edition",
	        		"fileName": "silent-night-disco.mp3",
	        		"creditUrl": "https://www.freexmasmp3.com/silent-night-piano.html",
	        		"creditDescription": "Delicate piano execution of this worldwide known Christmas carol. Lyrics of this song talks about love and peace."
	        	},
	        	{
	        		"title": "\"The Twelve Days of Christmas\"",
	        		"fileName": "12-days-funk.mp3",
	        		"creditUrl": "https://www.freexmasmp3.com/12-days-funk.html",
	        		"creditDescription": "Funky arrangement of this very famous Christmas carol played with electric piano and guitar. Origin of this song is unknown. It's believed that lyrics have a hidden religious meaning. This one works very well as smartphone ringtone."
	        	},
	        	{
	        		"title": "\"First Noel\" - R&B version",
	        		"fileName": "first-noel-r&b.mp3",
	        		"creditUrl": "https://www.freexmasmp3.com/first-noel.html",
	        		"creditDescription": "Traditional English Christmas song in a Rhythm and Blues instrumental version. The author of this song in unknown, many dates it back to 13th century. The first publications were with the name \"The first nowell\"."
	        	},
        	];




export default class SongPlayer extends Component {

    constructor(props) {
        super(props);
        this.state = {
        	activeSong: false,
        	songs: fileSongs,
        	songsReduced: fileSongs
        }
    }

    componentDidMount = () => {
    	this.setSong();
    }

    setSong = () => {
		
		var songs = this.state.songs;
		
		var songLength = songs.length;
		var randomNumber = Math.floor((Math.random() * songLength) + 1) - 1;

		var activeSong = songs[ randomNumber ];

		// songs.splice( randomNumber, 1 );

		const songsInfo = {
			songsReduced: songs,
			activeSong: activeSong
		}

		this.setState({
			songsReduced: songsInfo.songsReduced,
			activeSong: songsInfo.activeSong
		});

    }

    render() {
    	if( this.props.musicAnswer !== 'yes' && this.props.musicAnswer !== 'now' ) {
    		return '';
    	}

        return (
	        <div className="song-player">
	            <ReactAudioPlayer
		            src={`/audio/${this.state.activeSong.fileName}`}
		            controls
		            autoPlay
		            onEnded={this.setSong}
	            />
	            <h4>{this.state.activeSong.title}</h4>
	            <h5>Brought to you by: <a href={this.state.activeSong.creditUrl} rel="noopener noreferrer" target="_blank">Free Christmas Mp3</a> </h5>
	         </div>
        )
    }
}