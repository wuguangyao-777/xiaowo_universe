<template>
	<view class='card'>
		<view v-if='type==0'>
			<view style='padding:0 10rpx;'>
				<text class='title'>{{title}}</text>
				<up-input
					placeholder=""
					border="bottom"
					fontSize="30rpx"
					v-model="value"
					@change="change"
				  ></up-input>
			</view>
		</view>
		<view v-if='type==1'>
			<view style='padding:0 10rpx;'>
				<text class='title'>{{title}}</text>
				<up-input
					placeholder=""
					border="bottom"
					fontSize="30rpx"
					v-model="value"
					@change="change"
				  >
				  	<template #suffix>
				  		<test class='suffix'>发送验证码</test>
				  	</template>
				</up-input>
			</view>
		</view>
		<view v-if='type==2'>
			<view style='padding:0 10rpx;'>
				<text class='title'>{{title}}</text>
				<view class='d_right' style='margin: 15rpx;'>
					<u-icon size='15' name="arrow-down"></u-icon>
				</view>
				<view class="picker d_right">
					<picker @change="bindPickerChange" :value="index" :range="array">
						<view class="uni-input">{{array[index]}}</view>
					</picker>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"input",
		data() {
			return {
				type:'2',
				title:'姓名',
				value:'',
				index: 0,
				array:['学生','导员','教师'],
			};
		},
		methods:{
			bindPickerChange: function(e) {
			    console.log('picker发送选择改变，携带值为', e.detail.value);
			    this.index = e.detail.value;
		    },
		}
	}
</script>

<style>
.card{
	margin: 10rpx 40rpx;
	padding: 20rpx;
	background-color: #efefef;
	border-radius: 20rpx;
}
.title{
	line-height: 60rpx;
	color: darkgrey;
	font-size: 30rpx;
}
.picker{
	font-size: 30rpx;
	line-height: 60rpx;
}
.suffix{
	color: darkgrey;
	font-size: 30rpx;
}
.d_right{
	float: right;
}
</style>