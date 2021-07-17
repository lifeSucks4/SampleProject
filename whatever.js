//aah well i used papaparse to remove commas from our csv so i used it

const Papa = require('papaparse')
    //fs to open read write create files...
const fs = require('fs')


const csvPath = './csv/Animenames.csv' //file path to file i downloaded
const myAnime = fs.readFileSync(csvPath, 'utf8') //reading file content

const rows = {}
Papa.parse(myAnime, {
    header: true,
    skipEmptyLines: true, //if empty lines present skip them
    complete: function(results) {
        rows.data = results.data
        rows.errors = results.errors
        rows.meta = results.meta
    }
})
const requiredRow = rows.data.map(row => {
    const { name, genre, type, episodes, rating, members } = row
    const new_name = name.replace(/,/g, '') //replace , with space in genre and name
    const new_genre = genre.replace(/,/g, '')

    return { name: new_name, genre: new_genre, type, episodes, rating, members }
})

const animedata = Papa.unparse(requiredRow)
    //umm a function  to make file  if there is already a file with that name it changes data or whatever
function makefile(path, data) {
    fs.writeFile(path, data, err => {
        if (err)
            throw err;
        console.log('aah file created nab')
    })
}
makefile("./csv/table.csv", animedata)
    //ok