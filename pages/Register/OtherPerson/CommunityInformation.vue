<template>
	<button @click='toSubmitted()'>提交</button>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			toSubmitted(){
				uni.navigateTo({
					url:"/pages/Register/OtherPerson/ApplicationSubmitted"
				})
			}
			
		}
	}
</script>

<style>
</style>