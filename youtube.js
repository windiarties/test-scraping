const cheerio = require('cheerio');
const axios = require('axios');


var url = "https://www.youtube.com/c/MusicaStudios/videos";

axios.get(url).then((err, response) => {

    console.log("ini url: ", url)

    const $ = cheerio.load(response.data);
    console.log("respon : ", response.data)

    var data = $('ytd-grid-video-renderer.style-scope.ytd-grid-video-renderer h3.style-scope.ytd-grid-video-renderer, a');

    console.log("pjg data :", data.length)

    for (let i = 0; i < data.length; i++) {
        const pos = (i + 1)
        const judul = $('#eow-title').text();
        const judulFIX = judul.slice(judul.indexOf('-') + 1, judul.length).trim();
        const version = judulFIX.indexOf('(') !== -1 ? judulFIX.slice(judulFIX.indexOf('('), judulFIX.length) : judulFIX.indexOf('|') !== -1 ? judulFIX.slice(judulFIX.indexOf('|'), judulFIX.length) : judulFIX.indexOf('-') !== -1 ? judulFIX.slice(judulFIX.indexOf('-'), judulFIX.length) : judulFIX.indexOf('[') !== -1 ? judulFIX.slice(judulFIX.indexOf('['), judulFIX.length) : '-'
        const penyanyi = judul.slice(0, judul.indexOf('-')).trim();
        const penyanyiFIX = penyanyi.replace(version, '').trim();

        console.log(pos, judulFIX, penyanyiFIX)
    }

    console.log(err)
})

