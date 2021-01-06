<template>
  <div class="flex flex-col mb-2 w-full">
    <ValidationProvider v-slot="{ validate, errors }" :name="name" :rules="rules">
      <div class="flex flex-col">
        <slot :validate="validate"></slot>
        <span class="text-xs text-danger mt-1">{{ errors[0] }}</span>
      </div>
    </ValidationProvider>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { ValidationProvider } from 'vee-validate'

@Component({
  name: 'DcFormItem',
  components: {
    ValidationProvider
  }
})
export default class DcFormItem extends Vue {
  @Prop()
  private label!: string

  @Prop({ required: true })
  private name!: string

  @Prop()
  private rules!: string
}
</script>

<style lang="scss" scoped></style>
