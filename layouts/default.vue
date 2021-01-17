<template>
  <div>
    <navbar-default class="dan-container" />
    <nuxt class="dan-container content-margin" />
    <footer-default class="dan-container" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import NavbarDefault from './components/NavbarDefault.vue'
import FooterDefault from './components/Footer.vue'
@Component({
  name: 'DefaultLayout',
  components: {
    NavbarDefault,
    FooterDefault
  }
})
export default class DefaultLayout extends Vue {}
</script>

<style lang="scss" scoped>
.content-margin {
  margin-top: 28px;
}
</style>
