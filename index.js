import data from './urlLink.js'
import fs from 'fs'
import request from 'request'

function run () {
  Object.keys(data.data).forEach(key => {
    let url = data.data[key]
    request(url).pipe(fs.createWriteStream(data.root + '/' + key + '.' + getSuffix(url)))
  })
}

function getSuffix(path) {
  return path.split('.').pop()
}

run()