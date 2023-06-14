const util = {}

util.isToken = type => {
    return type === 'Avatar'
    || type === 'Ally'
    || type === 'Paragon'
    || type === 'Weapon'
}

const m = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
util.date = date => {
    const month = parseInt(date.substr(5,2))
    const day = parseInt(date.substr(8,2))
    const year = parseInt(date.substr(2,2))
    return `${m[month]} ${day}, ${year}`
}

util.capitalize = str => str.substr(0,1).toUpperCase() + str.substr(1)

util.asyncForEach = async (array, callback) => {
    for (let index = 0; index < array.length; index++)
        await callback(array[index], index, array)
}

util.asyncMap = async (array, callback) => {
    let res = []
    await util.asyncForEach(array, async (...p) => res.push(await callback(...p)))
    return res
}

util.sortStats = statObj => {
    const {
        health,
        strength,
        intelligence,
        agility,
        precision,
        defense,
        resistance,
        dodge,
        speed
    } = statObj
    return {
        health,
        strength,
        intelligence,
        agility,
        precision,
        defense,
        resistance,
        dodge,
        speed
    }
}

document.head.appendChild(i0.element(`<link rel="icon" href="./asset/logo_wisp.PNG"></link>`))

module.exports = util