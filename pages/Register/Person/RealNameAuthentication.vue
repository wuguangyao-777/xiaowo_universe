<template>
	<button @click='toSquare()'>跳过</button>
	<button>验证</button>
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
			
		}
	}
</script>

<style>
</style>