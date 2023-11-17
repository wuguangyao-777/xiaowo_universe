<template>
  <div class="msg-item">
    <u-avatar class="avatar" :src="$props.avatar" alt="avatar"></u-avatar>
    <div class="content">
      <div class="head">
        <p class="name">{{$props.name}}</p>
        <p class="time">{{$props.time}}</p>
      </div>
      <p class="info">{{$props.info}}</p>
    </div>
    <u-image v-if="$props.post_img" class="post" :src="$props.post_img" :width="44" :height="44"></u-image>
    <p v-else class="post">{{$props.post_text}}</p>
    <p v-if="$props.msg" class="message">{{$props.msg}}</p>
  </div>
</template>

<script>
  export default {
    name: 'msgItem',
    data() {
      return {

      }
    },
    props: ['avatar', 'name', 'time', 'info', 'post_text', 'post_img', 'msg']
  }
</script>

<style>
  .msg-item {
    width: 100%;
    box-sizing: border-box;
    
    padding: 20rpx 24rpx;
    
    position: relative;
    
    display: grid;
    grid-template-columns: 44px auto 44px;
    grid-template-rows: 44px auto;
    grid-gap: 8px;
  }
  
  .msg-item:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 10%;
    width: 80%;
    height: 1px;
    background-color: #EDECF2;
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
    display: inline;
    margin-right: 8rpx;
    
    font-size: 14px;
    font-weight: 500;
  }
  
  .time {
    display: inline;
    
    color: #B4B1C1;
    
    font-size: 12px;
    font-weight: 400;
  }
  
  .info {
    font-size: 12px;
  }
  
  .post {
    width: 44px;
    height: 44px;
    
    border-radius: 4px;
    background: #F3F8FF;
    
    white-space: pre-wrap;
    text-align: start;
    overflow: hidden;
    overflow-wrap: break-word;
    font-size: 8px;
    text-overflow: ellipsis;
  }
  
  .message {
    grid-area: 2 / 2;
  }
  
</style>