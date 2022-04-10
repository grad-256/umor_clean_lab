require('dotenv').config()

// デプロイ時にtaimeスタンプを作る
var fs = require('fs')
const date = new Date()
const Y = date.getFullYear()
const M = ('00' + (date.getMonth() + 1)).slice(-2)
const D = ('00' + date.getDate()).slice(-2)
const h = ('00' + date.getHours()).slice(-2)
const m = ('00' + date.getMinutes()).slice(-2)
const s = ('00' + date.getSeconds()).slice(-2)

var jsonData = {
  deploy: Y + M + D + h + m + s,
}
// ファイルの書き込み関数
function writeFile(path, data) {
  const jsonStr = JSON.stringify(data)
  fs.writeFile(path, jsonStr, (err) => {
    if (err) rej(err)
    if (!err) {
      console.log('更新成功')
      console.log(data)
    }
  })
}

function main(path, input) {
  writeFile(path, input)
}

//実行例
main(`build/deploytimestamp.json`, jsonData)
main(`public/deploytimestamp.json`, jsonData)
