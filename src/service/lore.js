const Service = require('./_service.js')
Service.Lore = {}

Service.Lore.SetSetting = async (setting) => {
  res = await Service.Data.Set(`Data/Lore/${setting.type}`, setting.name, setting)
  return res
}
Service.Lore.SetTraits = async (traits) => {
  res = await Service.Data.Set(`Data/Lore/Trait`, traits.token, traits)
  return res
}

module.exports = {}