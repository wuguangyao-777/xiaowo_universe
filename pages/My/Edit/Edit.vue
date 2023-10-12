<template>
	<button @click='toMy'>编辑完成</button>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		methods: {
			toMy(){
				uni.switchTab({
					url: '/pages/My/My'
				})
			}
		}
	}
</script>

<style>
</style>