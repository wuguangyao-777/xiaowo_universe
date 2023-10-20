<template>
	<view class='card' @click='toPost()'>
		<view class="margin title">
			<text>{{title}}</text>
		</view>
		<view class='content'>
			<view v-for='(item,index) in content'>
				<view class='margin d_left'>
					<u-tag :icon='item[0]' :text="item[1]" shape="circle" bgColor='#ddddddbb' borderColor='#ddddddbb'></u-tag>
				</view>
				<view class='clear'></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"essential_post",
		data() {
			return {
				userName:'yuelingfan',
				title:'蜗的鹊桥 | 真·表白墙',
				content:[
					['https://cdn.uviewui.com/uview/example/tag.png','tttttttttttttt'],
					['','tttttttttttttttttt'],
					['','ttttttttttt'],
				]
			};
		},
		methods:{
			toPost(){
				uni.navigateTo({
					url:"/pages/Square/Post/Post"
				})
			},
		}
	}
</script>

<style>
.card{
	padding: 30rpx;
	margin: 30rpx;
	color: #fff;
	background: linear-gradient(#4bb1ef, #ffe1c2);
	border-radius: 20rpx;
}
.title{
	font-size: 40rpx;
}
.d_left{
	float: left;
}
.d_right{
	float: right;
}
.margin{
	margin: 15rpx;
}
.content{
	margin: 20rpx 0;
	padding-top: 10rpx;
}
.clear{
	clear: both;
}
</style>