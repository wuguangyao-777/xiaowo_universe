//广场上使用
<template>
  <view class="box">
    <image src="/components/Search/searchImg.png" class="searchImg"></image>
    <input type="text" placeholder="帖子/用户/评论" class="searchText">
    <view class="vertical-line"></view>
    <text class="search" hover-class="click-effect" @tap="clickIcon">
      搜索
    </text>
  </view>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  methods: {
    clickIcon() {
      // 搜索按钮点击事件处理
    },
  },
};
</script>

<style>
.box {
  width: 412rpx;
  height: 68rpx;
  position: absolute;
  top: 98rpx;
  left: 132rpx;
  border-radius: 47rpx;
  background-color: #F5F7FA;
  display: flex;
  align-items: center;
}
.searchImg {
  width: 27.5rpx;
  height: 27.56rpx;
  margin-left: 40rpx;
  margin-right: 16rpx;
}
.searchText {
  font-family: 'PingFang SC', sans-serif;
  font-size: 24rpx;
  font-weight: 400;
  line-height: 33.6rpx;
  letter-spacing: -0.6rpx;
  width: 200rpx;
}
.vertical-line {
  width: 2px;
  height: 40rpx;
  background-color: #EEEEEE;
  margin-right: 12rpx;
}
.search {
  font-family: 'PingFang SC';
  font-size: 24rpx;
  font-weight: 500;
  line-height: 33.6rpx;
  letter-spacing: -0.6rpx;
  color: #4BB1F0;
  border: none;
  background: none;
  margin-left: 24rpx;
}
</style>
