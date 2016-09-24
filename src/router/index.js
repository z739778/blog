export default (router) => router.map({
  '/': {
    name: 'login',
    component: require('../views/login.vue')
  }
});

