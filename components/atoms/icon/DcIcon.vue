<template>
  <div class="dc-icon flex justify-center items-center">
    <vue-feather :type="icon" stroke="#C8C9CA"></vue-feather>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import VueFeather from 'vue-feather'

@Component({
  name: 'DcIcon',
  components: {
    VueFeather
  }
})
export default class DcIcon extends Vue {
  @Prop({ required: true, default: '' })
  icon!: string
}
</script>

<style ${2|scoped,|} lang="scss">
.dc-icon {
  width: 44px;
  height: 46px;

  background-color: #383a3e;
  border-radius: 6px;
}

.dc-icon:hover {
  background-color: #46484c;
}
</style>
