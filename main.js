const SysInfo = async () => {
  const _PROCESS = require('process')
  const si = require('systeminformation')

  const sysInfoValsObj = {
    osInfo: 'distro, platform, arch'
  } 

  let _proc
  let _sys
  let _info

  try {
    _proc = {
       release: await _PROCESS.release,
       platform: await _PROCESS.platform,
       arch: await _PROCESS.arch
    }

    _sys =  await si.get(sysInfoValsObj)

    _info = {
      procOutput: await _proc,
      sysInfoOutput: await _sys
    }

    await console.log(_info)

    return _info
   
    
  }
  catch(err) {
    console.error(err)
    throw err
  }
}


export default SysInfo

export {
  SysInfo
}
