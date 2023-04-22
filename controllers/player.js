const axios = require("axios");
const qs = require("qs");
require("dotenv").config();

const auth = require("./auth.js")

const clientID = process.env.SPOTIFY_API_ID; 
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const authToken = Buffer.from(`${clientID}:${clientSecret}`, 'utf-8').toString('base64');

require("dotenv").config();

class Player {
    constructor(token, playlistID) {
        this.token = token;
        this.playlistID = playlistID;
        this.shuffle = false;
        this.loadPlaylist();
    };

    async play() {
    };

    async previous () {

    };

    async next() {

    };

    async shuffle() {

    };

    async repeat() {

    }

    async loadPlaylist() {
        const accessToken = await auth.getAuth(this.token);

        const url = `https://api.spotify.com/v1/playlists/${this.playlistID}/tracks`;

        try {
            const response = await axios.get(url, {
                headers: {
                    "Authorization": `Bearer ${accessToken}`,
                }
            });
            
            console.log(JSON.stringify(response.data.items[0], null, 4));
            return response.data;
        }
        catch (error) {
            console.log(error);
        }
    }
};

const player = new Player(authToken, "29UlLIrAdheRgpgxvZoiR7");
