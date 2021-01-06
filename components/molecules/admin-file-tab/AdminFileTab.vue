<template>
  <tabs
    :tabs="tabs"
    :current-tab="currentTab"
    :wrapper-class="'default-tabs'"
    :tab-class="'default-tabs__item'"
    :tab-active-class="'default-tabs__item_active'"
    :line-class="'default-tabs__active-line'"
    @onClick="handleClick"
  />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Tabs from 'vue-tabs-with-active-line'

@Component({
  name: 'AdminFileTab',
  components: {
    Tabs
  }
})
export default class AdminFileTab extends Vue {
  private tabs = [
    {
      title: '등록 성공',
      value: 'success'
    },
    {
      title: '등록 실패',
      value: 'fail'
    }
  ]

  private currentTab = 'success'

  private handleClick(newTab: string) {
    console.log('newTab :', newTab)
    this.currentTab = newTab
    this.$emit('onTabChanged', newTab)
  }
}
</script>

<style ${2|scoped,|} lang="scss">
.default-tabs {
  position: relative;
  margin: 0 auto;
  &__item {
    display: inline-block;
    margin: 0 50px;
    padding: 10px;
    padding-bottom: 8px;
    font-size: 16px;
    letter-spacing: 0.8px;
    color: gray;
    text-decoration: none;
    border: none;
    background-color: transparent;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    transition: all 0.25s;
    &_active {
      color: #fff;
    }
    &:hover {
      border-bottom: 2px solid gray;
      color: gray;
    }
    &:focus {
      outline: none;
      border-bottom: 2px solid gray;
      color: #fff;
    }
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
  &__active-line {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    background-color: #fff;
    transition: transform 0.4s ease, width 0.4s ease;
  }
}
</style>
