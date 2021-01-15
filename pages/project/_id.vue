<template>
  <div class="flex flex-col">
    <div class="flex flex-row margin-bottom items-center">
      <dc-icon icon="chevron-left" class="cursor-pointer" @click.native="backClicked()" />
      <div class="flex flex-col margin-left">
        <div class="flex flex-row cursor-pointer company-name items-center">
          <dc-text
            content="플러스엑스"
            size="sm"
            weight="normal"
            color="darkgrey"
            @click.native="companyClicked()"
          />
          <img src="@/assets/images/icons/btn-arrow.png" class="arrow" />
        </div>
        <dc-text class="m-text" content="kakaopage 리뉴얼" size="2xl" weight="bold" />
      </div>
    </div>

    <div class="flex flex-row">
      <img src="@/assets/images/project-example.png" class="wrap-content" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import DcIcon from '~/components/atoms/icon/DcIcon.vue'
import DcText from '~/components/atoms/text/DcText.vue'

@Component({
  name: 'Project',
  components: { DcIcon, DcText }
})
export default class Project extends Vue {
  private backClicked() {
    this.$router.push('/')
  }

  private companyClicked() {
    this.$router.push('/company/1')
  }
}
</script>

<style ${2|scoped,|} lang="scss">
.margin-left {
  margin-left: 28px;
}

.margin-bottom {
  margin-bottom: 32px;
}

.wrap-content {
  width: 100%;
}

.company-name:hover {
  opacity: 50%;
}

.arrow {
  width: 16px;
  height: 16px;
}
</style>
