<template>
  <div class="flex flex-row">
    <dc-text
      class="m-textcursor-pointer"
      content="Facebook"
      size="2xs"
      weight="light"
      color="darkgrey"
    />
    <dc-text
      class="m-textcursor-pointer text-margin"
      content="|"
      size="2xs"
      weight="light"
      color="darkgrey"
    />
    <dc-text
      class="m-textcursor-pointer text-margin"
      content="Instagram"
      size="2xs"
      weight="light"
      color="darkgrey"
    />
    <dc-text
      class="m-textcursor-pointer text-margin"
      content="|"
      size="2xs"
      weight="light"
      color="darkgrey"
    />
    <dc-text
      class="m-textcursor-pointer text-margin"
      content="Medium"
      size="2xs"
      weight="light"
      color="darkgrey"
    />
    <dc-text
      class="m-textcursor-pointer text-margin"
      content="|"
      size="2xs"
      weight="light"
      color="darkgrey"
    />
    <dc-text
      class="m-textcursor-pointer text-margin"
      content="Brunch"
      size="2xs"
      weight="light"
      color="darkgrey"
    />
    <dc-text
      class="m-textcursor-pointer text-margin"
      content="|"
      size="2xs"
      weight="light"
      color="darkgrey"
    />
    <dc-text
      class="m-textcursor-pointer text-margin"
      content="Behance"
      size="2xs"
      weight="light"
      color="darkgrey"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import DcText from '../atoms/DcText.vue'

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
