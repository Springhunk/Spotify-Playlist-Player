const axios = require("axios");
const qs = require("qs");
require("dotenv").config();

const clientID = process.env.SPOTIFY_API_ID; 
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const authToken = Buffer.from(`${clientID}:${clientSecret}`, 'utf-8').toString('base64');

module.exports.getAuth = async (token) => {
    try {
        const url = "https://accounts.spotify.com/api/token";
        const data = qs.stringify({"grant_type": "client_credentials"});

        const response = await axios.post(url, data, {
            headers: {
                "Authorization": `Basic ${token}`,
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });

        return response.data.access_token;
    }
    catch(error) {
        console.log(error)
    }
};

