import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ExampleParentChild from '../views/ExampleParentChild.vue'
import ExampleSlotDefault from '../views/ExampleSlotDefault.vue'
import ExampleSlotNamed from '../views/ExampleSlotNamed.vue'
import ExampleSlotScoped from '../views/ExampleSlotScoped.vue'
import ExampleTeleport from '@/views/ExampleTeleport.vue'
import ExampleProvideInject from '@/views/ExampleProvideInject.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/ExampleParentChild',
      name: 'Example Parent Child',
      component: ExampleParentChild,
    },
    {
      path: '/ExampleSlotDefault',
      name: 'Example Slot Default',
      component: ExampleSlotDefault,
    },
    {
      path: '/ExampleSlotNamed',
      name: 'Example Slot Named',
      component: ExampleSlotNamed,
    },
    {
      path: '/ExampleSlotScoped',
      name: 'Example Slot Scoped',
      component: ExampleSlotScoped,
    },
    {
      path: '/ExampleTeleport',
      name: 'Example Teleport',
      component: ExampleTeleport,
    },
    {
      path: '/ExampleProvideInject',
      name: 'Example Provide/Inject',
      component: ExampleProvideInject,
    },
  ],
})

export default router
