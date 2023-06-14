const toml = require('toml')

const JSON_to_URLEncoded = (element,key,list) => {
  list = list || []
  if(typeof element == 'object')
      for (let idx in element)
      JSON_to_URLEncoded(element[idx],key?key+'['+idx+']':idx,list)
  else 
      list.push(key+'='+encodeURIComponent(element))
  return list.join('&')
}

const post = async (url, body, isToml) => {
  let res = await fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    cache: 'no-cache',
    headers: {
      'Access-Control-Allow-Origin':'*',
      // 'Content-Type': 'application/json'
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON_to_URLEncoded(body)
  })
  return isToml ? toml.parse(await res.text()) : res.json()
}

module.exports = {post}