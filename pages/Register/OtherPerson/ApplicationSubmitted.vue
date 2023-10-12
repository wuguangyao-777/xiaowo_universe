<template>
	<view>
		申请已提交
	</view>
	<button>保存二维码</button>
</template>

<script>
	export default {
		data() {
			return {
				isTrue : false
			}
		},
		onLoad() {
		    // 在页面加载时，根据 shouldNavigate 的值来跳转不同的页面
		    if (this.isTrue) {
		      uni.navigateTo({
		        url: '/pages/Register/OtherPerson/ApplicationApproved'
		      });
		    } else {
		      uni.navigateTo({
		        url: '/pages/Register/OtherPerson/ApplicationNotApproved'
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