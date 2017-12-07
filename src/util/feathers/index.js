import feathers from '@feathersjs/client';
import auth from '@feathersjs/authentication-client';
// import errors from '@feathersjs/errors';


import fSocketio from '@feathersjs/socketio-client';
import io from 'socket.io-client';
// import fRest from '@feathersjs/rest-client';


const HOST = 'http://localhost:3031';
const socket = io(HOST);
// const rest = fRest(HOST);

const app = feathers()
  .configure(fSocketio(socket))
  // .configure(rest.fetch(window.fetch.bind(window)))
  .configure(auth({
    storage: window.localStorage
  }));

// import reduxifyAllServices from './reduxifyServices';
// const services = reduxifyAllServices(app);
// export { services };

export default app;