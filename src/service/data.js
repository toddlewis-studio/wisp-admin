const Service = require('./_service.js')
Service.Data = {}

Service.Data.Get = async (table, key) => {
    let path = table
    if(key) path += '/' + key
    return await Service.Firebase.Get(path)
}

Service.Data.Set = async (table, key, obj) => {
    let path = table
    if(key) path += '/' + key
    await Service.Firebase.Set(path, obj)
    return obj
}

module.exports = {}