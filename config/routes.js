module.exports.routes = {
  '/' : {
    controller: 'main',
    action: 'index'
  },
  '/signup' : {
    controller: 'main',
    action: 'signup'
  },
  '/login' : {
    controller: 'main',
    action: 'login'
  },
  '/logout' : {
    controller: 'main',
    action: 'logout'
  },
  '/chat' : {
    controller: 'main',
    action: 'chat'
  }
};