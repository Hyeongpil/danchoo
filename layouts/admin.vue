<template>
  <div class="bg-background h-screen pb-5">
    <navbar-admin class="dan-container" />
    <nuxt class="dan-container content-margin" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import NavbarAdmin from './components/NavbarAdmin.vue'
@Component({
  name: 'AdminLayout',
  components: {
    NavbarAdmin
  }
})
export default class AdminLayout extends Vue {}
</script>

<style lang="scss" scoped>
.content-margin {
  margin-top: 28px;
}
</style>
