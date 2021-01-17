<template>
  <div>
    <div class="dc-fixed background-shadow fade"></div>
    <div class="dc-fixed flex h-screen items-center" @mousedown="$emit('close')">
      <div class="flex flex-col popup-card" @mousedown.stop>
        <img
          src="@/assets/images/icons/btn-exit-over.png"
          class="btn-exit cursor-pointer fixed self-end"
          @click="onCloseClicked()"
        />
        <div class="flex flex-row w-full justify-center">
          <img src="@/assets/images/default-card.png" class="img-profile m-profile" />
        </div>
        <div class="flex flex-col justify-center items-center">
          <dc-text class="m-info" :content="name" size="xl" weight="extrabold" />
          <dc-text
            class="m-info"
            :content="position"
            color="m-darkgrey"
            size="2xs"
            weight="extrabold"
          />
          <dc-text
            class="t-mail m-mail underline cursor-pointer"
            :content="email"
            size="lg"
            weight="extrabold"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import DcText from '~/components/atoms/text/DcText.vue'

@Component({ name: 'DcPopup', components: { DcText } })
export default class DcPopup extends Vue {
  @Prop()
  private name!: string

  @Prop()
  private position!: string

  @Prop()
  private email!: string

  private onCloseClicked() {
    this.$emit('close')
  }
}
</script>

<style ${2|scoped,|} lang="scss">
.dc-fixed {
  position: fixed;
  top: 0;
  left: 0;
  overflow-x: hidden;
  overflow-y: hidden;
  width: 100%;
  height: 100%;
  z-index: 1000;
  outline: 0;
}

.background-shadow {
  background: #000;
  opacity: 0.5;
}

.fade {
  transition: opacity 0.15s linear;
}

.popup-card {
  width: 260px;
  height: 220px;
  background-color: #404246;
  border-radius: 6px;
  padding: 8px 8px 15px 8px;
  margin: 0 auto;
  position: relative;
}
.img-profile {
  width: 56px;
  height: 56px;
  border-radius: 50%;
}

.btn-exit {
  width: 24px;
  height: 24px;
  opacity: 0.5;
}

.btn-exit:hover {
  opacity: 1;
}
.m-profile {
  margin-top: 20px;
}

.m-info {
  margin-top: 9px;
}

.m-mail {
  margin-top: 16px;
}

.t-mail:hover {
  opacity: 0.5;
}
</style>
