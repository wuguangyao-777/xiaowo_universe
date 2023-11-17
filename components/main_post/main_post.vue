<template>
	<view class='card' @click='toPost()'>
		<u-line dashed></u-line>
		<view class='top'>
			<up-row customStyle="margin: 10px">
			    <up-col span="2">
					<view><up-avatar :src="src"></up-avatar></view>
			    </up-col>
			    <up-col span="4">
					<view>
						<text>{{userName}}</text>
						<up-text type="info" :text="tag"></up-text>
					</view>
			    </up-col>
			    <up-col span="6">
			        <view class="d_right"><u-icon name="more-dot-fill"></u-icon></view>
			    </up-col>
			</up-row>
		</view>
		<view class='content'>
			<view class="margin">
				<text>{{content}}</text>
			</view>
			<u-album :urls="urls2"></u-album>
		</view>
		<view>
			<view class='margin d_left tags'>
				<u-tag :text="tag_post" size="mini" shape="circle" bgColor='#bbb' borderColor=#bbb></u-tag>
			</view>
			<view class='clear'></view>
		</view>
		<view class='bottom'>
			<up-row customStyle="margin: 10px">
			    <up-col span="4">
					<text>{{time}}</text>
			    </up-col>
			    <up-col span="1">
					<u-icon name="thumb-up"></u-icon>
			    </up-col>
				<up-col span="1">
					<text>{{info.zan}}</text>
				</up-col>
				<up-col span="1">
					<u-icon name="thumb-down"></u-icon>
				</up-col>
				<up-col span="1">
					<text>{{info.cai}}</text>
				</up-col>
				<up-col span="1">
					<u-icon name="chat"></u-icon>
				</up-col>
				<up-col span="1">
					<text>{{info.chat}}</text>
				</up-col>
				<up-col span="1">
					<u-icon name="share"></u-icon>
				</up-col>
				<up-col span="1">
					<text>{{info.fenxiang}}</text>
				</up-col>
			</up-row>
		</view>
		<u-line dashed></u-line>
	</view>
</template>

<script>
	export default {
		name:"main_post",
		data() {
			return {
				userName:"yuelingfan",
				src: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
				tag:'在校生|管理员',
				tag_post:'壁纸分享',
				content:'分享图片',
				time:'11-08 12:23',
				urls2: [
				    'https://cdn.uviewui.com/uview/album/1.jpg'
				],
				info:{
					zan:683,
					cai:683,
					chat:29,
					fenxiang:190
				}
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
	height: 50rpx;
}
.clear{
	clear: both;
}
.bottom{
	font-size: 30rpx;
	color:#999;
}
</style>