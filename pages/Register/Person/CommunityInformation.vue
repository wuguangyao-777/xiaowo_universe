<template>
	<button @click='toRNameA()'>下一步</button>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			toRNameA(){
				uni.navigateTo({
					url:"/pages/Register/Person/RealNameAuthentication"
				})
			}
			
		}
	}
</script>

<style>
</style>