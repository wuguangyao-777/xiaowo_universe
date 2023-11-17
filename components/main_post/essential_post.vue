<template>
	<view class='card' @click='toPost()'>
		<view class="margin title">
			<text>{{content}}</text>
		</view>
		<view class='top'>
			<up-row>
			    <up-col span="1">
					<view><up-avatar shape='circle' size='20' :src="src"></up-avatar></view>
			    </up-col>
			    <up-col span="4">
					<text class='d_left'>{{userName}}</text>
			    </up-col>
			    <up-col span="7">
			        <text class='d_right' style='opacity:80%'>18919次浏览 | 2023/06/13</text>
			    </up-col>
			</up-row>
		</view>
		<view class='content'>
			<u-album :urls="urls2"></u-album>
		</view>
		<view class='bottom'>
			<view class='margin d_left tags'>
				<u-tag :text="tag_post" size="mini" shape="circle" bgColor='#bbb' borderColor=#bbb></u-tag>
			</view>
			<view class='d_right' size='25' style='margin: 15rpx;'>
				<u-icon color='#FFF' name="arrow-right"></u-icon>
			</view>
			<view class='d_right' style='margin: 5rpx;'>
				<text class='more'>前往查看</text>
			</view>
			<view class='clear'></view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"essential_post",
		data() {
			return {
				userName:'yuelingfan',
				tag_post:'壁纸分享',
				content:'分享图片',
				urls2: [
				    'https://cdn.uviewui.com/uview/album/1.jpg'
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
	padding: 20rpx;
	margin: 30rpx;
	color: #fff;
	background: linear-gradient(#4bb1ef, #ffe1c2);
	border-radius: 20rpx;
}
.top{
	font-size: 28rpx;
	margin: 20rpx 0;
}
.title{
	font-size: 45rpx;
}
.d_left{
	float: left;
}
.d_right{
	float: right;
}
.margin{
	margin: 10rpx;
}
.tags{
	display: flex;
	  justify-content: center;
}
.clear{
	clear: both;
}
.more{
	color: #fff;
	font-size: 30rpx;
}
.bottom{
	margin: 20rpx 0;
}
</style>