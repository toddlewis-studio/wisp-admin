const Service = require('./_service.js')
Service.Util = {}

Service.Util.Salt = require('../util/salt.js')
const guid = require('../util/guid.js')
Service.Util.Guid = () => 'tls' + guid()

Service.Util.Cooldown = seconds => {
    var dt = new Date();
    dt.setSeconds( dt.getSeconds() + seconds )
    return dt
}

const validate = (body, cmd, ...keys) => {
    const res = keys.find(key => body[key] === undefined)
    if(res) return {error: `[Server Validation Error (Service.Util.validate)] ${cmd}.${res} not found`}
    return keys.map(key => body[key])
}
Service.Util.Route = (body, cmd, fn, ...keys) => {
    const res = validate(body, cmd, ...keys)
    if(res.error) return res
    console.log(`${cmd}`)
    return fn(...res)
}

Service.Util.AsyncForEach = async (array, callback) => {
    for (let index = 0; index < array.length; index++)
        await callback(array[index], index, array)
}

Service.Util.AsyncMap = async (array, callback) => {
    let res = []
    await Service.Util.AsyncForEach(array, async (...p) => res.push(await callback(...p)))
    return res
}

module.exports = {}