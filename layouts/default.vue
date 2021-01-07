<template>
  <div>
    <navbar-default class="dan-container" />
    <nuxt class="dan-container content-margin" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import NavbarDefault from './components/NavbarDefault.vue'
@Component({
  name: 'DefaultLayout',
  components: {
    NavbarDefault
  }
})
export default class DefaultLayout extends Vue {}
</script>

<style lang="scss" scoped>
.content-margin {
  margin-top: 28px;
}
</style>
