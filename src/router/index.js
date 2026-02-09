import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ExampleParentChild from '../views/ExampleParentChild.vue'
import ExampleSlotDefault from '../views/ExampleSlotDefault.vue'
import ExampleSlotNamed from '../views/ExampleSlotNamed.vue'
import ExampleSlotScoped from '../views/ExampleSlotScoped.vue'
import ExampleTeleport from '@/views/ExampleTeleport.vue'
import ExampleProvideInject from '@/views/ExampleProvideInject.vue'
import ExampleReactive from '@/views/ExampleReactive.vue'
import ExampleToRefs from '@/views/ExampleToRefs.vue'
import ExampleShallowRefReactive from '@/views/ExampleShallowRefReactive.vue'
import ExampleComputed from '@/views/ExampleComputed.vue'
import ExampleWatch from '@/views/ExampleWatch.vue'
import ExampleWatchEffect from '@/views/ExampleWatchEffect.vue'
import ExampleLifeCycle from '@/views/ExampleLifeCycle.vue'

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
    {
      path: '/ExampleReactive',
      name: 'Example Reactive',
      component: ExampleReactive,
    },
    {
      path: '/ExampleToRefs',
      name: 'Example ToRefs',
      component: ExampleToRefs,
    },
    {
      path: '/ExampleShallowRefReactive',
      name: 'Example Shallow Ref Reactive',
      component: ExampleShallowRefReactive,
    },
    {
      path: '/ExampleComputed',
      name: 'Example Computed',
      component: ExampleComputed,
    },
    {
      path: '/ExampleWatch',
      name: 'Example Watch',
      component: ExampleWatch,
    },
    {
      path: '/ExampleWatchEffect',
      name: 'Example WatchEffect',
      component: ExampleWatchEffect,
    },
    {
      path: '/ExampleLifeCycle',
      name: 'Example Life Cycle',
      component: ExampleLifeCycle,
    },
  ],
})

export default router
