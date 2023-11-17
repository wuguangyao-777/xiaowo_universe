<template>
	<view class='card' @click='toSystemNotification()'>
		<view class='top'>
			<text>{{title}}</text>
		</view>
		<view class='content'>
			<up-text size='12' :text='content' :lines='3'></up-text>
		</view>
		<view  class='bottom'>
			<view class='d_left'>
				<up-text size='12' type='primary' text='查看详情'></up-text>
			</view>
			<view class='d_right'>
				<up-text size='12' type="info" :text="time"></up-text>
			</view>
			<view class='clear'></view>
		</view>
		<u-line color="#ddd"></u-line>
	</view>
</template>

<script>
	export default {
		name:"message",
		data() {
			return {
				title:'袁神通知',
				content:'您好,您已经被袁神盯上了，小心生命安全!tttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt',
				time:'10天前',
			};
		},
		methods:{
			toSystemNotification(){
				uni.navigateTo({
					url:"/pages/Message/MessageBox/SystemNotification"
				})
			},
		}
	}
</script>

<style>
.card{
	margin: 40rpx 55rpx;
}
.top{
	margin-bottom: 30rpx;
	font-size: 40rpx;
	font-weight: 550;
}
.d_left{
	float: left;
}
.d_right{
	float: right;
}
.bottom{
	margin: 20rpx 0;
}
.clear{
	clear: both;
}
</style>