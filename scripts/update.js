import git from 'simple-git'

git().add('.').commit('update').push(['-f', 'origin', 'main'], () => {
  console.log('push to main success')
})