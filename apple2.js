const cheerio = require('cheerio')
const axios = require('axios')

axios.get('https://music.apple.com/pg/playlist/top-100-indonesia/pl.2b7e089dc9ef4dd7a18429df9c6e26a3').then((response) => {
    const $ = cheerio.load(response.data)


    const data = $('.songs-list div.song')
    console.log("data : ", data.length)

    for (let i = 0; i < data.length; i++) {
        const pos = (i + 1)
        const judul = $(data[i]).find('div.col-song div.col-song__wrapper div.two-lines div.song-name-wrapper div.typography-label').text()
        const penyanyi = $(data[i]).find('div.col-song div.col-song__wrapper div.two-lines div.song-name-wrapper div.typography-caption a.dt-link-to').text()
        // const judul = $(data[i]).find('.song-name.typography-label')[0].text()
        //const penyanyi = $(data[i]).find('.by-line.typography-caption')[0].text()

        // if (judul, penyanyi, pos) {
        //     //const urlText = $(pos).text()
        //     const urlText1 = $(judul).text()
        //     const urlText2 = $(penyanyi).text()

        //     console.log(pos, urlText1, urlText2)
        console.log(pos, judul, penyanyi)   // }
    }
})

// .datagrid .song
// song : 'div.cell-title div.ellipsis a.title, span'
// penyanyi : '[itemprop~=byArtist]'