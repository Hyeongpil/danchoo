<template>
  <footer>
    <div class="flex flex-row p-footer">
      <img src="~/assets/images/logo.png" class="f-logo" />
      <div class="flex flex-col">
        <dc-text
          content="Studio. Danchoo"
          size="base"
          weight="black"
          color="darkgrey"
          class="m-footer-title"
        ></dc-text>
        <div class="flex flex-row m-footer-content">
          <dc-text
            content="Designed by "
            size="base"
            weight="bold"
            color="darkgrey"
          ></dc-text>
          <dc-text
            v-for="(name, idx) in designers"
            :key="idx"
            class="name cursor-pointer"
            :content="name"
            size="base"
            weight="500"
            color="darkgrey"
            @click.native="onPopupOpen(name, 'UI/UX Designer', 'junyeajung@naver.com')"
          ></dc-text>
        </div>
        <div class="flex flex-row m-footer-content">
          <dc-text
            content="Developed by "
            size="base"
            weight="500"
            color="darkgrey"
          ></dc-text>
          <dc-text
            v-for="(name, idx) in developers"
            :key="idx"
            class="name cursor-pointer"
            :content="name"
            size="base"
            weight="500"
            color="darkgrey"
            @click.native="onPopupOpen(name, 'Developer', 'abcd@naver.com')"
          ></dc-text>
        </div>
        <div class="flex flex-row m-footer-content">
          <dc-text
            content="ⓒ 2021. Studio. Danchoo All Rights Reserved."
            size="base"
            weight="500"
            color="darkgrey"
          ></dc-text>
        </div>
      </div>
    </div>

    <div v-if="isPopup">
      <dc-popup
        :name="name"
        :position="position"
        :email="email"
        @close="onPopupClose"
      ></dc-popup>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import DcText from '~/components/atoms/text/DcText.vue'
import DcPopup from '~/components/organisms/popup/DcPopup.vue'

@Component({
  name: 'Footer',
  components: { DcText, DcPopup }
})
export default class Footer extends Vue {
  private isPopup: boolean = false
  private name: string = ''
  private designers: string[] = ['Jian', 'Hyunkyung', 'Yeajung']
  private developers: string[] = ['Seungmin', 'Hyeongpil']
  private position: string = ''
  private email: string = ''

  private onPopupOpen(name: string, position: string, email: string) {
    this.name = name
    this.position = position
    this.email = email
    this.isPopup = true
  }

  private onPopupClose() {
    this.isPopup = false
  }
}
</script>

<style>
footer {
  background-color: #242629;
  width: 100%;
  height: 230px;
  display: block;
  bottom: 0;
  left: 0;
  right: 0;
}

.p-footer {
  padding-top: 40px;
}

.m-footer-content {
  margin-top: 10px;
  margin-left: 20px;
}

.m-footer-title {
  margin-left: 20px;
}

.f-logo {
  width: 30px;
  height: 30px;
}
.name {
  margin-left: 5px;
}
.name:hover {
  color: #dadce0;
}
</style>
