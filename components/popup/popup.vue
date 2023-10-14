<template>
  <u-popup ref="popup" type="top" :round="16" :show="show" @close="close()">
    <view>
      <div id="grey-bar"></div>
      <div id="wrapper">
        <slot></slot>
      </div>
    </view>
  </u-popup>
</template>

<script>
  export default {
    name:"popup",
    data() {
      return {
        show: false
      };
    },
    methods: {
      open(){
        this.show = true
      },
      close(){
        this.show = false
      }
    }
  }
</script>

<style>
#grey-bar {
  width: 10%;
  height: 4rpx;
  margin: 12rpx auto 0;
  
  border-radius: 2rpx;
  
  background: #D0CFD9;

}

#wrapper {
  padding: 32rpx 24rpx 32.5rpx;
}
</style>