const watch = {}
const on = a => fn => {
  watch[a[0]] ? watch[a[0]].push(fn) : watch[a[0]] = [fn]
  return () => watch[a[0]] ? watch[a[0]] = watch[a[0]].filter(f => f!==fn) : undefined
}
const listener = (litObj) => (...a) => a.map(s => on([s])(() => litObj.requestUpdate()))

const global = {}
const load = a => global[a[0]]
const save = a => value => {
  global[a[0]] = value
  if(watch[a[0]]) 
    watch[a[0]].forEach(f=>f(value))
}

let state = {}
const get = a => state[a[0]]
const set = a => value => {
  state[a[0]] = value
  if(watch[a[0]]) 
    watch[a[0]].forEach(f=>f(value))
}
const clear = () => state = {}

let broadcasts = {}
const ping = a => {
  const name = a[0]
  return (...items) => {
    if(broadcasts[name])
      broadcasts[name].forEach(e => e(...items))
  }
}

const onping = a => {
  const name = a[0]
  return fn => {
    if (!broadcasts[name])
      broadcasts[name] = []
    broadcasts[name].push(fn)
  }
}

const offping = a => delete broadcasts[a[0]]

module.exports = {
  on, listener,
  save, load,
  get, set, clear,
  ping, onping, offping
}