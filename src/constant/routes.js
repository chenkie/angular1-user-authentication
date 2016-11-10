// add data: { requiresLogin: true } to the profile, instructor, and newInstructor routes

export default {
  default: '/',
  home: {
    name: 'home',
    url: '/',
    template: '<authapp-home></authapp-home>',
  },
  login: {
    name: 'login',
    url: '/login',
    template: '<authapp-login></authapp-login>',
  },
  profile: {
    name: 'profile',
    url: '/profile',
    template: '<authapp-profile></authapp-profile>',
  },
  instructor: {
    name: 'instructor',
    url: '/instructor',
    template: '<authapp-instructor></authapp-instructor>',
  },
  newInstructor: {
    name: 'new-instructor',
    url: '/instructor/new',
    template: '<authapp-new-instructor></authapp-new-instructor>',
  },
};
