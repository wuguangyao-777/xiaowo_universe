<template>
	<button @click='toSquare()'>完成</button>
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
			}
		}
	}
</script>

<style>
</style>