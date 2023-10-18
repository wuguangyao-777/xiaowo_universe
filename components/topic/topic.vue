<template>
	<view class='card'>
		<text class='title'>{{topic_title}}</text>
		<view class='content'>
			<up-text size='12' color='#aaa' :lines="1" :text="topic_content"></up-text>
		</view>
	</view>
</template>

<script>
	export default {
		name:"topic",
		data() {
			return {
				topic_title:'黄海之声',
				topic_content:'111111111111111111111111111111111111111111111111111111111111111111111111',
			};
		}
	}
</script>

<style>
.card{
	margin: 30rpx;
	padding: 20rpx 35rpx;
	border-radius: 20rpx;
	background:#efefef;
}
.title{
	font-size: 33rpx;
	font-weight: 600;
	padding: 0 0 20rpx;
}
.content{
	margin: 10rpx 0 0;
	padding: 5rpx 0;
}
</style>