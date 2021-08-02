import git from 'simple-git'

const githubPage = `https://xluoyu.github.io/image-riverbed/` 
let diffArr = []

console.log('\x1B[33m'+'代码运行中...'+'\x1B[0m')
git()
.status(['--ignored'], (err, val) => {
  console.log('------ 新增的文件 ----------')
  console.log(val.not_added)
  diffArr = val.not_added
})
.add('.')
.commit('update')
.pull('origin', 'main')
.push(['-f', 'origin', 'main'], () => {
  console.log('\x1B[32m'+'上传完成'+'\x1B[0m')
  if (diffArr.length) {
    console.log('------ 以下是新增文件地址 ----------')
    diffArr.forEach(url => {
      console.log('\x1B[36m' + url + ': ' + githubPage + url + '\x1B[0m')
    })
  }
})
