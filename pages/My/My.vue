<template>
	
		<!-- <image class = "mybg" src = "../../static/my/backgroud.png"></image>
		<image class = "myhead" src = "../../static/my/head.png" ></image> -->
		<button @click = "toEdit()">编辑资料</button>
		
		<button @click = "toFans()">粉丝</button>
		<button @click = "toAttention()">关注</button>
		
		<button @click='toPost()'>我的帖子</button>
		<button @click='toCollection()'>我的收藏</button>
		<button @click='toLike()'>我的点赞</button>
		<button @click='toHide()'>被我隐藏</button>
		<button @click='toCommnet()'>我的评论</button>
		<button @click='toBlock()'>被我拉黑</button>
		
		<button @click='toFeedback()'>意见反馈</button>
		<button @click='toMessagePush()'>消息推送</button>
		<button @click='toCoorperation()'>商务合作</button>
		<button @click='toAboutUs()'>关于我们</button>
		
		<button @click='toExit()'>退出登录</button>
		<button @click='toLogOff()'>注销</button>
	
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
			toEdit(){
				uni.navigateTo({
					url: '/pages/My/Edit/Edit',
					success: res => {},
					fail: () => {},
					complete: () => {}
				})
			},
			toFans(){
				uni.navigateTo({
					url:'/pages/My/F_A_D/Fans'
				})
			},
			toAttention(){
				uni.navigateTo({
					url:'/pages/My/F_A_D/Attention'
				})
			},
			toPost(){
				uni.navigateTo({
					url:'/pages/My/ContentCenter/Post'
				})
			},
			toCollection(){
				uni.navigateTo({
					url:'/pages/My/ContentCenter/Collection'
				})
			},
			toLike(){
				uni.navigateTo({
					url:'/pages/My/ContentCenter/Like'
				})
			},
			toHide(){
				uni.navigateTo({
					url:'/pages/My/ContentCenter/Hide'
				})
			},
			toCommnet(){
				uni.navigateTo({
					url:'/pages/My/ContentCenter/Comment'
				})
			},
			toBlock(){
				uni.navigateTo({
					url:'/pages/My/ContentCenter/Block'
				})
			},
			toFeedback(){
				uni.navigateTo({
					url:'/pages/My/MoreServices/Feedback'
				})
			},
			toMessagePush(){
				uni.navigateTo({
					url:'/pages/My/MoreServices/MessagePush'
				})
			},
			toCoorperation(){
				uni.navigateTo({
					url:'/pages/My/MoreServices/Coorperation'
				})
			},
			toAboutUs(){
				uni.navigateTo({
					url:'/pages/My/MoreServices/AboutUs'
				})
			},
			toExit(){
				uni.redirectTo({
					url:'/pages/Register/Register'
				})
			},
			toLogOff(){
				uni.redirectTo({
					url:'/pages/Register/Register'
				})
			},
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
</style>
