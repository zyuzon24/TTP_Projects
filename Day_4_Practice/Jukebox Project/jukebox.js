function Jukebox () {
    this.
    this.playlist = [
  		{name: "<em>Hooked on a Feeling</em> - Blue Swede", file: "Blue Swede - Hooked On A Feeling.mp3", image: "https://images.genius.com/19ede64f0706557eed5b25e218c91c26.500x500x1.jpg"},
		{name: "<em>Feel it Still</em> - Portugal. The Man", file: "FEEL-IT-STILL.mp3", image: "http://cdn.pastemagazine.com/www/articles/PTM_Woodstock.jpg"},
		{name: "<em>West Coast</em> - Lana Del Rey", file: "WEST-COAST.mp3", image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/Lana_Del_Rey_-_West_Coast.png/220px-Lana_Del_Rey_-_West_Coast.png"},
		{name: "<em>Down</em> - Marian Hill", file: "DOWN.mp3", image: "https://is4-ssl.mzstatic.com/image/thumb/Music49/v4/d4/f3/f7/d4f3f75f-bc14-e6b2-6fd2-ae6b439501e5/source/1200x630bb.jpg"},
		{name: "<em>Madness</em> - Muse", file: "MADNESS.mp3", image: "https://upload.wikimedia.org/wikipedia/en/9/9b/Muse_-_Madness.jpg"},
		{name: "<em>Redbone</em> - Childish Gambino", file: "REDBONE.mp3", image: "https://images.genius.com/ff5ee117884906685f99f5a37747bcaf.1000x1000x1.jpg"}
	];
    this.currentSong = 0;
}

Jukebox.prototype = {
    playSong: function(){
        return this.player.play();
    }
}