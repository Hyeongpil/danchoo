<template>
  <div>
    <ValidationObserver v-slot="validate">
      <form
        @submit.prevent="validate.handleSubmit(onSubmit(validate))"
        @reset.prevent="reset"
      >
        <slot />
      </form>
    </ValidationObserver>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { ValidationObserver } from 'vee-validate'
import { ValidationContext } from 'vee-validate/dist/types/components/common'
import Toastify from 'toastify-js'

@Component({
  name: 'DcForm',
  components: {
    ValidationObserver
  }
})
export default class DcForm extends Vue {
  private onSubmit(v: ValidationContext) {
    if (v.invalid === true) {
      Toastify({
        text: '올바른 값을 입력해 주세요',
        duration: 3000,
        gravity: 'top', // `top` or `bottom`
        position: 'right' // `left`, `center` or `right`
      }).showToast()
      return
    }
    this.$emit('onSubmit', v)
  }
}
</script>

<style ${2|scoped,|} lang="scss"></style>
