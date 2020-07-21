const cheerio = require('cheerio');
const axios = require('axios');

axios.get('https://www.youtube.com/playlist?list=PLkbaG37V-vG8Fib_qvgOKf3qzqA0SUk59').then((response) => {
    const $ = cheerio.load(response.data)
    const data = $('.ytd-playlist-video-renderer div.style-scope.ytd-playlist-video-renderer, span')
    console.log("data : ", data.length)
    console.log(data.text())
    

    // for (let i = 0; i < data.length; i++) {
    //     const pos = (i + 1)
    //     const judul = $('#eow-title').text();
    //     const judulFIX = judul.slice(judul.indexOf('-') + 1, judul.length).trim();
    //     const version = judulFIX.indexOf('(') !== -1 ? judulFIX.slice(judulFIX.indexOf('('), judulFIX.length) : judulFIX.indexOf('|') !== -1 ? judulFIX.slice(judulFIX.indexOf('|'), judulFIX.length) : judulFIX.indexOf('-') !== -1 ? judulFIX.slice(judulFIX.indexOf('-'), judulFIX.length) : judulFIX.indexOf('[') !== -1 ? judulFIX.slice(judulFIX.indexOf('['), judulFIX.length) : '-'
    //     const penyanyi = judul.slice(0, judul.indexOf('-')).trim();
    //     const penyanyiFIX = penyanyi.replace(version, '').trim();

    //     console.log(pos, judulFIX, penyanyiFIX)
    // }

    // console.log(err)
})

