import git from 'simple-git'

const githubPage = `https://xluoyu.github.io/image-riverbed/` 
let diffArr = []

git().diffSummary((err, val) => {
  diffArr = val.files.map(item => item.file)
})
.add('.')
.commit('update')
.pull('origin', 'main')
.push(['-f', 'origin', 'main'], () => {
  console.log('\x1B[32m', '上传完成')
  console.log('------ 以下是最新文件地址 ----------')
  diffArr.forEach(url => {
    console.log('\x1B[36m', url + ': ' + githubPage + url)
  })
})
