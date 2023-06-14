const Service = require('../service/_service.js')
const Server = require('../util/server.js')

module.exports = 
Server.post('admin', body => {
    if(body.cmd) 
    switch(body.cmd){
        case 'Data': return Service.Admin.Data()
        case 'SetToken': return Service.Util.Route( 
            body, 'Admin.SetToken', Service.Admin.SetToken, 
            'name', 'type', 'rarity', 'img', 'tags', 'desc'
        )
        case 'SetCatalog': return Service.Util.Route( 
            body, 'Admin.SetCatalog', Service.Admin.SetCatalog, 
            'name', 'date', 'tokens', 'img', 'desc', 'isSeasonal', 'startDate', 'endDate'
        )
        case 'SetAbility': return Service.Util.Route( 
            body, 'Admin.SetAbility', Service.Admin.SetAbility, 
            'ability'
        )
        case 'SetEffect': return Service.Util.Route( 
            body, 'Admin.SetEffect', Service.Admin.SetEffect, 
            'effect'
        )
        case 'SetSuperTag': return Service.Util.Route( 
            body, 'Admin.SetSuperTag', Service.Admin.SetSuperTag, 
            'table', 'name', 'stats'
        )
        case 'SetPremade': return Service.Util.Route( 
            body, 'Admin.SetPremade', Service.Admin.SetPremade, 
            'primary', 'secondary', 'abilities', 'isTank'
        )
        case 'EditToken': return Service.Util.Route( 
            body, 'Admin.EditToken', Service.Admin.SetToken, 
            'name', 'type', 'rarity', 'img', 'tags', 'desc', 'isEdit'
        )
        case 'EditCatalog': return Service.Util.Route( 
            body, 'Admin.EditCatalog', Service.Admin.SetCatalog, 
            'name', 'date', 'tokens', 'img', 'desc', 'isSeasonal', 'startDate', 'endDate', 'isEdit'
        )
        case 'EditAbility': return Service.Util.Route( 
            body, 'Admin.EditAbility', Service.Admin.SetAbility, 
            'ability', 'isEdit'
        )
        case 'EditEffect': return Service.Util.Route( 
            body, 'Admin.EditEffect', Service.Admin.SetEffect, 
            'effect', 'isEdit'
        )
        case 'EditPremade': return Service.Util.Route( 
            body, 'Admin.EditPremade', Service.Admin.SetPremade, 
            'primary', 'secondary', 'abilities', 'isTank', 'uid'
        )
        case 'WipeData': return Service.Util.Route( 
            body, 'Admin.WipeData', Service.Admin.WipeData, 
            'password'
        )
    }   
})

