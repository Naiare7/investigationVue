<template>
  <aside :class="['sidebar', { collapsed: isCollapsed }]">
    <div class="sidebar-header">
        <button class="toggle-btn" @click="toggleSidebar">
            <span class="material-icons icon">{{ isCollapsed ? 'menu' : 'close' }}</span>
        </button>
        <span v-if="!isCollapsed" class="label">Menú</span>
    </div>

    <nav>
      <ul>
        <li v-for="item in menu" :key="item.name">
          <RouterLink :to="item.path" class="link">
            <span class="material-icons icon">{{ item.icon }}</span>
            <span v-if="!isCollapsed" class="label">
              {{ item.name }}
            </span>
          </RouterLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isCollapsed = ref(false)

const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value
}

const menu = [
  { name: 'Home', path: '/', icon: 'home' },
  { name: 'Parent / Child', path: '/ExampleParentChild', icon: 'folder' },
  { name: 'Slot por defecto', path: '/ExampleSlotDefault', icon: 'integration_instructions' },
  { name: 'Slot con nombre', path: '/ExampleSlotNamed', icon: 'badge' },
  { name: 'Slot con datos', path: '/ExampleSlotScoped', icon: 'data_object' },
  { name: 'Teleport', path: '/ExampleTeleport', icon: 'flash_on' },
  { name: 'Provide / Inject', path: '/ExampleProvideInject', icon: 'vaccines' },
  { name: 'Reactive', path: '/ExampleReactive', icon: 'science' },
  { name: 'ToRefs', path: '/ExampleToRefs', icon: 'link' },
  { name: 'ShallowRef', path: '/ExampleShallowRefReactive', icon: 'low_priority' },
  { name: 'Computed', path: '/ExampleComputed', icon: 'calculate' },
  { name: 'Watch', path: '/ExampleWatch', icon: 'device_hub' },
  { name: 'WatchEffect', path: '/ExampleWatchEffect', icon: 'visibility' },
]
</script>

<style scoped>
.sidebar {
  width: 250px;
  min-height: 100vh;
  background-color: rgb(40, 40, 40);
  color: white;
  border-right: 0.2rem solid gray;
  padding: 1rem;
  transition: width 0.3s ease;
}

.sidebar.collapsed {
  width: 70px;
}
.sidebar-header {
    display: flex;
    place-items: center;
}
.toggle-btn {
    display: flex;
    place-items: center;
    justify-content: center;
    gap: 0.75rem;
    padding: 0.5rem;
  background: none;
  border: none;
  border-radius: 15%;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  transition: background-color 1s ease-in-out;
}
.toggle-btn:hover {
  background-color: gray;
}

nav ul {
  list-style: none;
  padding: 0;
}

.link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: white;
  text-decoration: none;
  padding: 0.5rem;
  border-radius: 6px;
}

.link:hover {
  background-color: #374151;
}

.icon {
  font-size: 1.5rem;
}
</style>
