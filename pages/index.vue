<template>
  <div class="flex flex-col">
    <div class="title">{{ title }}</div>
    <div class="grid grid-container">
      <div v-for="(card, idx) in test" :key="idx">
        <card />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Card from '~/components/organisms/card/Card.vue'
import DcPopup from '~/components/organisms/popup/DcPopup.vue'

@Component({
  name: 'Main',
  components: { Card, DcPopup }
})
export default class Main extends Vue {
  private title: string = '모든 에이전시의 프로젝트를 확인하세요'
  private test: number[] = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50
  ]

  private isPopup = false

  private titleChange(path: string) {
    if (path === '/') this.title = '모든 에이전시의 프로젝트를 확인하세요'
    if (path === '/ux') this.title = 'UX'
    if (path === '/ui') this.title = 'UI'
    if (path === '/brand') this.title = '브랜드'
    if (path === '/graphic') this.title = '그래픽'
    if (path === '/marketing') this.title = '마케팅'
    if (path === '/media') this.title = '영상'
    if (path === '/3d') this.title = '3D'
  }

  created() {
    this.titleChange(this.$route.path)
  }
}
</script>

<style lang="scss" scoped>
.title {
  font-weight: 700;
  font-size: 36px;
  color: white;
}
.grid-container {
  grid-template-columns: repeat(auto-fill, minmax(280px, 280px));
  row-gap: 28px;
  column-gap: 64px;
  margin-top: 38px;
}
</style>
