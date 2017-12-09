import feathers from '@feathersjs/client/dist/feathers.min';
import auth from '@feathersjs/client/dist/authentication.min';
// import fSocketio from '@feathersjs/client/dist/socketio.min';
// import io from 'socket.io-client';
import fRest from '@feathersjs/client/dist/rest';

// import auth from '@feathersjs/authentication-client';
// import fSocketio from '@feathersjs/socketio-client';
// import fRest from '@feathersjs/rest-client';


const HOST = process.env.NODE_ENV === 'production' ? 'https://my-server.herokuapp.com' : 'http://localhost:3031'

// const socket = io(HOST);
const rest = fRest(HOST);

const app = feathers()
  // .configure(fSocketio(socket))
  .configure(rest.fetch(window.fetch.bind(window)))
  .configure(auth({
    storage: window.localStorage
  }));

// import reduxifyAllServices from './reduxifyServices';
// const services = reduxifyAllServices(app);
// export { services };

export default app;