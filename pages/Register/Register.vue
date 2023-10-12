<template>
	<button @click='toSquare()'>立即登录</button>
	<button @click='toIdSel()'>注册</button>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			toSquare(){
				uni.switchTab({
					url:"/pages/Square/Square"
				})
			},
			toIdSel(){
				uni.redirectTo({
					url:"/pages/Register/IdentitySelection"
				})
			}
		}
	}
</script>

<style>
</style>