const Service = require('./_service.js')
Service.Admin = {}

Service.Admin.SetCatalog = async (name, date, tokens, img, desc, isSeasonal, startDate, endDate, isEdit) => {
    const catalog = {name, date, tokens, desc, img, type: 'Catalog', isSeasonal, startDate, endDate}
    let res = await Service.Data.Get('Data/Catalog', name)
    if(!isEdit && res) return {error: 'Catalog with name ' + name + ' already exists.'}
    res = await Service.Data.Set('Data/Catalog', name, catalog)
    return res
}
Service.Admin.SetToken = async (name, type, rarity, img, tags, desc, isEdit) => {
    const token = {name, type, rarity, img, tags, desc}
    // console.log(token)
    let res = await Service.Data.Get(`Data/${type}`, name)
    if(!isEdit && res) return {error: 'Token with name ' + name + ' already exists.'}
    res = await Service.Data.Set(`Data/${type}`, name, token)
    return res
}
Service.Admin.Data = async () => {
    const res = await Service.Data.Get('Data')
    return res
}
Service.Admin.SetAbility = async (abilityJSON, isEdit) => {
    const ability = JSON.parse(abilityJSON)
    ability.type = 'Ability'
    let res = await Service.Data.Get('Data/Ability', ability.name)
    if(!isEdit && res) return {error: 'Ability with name ' + ability.name + ' already exists.'}
    res = await Service.Data.Set('Data/Ability', ability.name, ability)
    return res
}
Service.Admin.SetEffect = async (effectJSON, isEdit) => {
    const effect = JSON.parse(effectJSON)
    effect.type = 'Effect'
    let res = await Service.Data.Get('Data/Effect', effect.name)
    if(!isEdit && res) return {error: 'Effect with name ' + effect.name + ' already exists.'}
    res = await Service.Data.Set('Data/Effect', effect.name, effect)
    return res
}

Service.Admin.SetSuperTag = async (table, name, stats) => {
    res = await Service.Data.Set('Data/SuperTag', `${table}/${name}`, stats)
    return res
}

Service.Admin.SetPremade = async (primary, secondary, abilities, isTank, uid) => {
    let res, premade = {primary, secondary, abilities, isTank, uid}
    if(!uid) premade.uid = Service.Util.Guid()
    res = await Service.Data.Set('Data/Premade', premade.uid, premade)
    return res
}

Service.Admin.WipeData = async (password) => {
    if(password === 'wisp'){
        const userObj = await Service.Firebase.Get('User')
        const users = Object.values(userObj)
        const data = await Service.Firebase.Get('Data')
        await Service.Util.AsyncForEach(users, async user => {
            let credits = 0
            let mana = 150

            user.img = [0, 0]
            delete user.bid
            delete user.wisps
            delete user.teams
            delete user.trade
            delete user.inventory.manaDaily
            delete user.inventory.manaDailyToken
            delete user.inventory.starter

            if(user.inventory.tokens){
                delete user.inventory.tokens
            }

            if(user.paymentSessions){
                let remove = []
                Object.values(user.paymentSessions).forEach(session => {
                    if(session.paid) credits += parseInt(session.product)
                    else remove.push(session)
                })
                remove.forEach(id => delete user.paymentSessions[id])
            }

            user.inventory.credits = credits
            user.inventory.mana = mana
            userObj[user.uid] = user
        })

        await Service.Firebase.Set('Mint', null)
        await Service.Firebase.Set('Game', null)
        await Service.Firebase.Set('Team', null)
        await Service.Firebase.Set('Token', null)
        await Service.Firebase.Set('Trade', null)
        await Service.Firebase.Set('Wisp', null)
        await Service.Firebase.Set('Match', null)
        await Service.Firebase.Set('User', userObj)

        return {msg: 'done'}
    }
}

module.exports = {}