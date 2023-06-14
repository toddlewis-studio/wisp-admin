const Service = require('./_service.js')
Service.Firebase = {}

const admin = require("firebase-admin")

admin.initializeApp({
  credential: admin.credential.cert({
    "type": "service_account",
    "project_id": "todd-lewis-space",
    "private_key_id": "ffecc6e047c1fc28bd8d68f21a761e3e532dd8c2",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEuwIBADANBgkqhkiG9w0BAQEFAASCBKUwggShAgEAAoIBAQCnc0/H1tqPTyx2\nqpVrXDP4xgBhrFjw+vtbzOqkdtIEROZnzyxHIvVKkA+M5oA5x0W27FGr1AHzIl89\n7ibqhpMua5S/WKfrm80S8JzB9RgFipMsjk0oKNY64FfsLEpefSZyqqB5Ke7YcN1W\nksTJUNL3IZhILUPupZPV5d13HxbGWPfDTHrfrZg+/us0b3FbLveueW8AHNYvMAeP\nAfZ95eZ4Cr4ChUlp5UmWipv9PfpFhhIjroFPke0wGQFn6gZ4k05r2mvyFh58HDvK\nsuh3sy59S5XuGbMNXetSaXWVUrZTJg3f/EyMhZrb8QyRRG7UUqEKgF1kel5m/nNn\nhHPFxic/AgMBAAECggEACOaIsZMah+6J6v7TNWMvwgPoRkjOa3SzwqPoPviv3hk5\ndAAfluJlTmLM6MzhuPB+JKR4DN2WgvFrRZPwjpu7nAaM4ATa3BuqcVzHwEmCTt0Y\nSJCBymYtSPDey4dpJo+ZaRPntrkDYI7TPQRNIHRC2m73NLLvPvKfIon21Ruabs16\nyqGipmHbGH7hWQ4ebwBVbzeWrcHXWDVT4FuD/jG3qkLSBo4nOQ4S4od3dWOwkKRo\np3wb526K4JcFGbUpvEcBZbpDyy5aSIh27xgu9ADn5nn8PGniD6PzBSkf1ck9uvYM\njRanHrUKmGS/ObciISI4Wh8+sq4WoEAY2TdEIZYzcQKBgQDXmzwPFDhR82GL+kGm\nZy+AeHak2PxaFXb7vK3eYkeKfwW9N7ekukxx0wyHoirVFrE892hMxBnodgdcsY52\nxsTHUcM5vvqQ14SPC7mz28B5OaSktQ/E1e0m4uRzW6WpGRKlqwq8XYWTG0rjkR07\naSTKH//h/F7m0aJkxjHkWnhwrwKBgQDG0nRYig1cwdxdIzdGE1uzEHTHe1gb02rr\nuttJ6xA9xSyE72NIqXnC4pbiEBrUBr6wzbX9m8mRogI7wLyufa9kZdieTm9Vbpir\nWGkW5991/6VrjZ3BkfEaxwjitHiUP6P1qeMIpJI3DDUpXu2PVYwqAd1GiWB84vKq\njS2R0YC2cQJ/e82nrwDtViFq4fXRvLuDi0Gg3we54ABzUhoFvKyyZ9SIdx6HVQ+k\n1bdaeoekELf3DgsC2RHBzrn3gEJ0i7+XPty0PXRsbL9UXs9c0upcmz9+SxWs+Fne\n03V1uMfnWDINgxO0FnWdPdtuJT4uiu7VMTsus5U26VN27GbiPz2z6wKBgQCZcL4d\nvp1FYs/AiXcU+8efUCnv8b8z6lvwBUtLpr/oDA2pol5LK5Au2VR8rtUloPb12CyF\nxv8vB4sVtk9nktQTdY5RzlKZ6jqkshyYcubAWEW/1ZFUXF9ovQacf483Sk4tP6lZ\neDjnhuJYRUyte+YqXTn6P/dZKoUBHud2S+s74QKBgE7LF+XgANO5bvQp6GFIgQHa\nD6+BDDhYcotGYb437Gyq+6eQ370sydFC4ac4oJ/uy9Mgm24wfRW8i/pKaECaxf/q\ncvBr8Zy72eiM4RMITA9jN0AdiadvFOq65Ygv4Wkh5OW+dMeu6dYZ9k6YRdKww5Le\nP1ild1keaBTeAvWRddO7\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-hx7pj@todd-lewis-space.iam.gserviceaccount.com",
    "client_id": "102326486917672555955",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-hx7pj%40todd-lewis-space.iam.gserviceaccount.com"
  }),
  databaseURL: "https://todd-lewis-space-default-rtdb.firebaseio.com"
})

Service.Firebase.Get = async path => {
    const db = admin.database()
    const res = await db.ref(path).once('value')
    return res.val()
}
Service.Firebase.Set = async (path, obj) => {
    const db = admin.database()
    const res = await db.ref(path).set(obj)
    return res
}

module.exports = {}