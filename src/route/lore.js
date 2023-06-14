const Service = require('../service/_service.js')
const Server = require('../util/server.js')

module.exports = 
Server.post('/lore', async body => {
  if(body.cmd)
  switch(body.cmd){
    case 'SetSetting': return await Service.Lore.SetSetting(body.setting)
    case 'SetTraits': return await Service.Lore.SetTraits(body.traits)
  }
})