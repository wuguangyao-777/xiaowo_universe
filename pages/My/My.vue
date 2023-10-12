<template>
	<view>
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
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
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
.mybg{
	width:750rpx;
	position: relative;
	z-index: 1;
}
.myhead{
	padding-left: 100rpx;
	width: 200rpx;
	height: 200rpx;
	position: relative;
	z-index: 2;
}
</style>
