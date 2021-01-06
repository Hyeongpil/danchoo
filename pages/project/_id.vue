<template>
  <div class="flex flex-col">
    <div class="flex flex-row margin-bottom">
      <dc-icon
        icon="chevron-left"
        class="cursor-pointer ml-3"
        @click.native="$refs.fileInput.click()"
      />
      <div class="flex flex-col margin-left">
        <dc-text
          class="m-text logo-margin"
          content="플러스엑스"
          size="sm"
          weight="light"
          color="darkgrey"
        />
        <dc-text
          class="m-text logo-margin"
          content="kakaopage 리뉴얼"
          size="2xl"
          weight="medium"
        />
      </div>
    </div>

    <div class="flex flex-row">
      <img src="@/assets/images/project-example.png" class="wrap-content" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import DcIcon from '~/components/atoms/DcIcon.vue'
import DcText from '~/components/atoms/DcText.vue'

@Component({
  name: 'Project',
  components: { DcIcon, DcText }
})
export default class Project extends Vue {}
</script>

<style ${2|scoped,|} lang="scss">
.margin-left {
  margin-left: 28px;
}

.margin-bottom {
  margin-bottom: 28px;
}

.wrap-content {
  width: 100%;
}
</style>
