<template>
	<view class='card'>
		<test>{{content}}</test>
	</view>
</template>

<script>
	export default {
		name:"s_posts",
		data() {
			return {
				content:'测试'
			};
		}
	}
</script>

<style>
.card{
	width: 120rpx;
	height: 120rpx;
	padding: 20rpx;
	margin: 10rpx;
	background-color: #eeefff;
	border-radius: 20rpx;
	font-size: 20rpx;
}
</style>