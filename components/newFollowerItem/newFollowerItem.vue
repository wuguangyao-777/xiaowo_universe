<template>
  <div class="new-follower-item">
    <u-avatar class="avatar" :src="$props.avatar" alt="avatar"></u-avatar>
    <div class="content">
      <p class="name">{{$props.name}}</p>
      <p class="info">关注了你 {{$props.time}}</p>
    </div>
    <button v-if="$props.followedBack" class="btn followed">取关</button>
    <button v-else class="btn unfollowed">回关</button>
  </div>
</template>

<script>
  export default {
    name: 'newFollowerItem',
    data() {
      return {

      }
    },
    props: ['avatar', 'name', 'time', 'followedBack']
  }
</script>

<style scoped>
  * {
    font-family: PingFang SC;
  }
  .new-follower-item {
    width: 100%;
    box-sizing: border-box;
    
    padding: 20rpx 24rpx;
    
    position: relative;
    
    display: flex;
    justify-content: space-between;
  }

  .avatar {
    width: 44px;
    height: 44px;
    
    margin-right: 12rpx;
  }
  
  .content {
    flex-grow: 1;
  }
  
  .name {
    margin-right: 8rpx;
    
    font-size: 14px;
    font-weight: 500;
  }
  
  .info {
    
    color: #B4B1C1;
    
    font-size: 12px;
    font-weight: 400;
  }
  
  .btn {
    display: flex;
    width: 75px;
    height: 32px;
    border: 0;
    border-radius: 23px;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    flex-shrink: 0;
  }
  
  .followed {
    background-color: #F3F3F3;
    color: #49465C;
  }
  
  .unfollowed {
    background-color: #4BB1F0;
    color: white;
  }
</style>