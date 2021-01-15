<template>
  <div>
    <div class="dc-fixed background-shadow fade"></div>
    <div class="dc-fixed">
      <div class="flex h-screen items-center" @mousedown="$emit('close')">
        <div class="flex flex-col popup-card" @mousedown.stop>
          <!-- TODO: 프로필이미지, X 버튼 정렬 -->
          <div class="flex flex-row w-full justify-center">
            <img src="@/assets/images/default-card.png" class="img-profile m-profile" />
            <img
              src="@/assets/images/icons/btn-exit.png"
              class="btn-exit flex cursor-pointer justify-end"
              @click="onCloseClicked()"
            />
          </div>
          <div class="flex flex-col justify-center items-center">
            <dc-text class="m-info" :content="name" size="xl" weight="medium" />
            <dc-text
              class="m-info"
              :content="position"
              color="m-darkgrey"
              size="2xs"
              weight="medium"
            />
            <dc-text
              class="m-mail underline"
              :content="email"
              size="lg"
              weight="medium"
            />
          </div>
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
  width: 249px;
  height: 200px;
  background-color: #404246;
  border-radius: 6px;
  padding: 8px;
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
}

.btn-exit:hover {
  // TODO: 경로
  content: url('../../../assets/images/icons/btn-exit-over.png');
}
.m-profile {
  margin-top: 20px;
}

.m-info {
  margin-top: 8px;
}

.m-mail {
  margin-top: 16px;
}

// TODO: 대체법 연구
// onmouseover="this.src='@/assets/images/icons/btn-exit-over.png';"
// onmouseout="this.src='@/assets/images/icons/btn-exit.png';"
</style>
