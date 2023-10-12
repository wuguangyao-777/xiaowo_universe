<template>
	<view>
		<test>注册个人账号</test>
		<button @click='toPerson()'>本科+硕士</button>
		<button @click='toOtherPerson()'>其他个人账号</button>
		<test>注册组织账号</test>
		<button @click='toOrganization(
		)'>组织账号</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			toPerson(){
				uni.redirectTo({
					url:"/pages/Register/Person/PersonalInformationVerification"
				})
			},
			toOtherPerson(){
				uni.redirectTo({
					url:"/pages/Register/OtherPerson/PersonalInformationVerification"
				})
			},
			toOrganization(){
				uni.redirectTo({
					url:"/pages/Register/Organization/OrganizationalDataFilling"
				})
			}
		}
	}
</script>

<style>
</style>