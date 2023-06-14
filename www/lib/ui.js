// route
const IndexRoute = require('../route/index.js')
const AdminRoute = require('../route/admin.js')
const CollectionRoute = require('../route/collection.js')
const SoundRoute = require('../route/sound.js')

const topnav = require('../el/top-nav.js')

let View = {
  index: IndexRoute,
  admin: AdminRoute,
  collection: CollectionRoute,
  sound: SoundRoute,
}

module.exports = View