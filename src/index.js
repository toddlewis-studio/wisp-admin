const server = require('./util/server.js')
//service
let s = require('./service/_service.js')
require('./service/admin.js')
require('./service/data.js')
require('./service/firebase.js')
require('./service/lore.js')
require('./service/util.js')
//routes
require('./route/admin.js')
require('./route/lore.js')
server.serve(8000)
