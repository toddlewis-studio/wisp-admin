const http = require('./http.js')
let data = {}

const get = (cmd, body) => http.post('/admin', {cmd, ...body})
let cache = {data: null}

data.Data = async (reload) => {
    if(cache.data && !reload) return cache.data
    const res = await get('Data', {})
    if(res.error) return console.error('Admin.Data', res)
    console.log('Admin.Data', res)
    cache.data = res
    return res
}

data.SetToken = async (name, type, rarity, img, tags, desc) => {
    // console.log(name, type, rarity, img, tags, desc)
    const res = await get('SetToken', {name, type, rarity, img, tags, desc})
    if(res.error) return console.error('Admin.SetToken', res)
    console.log('Admin.SetToken', res)
}
data.EditToken = async (name, type, rarity, img, tags, desc) => {
    const res = await get('EditToken', {name, type, rarity, img, tags, desc, isEdit: true})
    if(res.error) return console.error('Admin.EditToken', res)
    console.log('Admin.EditToken', res)
}

data.SetPremade = async (primary, secondary, abilities, isTank) => {
    const res = await get('SetPremade', {primary, secondary, abilities, isTank})
    if(res.error) return console.error('Admin.SetPremade', res)
    console.log('Admin.SetPremade', res)
}
data.EditPremade = async (primary, secondary, abilities, isTank, uid) => {
    const res = await get('EditPremade', {primary, secondary, abilities, isTank, uid})
    if(res.error) return console.error('Admin.EditPremade', res)
    console.log('Admin.EditPremade', res)
}

data.SetCatalog = async (name, date, img, desc, tokens, isSeasonal, startDate, endDate) => {
    if(!isSeasonal){
        isSeasonal = null
        startDate = null
        endDate = null
    }
    const res = await get('SetCatalog', {name, date, desc, tokens, img, isSeasonal, startDate, endDate})
    if(res.error) return console.error('Admin.SetCatalog', res)
    console.log('Admin.SetCatalog', res)
}
data.SetSuperTag = async (table, name, stats) => {
    const res = await get('SetSuperTag', {table, name, stats})
    if(res.error) return console.error('Admin.SetSuperTag', res)
    console.log('Admin.SetSuperTag', res)
}
data.EditCatalog = async (name, date, img, desc, tokens, isSeasonal, startDate, endDate) => {
    if(!isSeasonal){
        isSeasonal = null
        startDate = null
        endDate = null
    }
    const res = await get('EditCatalog', {name, date, desc, tokens, img, isSeasonal, startDate, endDate, isEdit: true})
    if(res.error) return console.error('Admin.EditCatalog', res)
    console.log('Admin.EditCatalog', res)
}

data.SetAbility = async (ability) => {
    const res = await get('SetAbility', {ability: JSON.stringify(ability)})
    if(res.error) return console.error('Admin.SetAbility', res)
    console.log('Admin.SetAbility', res)
}
data.EditAbility = async (ability) => {
    const res = await get('EditAbility', {ability: JSON.stringify(ability), isEdit: true})
    if(res.error) return console.error('Admin.EditAbility', res)
    console.log('Admin.EditAbility', res)
}

data.SetEffect = async (effect) => {
    const res = await get('SetEffect', {effect: JSON.stringify(effect)})
    if(res.error) return console.error('Admin.SetEffect', res)
    console.log('Admin.SetEffect', res)
}
data.EditEffect = async (effect) => {
    const res = await get('EditEffect', {effect: JSON.stringify(effect), isEdit: true})
    if(res.error) return console.error('Admin.EditEffect', res)
    console.log('Admin.EditEffect', res)
}
data.WipeData = async (password) => {
    const res = await get('WipeData', {password})
    if(res.error) return console.error('Admin.WipeData', res)
    console.log('Admin.WipeData', res)
}

module.exports = data