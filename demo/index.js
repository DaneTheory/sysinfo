const SysInfo = require('../index.js').default


SysInfo()
  .then(data => {
    console.log(data)
    return data
  })
  .catch(err => {
    console.error(err)
    throw err
  })
