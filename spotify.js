const cheerio = require('cheerio')
const axios = require('axios')

axios.get('https://music.apple.com/pg/playlist/top-100-indonesia/pl.2b7e089dc9ef4dd7a18429df9c6e26a3').then((response) => {
    const $ = cheerio.load(response.data)


    const data = $('.chart-table tr')
    console.log("data : ", data.length)

    for (let i = 0; i < data.length; i++) {
        const pos = $(data[i+1]).find('.chart-table-position')
        const judul = $(data[i+1]).find('.chart-table-track strong')
        const penyanyi = $(data[i+1]).find('.chart-table-track span')

        if (judul, penyanyi, pos) {
            const urlText = $(pos).text()
            const urlText1 = $(judul).text()
            const urlText2 = $(penyanyi).text()

            console.log(urlText, urlText1, urlText2)
        }
    }
})


// var data = $('.chart-table tr');
// 				console.log("SPOTIFY DATA", data.length);

// 				data.map((index, item) => {
// 					var item = {
// 						position: $(data[index + 1]).find('.chart-table-position').text(),
// 						song: $(data[index + 1]).find('.chart-table-track strong').text(),
// 						artist: $(data[index + 1]).find('.chart-table-track span').text().replace('by ', ''),
// 						views: $(data[index + 1]).find('.chart-table-streams').text().replace(new RegExp(',', 'g'), ''),
// 						spotify_url: $(data[index + 1]).find('.chart-table-image a').attr('href')

// 					}