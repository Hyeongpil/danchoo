<template>
  <div class="bg-background h-screen">
    <navbar-default />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import NavbarDefault from './components/NavbarDefault.vue'
@Component({
  components: {
    NavbarDefault
  }
})
export default class DefaultLayout extends Vue {
  data() {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' }
        }
      ]
    }
  }
}
</script>
