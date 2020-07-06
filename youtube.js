const cheerio = require('cheerio')
const axios = require('axios')

axios.get('https://www.youtube.com/user/musicastudios/videos').then((response) => {

    const $ = cheerio.load(response.data)
    var data = $('ytd-grid-video-renderer');
    console.log("data youtube : ", data.length)

    for (let i = 0; i < data.length; i++) {
        const pos = (i + 1)
        // const list = $(data[i + 1]).find('strong').text().replace('⇧', '').replace('⇩', '').replace('≡', '').replace('⇳', '').replace('☆', '').replace(new RegExp('[0-9]', 'g'), '')
        const judul = $('#eow-title').text();
        const judulFIX = judul.slice(judul.indexOf('-') + 1, judul.length).trim();
        const version = judulFIX.indexOf('(') !== -1 ? judulFIX.slice(judulFIX.indexOf('('), judulFIX.length) : judulFIX.indexOf('|') !== -1 ? judulFIX.slice(judulFIX.indexOf('|'), judulFIX.length) : judulFIX.indexOf('-') !== -1 ? judulFIX.slice(judulFIX.indexOf('-'), judulFIX.length) : judulFIX.indexOf('[') !== -1 ? judulFIX.slice(judulFIX.indexOf('['), judulFIX.length) : '-'
        const penyanyi = judul.slice(0, judul.indexOf('-')).trim();
        const penyanyiFIX = penyanyi.replace(version, '').trim();

        console.log(pos, judulFIX, penyanyiFIX)
    }
})