import reduxifyServices from 'feathers-redux';

export default (app) => {
    const services = reduxifyServices(app, ['task', 'user', 'message']);
    return services;
};