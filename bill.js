const cheerio = require('cheerio')
const axios = require('axios')

axios.get('https://billboardid.com/top100/').then((response) => {
    const $ = cheerio.load(response.data)
    const data = $('.foo-table tr')
    console.log("data billboard : ", data.length)

    for (let i = 0; i < data.length; i++) {
        const pos = (i+1)
        const judul = $(data[i+1]).find('h6').text().replace('▬', '')
		//const penyanyi = $(data[i]).find('').text()
       // const judul = $(data[i]).find('.song-name.typography-label')[0].text()
        //const penyanyi = $(data[i]).find('.by-line.typography-caption')[0].text()

        // if (judul, penyanyi, pos) {
        //     //const urlText = $(pos).text()
        //     const urlText1 = $(judul).text()
        //     const urlText2 = $(penyanyi).text()

        //     console.log(pos, urlText1, urlText2)
        console.log(pos, judul)   // }
    }
})