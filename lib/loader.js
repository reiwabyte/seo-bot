const { modul } = require('../module');
const { fs } = modul;
const { color } = require('./color')

async function uncache(module = '.') {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(module)]
      resolve()
    } catch (e) {
      reject(e)
    }
  })
}

async function nocache(module, cb = () => { }) {
  console.log(color('Module', 'blue'), color(`'${module} is up to date!'`, 'cyan'))
}

async function checkVersionUpdate() {
  return
}

module.exports = {
  uncache,
  nocache,
  checkVersionUpdate
}
