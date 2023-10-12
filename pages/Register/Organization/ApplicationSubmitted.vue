<template>
	<view>
		申请已提交
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isTrue : true
			}
		},
		onLoad() {
		    // 在页面加载时，根据 shouldNavigate 的值来跳转不同的页面
		    if (this.isTrue) {
		      uni.navigateTo({
		        url: '/pages/Register/Organization/ApplicationApproved'
		      });
		    } else {
		      uni.navigateTo({
		        url: '/pages/Register/Organization/ApplicationNotApproved'
		      });
		    }
		  },
		methods: {
			SuccessToPass(){
				uni.switchTab({
					url:"/pages/Square/Square"
				})
			},
			FailToPass(){
				uni.navigateTo({
					url:"/pages/Register/OtherPerson/PersonalInformationVerification"
				})
			}
		}
	}
</script>

<style>
</style>