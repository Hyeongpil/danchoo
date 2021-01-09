<template>
  <div>
    <dc-form @onSubmit="onSubmit">
      <div class="flex flex-col justify-center items-center">
        <dc-text content="로그인" size="2xl" weight="700" />
        <dc-form-item name="아이디" rules="required">
          <dc-input v-model="username" place-holder="아이디" class="mt-5" />
        </dc-form-item>
        <dc-form-item name="비밀번호" rules="required">
          <dc-input
            v-model="password"
            place-holder="비밀번호"
            class="mt-5"
            type="password"
          />
        </dc-form-item>
        <dc-button text="로그인" class="mt-5" type="submit" />
      </div>
    </dc-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Toastify from 'toastify-js'
import DcButton from '~/components/atoms/button/DcButton.vue'
import DcFormItem from '~/components/atoms/form-item/DcFormItem.vue'
import DcForm from '~/components/atoms/form/DcForm.vue'
import DcInput from '~/components/atoms/input/DcInput.vue'
import DcText from '~/components/atoms/text/DcText.vue'
import { adminStore } from '~/store'
import { ISignInUp } from '~/types/admin.interface'

@Component({
  name: 'SignIn',
  layout: 'admin',
  components: {
    DcInput,
    DcText,
    DcFormItem,
    DcForm,
    DcButton
  }
})
export default class SignIn extends Vue {
  private username: string = ''
  private password: string = ''

  private onSubmit() {
    const payload: ISignInUp = {
      username: this.username,
      password: this.password
    }
    this.$repositories.admin
      .signIn(payload)
      .then((res) => {
        adminStore.SET_ACCESS_TOKEN(res.data.accessToken)
        Toastify({
          text: '로그인 되었습니다.',
          duration: 3000,
          gravity: 'top', // `top` or `bottom`
          position: 'right' // `left`, `center` or `right`
        }).showToast()
        console.log('res :', res)
      })
      .catch((err) => {
        Toastify({
          text: err.message,
          duration: 3000,
          gravity: 'top', // `top` or `bottom`
          position: 'right' // `left`, `center` or `right`
        }).showToast()
      })
  }
}
</script>

<style ${2|scoped,|} lang="scss"></style>
