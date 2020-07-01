const cheerio = require('cheerio')
const axios = require('axios')

axios.get('https://billboardid.com/top100/').then((response) => {
    const $ = cheerio.load(response.data)
    const data = $('.foo-table tr')
    console.log("data billboard : ", data.length)

    for (let i = 0; i < data.length; i++) {
        const pos = (i + 1)
        const list = $(data[i + 1]).find('strong').text().replace('⇧', '').replace('⇩', '').replace('≡', '').replace('⇳', '').replace('☆', '').replace(new RegExp('[0-9]', 'g'), '')
        const judul = list.slice(0, list.indexOf('▬')).trim()
        const penyanyi = list.slice(list.indexOf('▬') + 1, list.length).trim()

        console.log(pos, judul, penyanyi)   
    }
})