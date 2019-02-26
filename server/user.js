const Koa = require('koa')
const Router = require('koa-router')
const wrapper = require('co-mysql')
const mysql = require('mysql')
const cors = require('@koa/cors')
const koaBody = require('koa-body')
const jwt = require('jsonwebtoken')
const jwtKoa = require('koa-jwt')

const app = new Koa()
const router = new Router()
const db = wrapper(
  mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'xll19950213',
    database: 'tmobile'
  })
)

const handler = async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    ctx.response.status = err.statusCode || err.status || 500
    ctx.response.body = {
      message: err.message
    }
  }
}

const main = async (ctx, next) => {
  ctx.body = { OK: 1, msg: 'token is correct' }
}

const login = async (ctx, next) => {
  const username = ctx.request.body.username
  const password = ctx.request.body.password
  const token = jwt.sign({ username }, 'linli', { expiresIn: '20min' })
  await db
    .query(`SELECT * FROM user WHERE username="${username}"`)
    .then(results => {
      if (results.length === 0) {
        ctx.body = { OK: 0, msg: 'user is not existed' }
      } else if (results[0].password !== password) {
        ctx.body = { OK: 0, msg: 'password is wrong' }
      } else {
        ctx.body = { OK: 1, msg: 'Login successfully', token }
      }
    })
    .catch(error => console.log(error))
}

const register = async ctx => {
  const username = ctx.request.body.username
  const password = ctx.request.body.password
  const result = await db
    .query(`SELECT * FROM user WHERE username="${username}"`)
    .then(results => {
      return results.length
    })
    .catch(error => console.log(error))

  if (result) {
    ctx.body = { OK: 0, msg: 'user is existed' }
    console.log({ OK: 0, msg: 'user is existed' })
  } else {
    await db
      .query(
        `INSERT INTO user (ID, username, password) VALUES (0, '${username}', '${password}')`
      )
      .then(() => {
        ctx.body = { OK: 1, msg: 'Register successfully' }
      })
      .catch(error => console.log(error))
  }
}

router.get('/', main)
router.post('/user/login', login)
router.post('/user/register', register)

app.use(handler)
app.use(cors())
app.use(koaBody())
app.use(
  jwtKoa({ secret: 'linli' }).unless({
    path: [/^\/user\/login/, /^\/user\/register/, /^((?!\/).)*$/]
  })
)
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3300)
