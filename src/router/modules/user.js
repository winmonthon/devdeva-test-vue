export default {
  path: '',
  component: () => import('../../views/user/index.vue'),
  children: [
    {
      path: '',
      name: 'userManagement',
      component: () => import('../../views/user/pages/UserList.vue'),
      meta: {
        pageTitle: 'User Management',
      },
    },
    {
      path: 'add',
      name: 'addUser',
      component: () => import('../../views/user/pages/UserAdd.vue'),
      meta: {
        pageTitle: 'Add User',
      },
    },
    {
      path: 'add/:userId',
      name: 'editUser',
      component: () => import('../../views/user/pages/UserAdd.vue'),
      meta: {
        pageTitle: 'Edit User',
      },
    },
  ],
}
