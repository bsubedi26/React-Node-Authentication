import feathers from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'
import auth from '@feathersjs/authentication-client'
import io from 'socket.io-client'

// const SERVER_HOST = process.env.NODE_ENV === 'production' ? '//feathers-example.herokuapp.com' : 'http://localhost:3030'
const SERVER_HOST = 'http://localhost:3030'

const socket = io(SERVER_HOST)
const app = feathers()

app.configure(socketio(socket))
app.configure(auth({
  storage: window.localStorage
}))

app.io.on('connect_error', error => {
  console.log('Cannot connect to server using sockets. Closing connection...')
  app.io.close()
  return error
})

export default app
