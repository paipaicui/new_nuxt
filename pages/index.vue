<template>
  <div class="container index-page">
    <div class="index-header header">
      <span>首页</span>
      <span class="right">
        <router-link to="" class="icon tel"></router-link>
        <router-link to="" class="icon msg"></router-link>
      </span>
    </div>
    <div class="page-main">
      <load-more :tip="正在加载"></load-more>
      <section class="index-banner"></section>
    </div>
  </div>
</template>

<script>
import { LoadMore } from "vux";
export default {};
</script>

<style lang="less">
.container {
  margin: 0 auto;
  min-height: 100vh;
  .index-header {
    height: 0.68rem;
    padding: 0 0.18rem;
    font-weight: bold;
    .right {
      font-size: 0;
    }
    .icon {
      width: 0.24rem;
      height: 0.24rem;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-position: center center;
      display: inline-block;
      margin-left: 0.1rem;
      &.tel {
        background-image: url("./../assets/images/customer_service.png");
      }
      &.msg {
        background-image: url("./../assets/images/message_active.png");
      }
    }
  }
  .page-main {
    position: fixed;
    top: 0.68rem;
    height: (100vh - 0.51rem - 0.68rem);
    width: 100%;
    .index-banner {
      height: 2rem;
      background: #f0f7ff url("./../assets/images/index_banner_wrap.png") left
        top no-repeat;
      background-size: 100% 100%;
    }
  }
}
</style>
