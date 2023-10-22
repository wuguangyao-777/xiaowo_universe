<template>
	<button @click='toLike()'>点赞</button>
	<button @click='toComment()'>评论</button>
	<button @click='toAttention()'>关注</button>
	<button @click='toByAt()'>被@</button>
	<button @click='toReferenced()'>被引用</button>
	<button @click='toSystemNotification()'>系统通知</button>
	<button @click='toChatting()'>聊天界面</button>
	
	<view class="custom-tab-bar">
	  <view @click="switchTab('/pages/Square/Square')" class="tab-button">
	    <img :src="tabAImage" class="tab-icon" />
	    <text class="tab-text">广场</text>
	  </view>
	  <view @click="switchTab('/pages/Message/Message')" class="tab-button">
	    <img :src="tabBImage" class="tab-icon" />
	    <text class="tab-text">消息</text>
	  </view>
	  <view @click="switchTab('/pages/My/My')" class="tab-button">
	    <img :src="tabCImage" class="tab-icon" />
	    <text class="tab-text">我的</text>
	  </view>
	</view>
</template>

<script>
	import { tab,updateTab } from '/pages/tab.js';
	export default {
		data() {
			return {
				currentTab: tab.value
			}
		},
		computed: {
		    tabAImage() {
		      if (this.currentTab === '/pages/Square/Square') return '/static/tabBar/square_c.png';
		      return '/static/tabBar/square_r.png';
		    },
		    tabBImage() {
		      if (this.currentTab === '/pages/Square/Square') return '/static/tabBar/message_l.png';
		      if (this.currentTab === '/pages/Message/Message') return '/static/tabBar/message_c.png';
		      return '/static/tabBar/message_r.png';
		    },
		    tabCImage() {
		      if (this.currentTab === '/pages/My/My') return '/static/tabBar/my_c.png';
		      return '/static/tabBar/my_l.png';
		    }
		  },
		methods: {
			switchTab(tab) {
			      updateTab(tab);
			      uni.switchTab({
			        url: tab
			      });
			    },
			toLike(){
				uni.navigateTo({
					url:"/pages/Message/MessageBox/Like"
				})
			},
			toComment(){
				uni.navigateTo({
					url:"/pages/Message/MessageBox/Comment"
				})
			},
			toAttention(){
				uni.navigateTo({
					url:"/pages/Message/MessageBox/Attention"
				})
			},
			toByAt(){
				uni.navigateTo({
					url:"/pages/Message/MessageBox/ByAt"
				})
			},
			toReferenced(){
				uni.navigateTo({
					url:"/pages/Message/MessageBox/Referenced"
				})
			},
			toSystemNotification(){
				uni.navigateTo({
					url:"/pages/Message/MessageBox/SystemNotification"
				})
			},
			toChatting(){
				uni.navigateTo({
					url:"/pages/Message/Chatting/Chatting"
				})
			}
		}
	}
</script>

<style>
.custom-tab-bar {
  display: flex;
  justify-content: space-around;
  background-color: #fff; /* 设置背景颜色 */
  border-top: 1px solid #ccc; /* 上边框线条 */
  position: fixed;
  bottom: 40rpx;
  left: 0;
  right: 0;
}

.tab-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10rpx;
  text-align: center;
  text-decoration: none;
  border: none;
  outline: none;
  color: #333;
}

.tab-icon {
  width: 48rpx;
  height: 48rpx;
}

.tab-text {
	font-family: 'PingFang SC', sans-serif;
	font-weight: 400;
  font-size: 22rpx;
  letter-spacing: -0.6rpx;
  margin-top: 12rpx;
}

/* 添加样式控制 */
</style>