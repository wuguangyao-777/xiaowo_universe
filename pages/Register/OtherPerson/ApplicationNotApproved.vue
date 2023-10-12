<template>
	<button @cllck='toPerInfoV()'>返回修改</button>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			toPerInfoV(){
				uni.navigateTo({
					url:"/pages/Register/OtherPerson/PersonalInformationVerification"
				})
			}
		}
	}
</script>

<style>
</style>