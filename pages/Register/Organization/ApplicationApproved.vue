<template>
	<button @click='toSquare()'>进入小蜗</button>
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