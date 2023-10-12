<template>
	<button @click='toComInfo()'>下一步</button>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			toComInfo(){
				uni.navigateTo({
					url:"/pages/Register/OtherPerson/CommunityInformation"
				})
			}
			
		}
	}
</script>

<style>
</style>