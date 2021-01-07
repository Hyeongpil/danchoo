<template>
  <div class="flex flex-row">
    <dc-text
      class="m-text cursor-pointer"
      content="Facebook"
      size="xs"
      weight="500"
      color="darkgrey"
    />
    <dc-text
      class="m-text cursor-pointer text-margin"
      content="|"
      size="xs"
      weight="500"
      color="darkgrey"
    />
    <dc-text
      class="m-text cursor-pointer text-margin"
      content="Instagram"
      size="xs"
      weight="500"
      color="darkgrey"
    />
    <dc-text
      class="m-text cursor-pointer text-margin"
      content="|"
      size="xs"
      weight="500"
      color="darkgrey"
    />
    <dc-text
      class="m-text cursor-pointer text-margin"
      content="Medium"
      size="xs"
      weight="500"
      color="darkgrey"
    />
    <dc-text
      class="m-text cursor-pointer text-margin"
      content="|"
      size="xs"
      weight="500"
      color="darkgrey"
    />
    <dc-text
      class="m-text cursor-pointer text-margin"
      content="Brunch"
      size="xs"
      weight="500"
      color="darkgrey"
    />
    <dc-text
      class="m-text cursor-pointer text-margin"
      content="|"
      size="xs"
      weight="500"
      color="darkgrey"
    />
    <dc-text
      class="m-text cursor-pointer text-margin"
      content="Behance"
      size="xs"
      weight="500"
      color="darkgrey"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import DcText from '~/components/atoms/text/DcText.vue'

@Component({
  name: 'SnsGroup',
  components: { DcText }
})
export default class SnsGroup extends Vue {}
</script>

<style ${2|scoped,|} lang="scss">
.text-margin {
  margin-left: 12px;
}
</style>
