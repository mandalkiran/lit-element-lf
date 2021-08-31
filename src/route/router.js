import { Router } from '@vaadin/router';
import '../component/todo-list';


window.addEventListener('load', () => {
  initRouter();
});

function initRouter() {
  const router = new Router(document.querySelector('main'), {baseUrl: '/'});
  router.setRoutes([
    {
      path: '',
      component: 'todo-list'
    },
    {
      path: '(.*)',
      component: 'not-found-view',
      action: () =>
        import(/* webpackChunkName: "not-found-view" */ '../component/not-found-view')
    }
  ]);
}