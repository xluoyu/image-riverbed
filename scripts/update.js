import git from 'simple-git'

git().add('.', (val) => {
  console.log(val)
}).commit('update').push(['-f', 'origin', 'main'], () => {
  console.log('push to main success')

})