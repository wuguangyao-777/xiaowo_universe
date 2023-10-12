<template>
	<button @click='toEdit()'>编辑</button>
	<button @click='toPost()'>帖子</button>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			toEdit(){
				uni.navigateTo({
					url:"/pages/Square/Topic/Edit/Edit"
				})
			},
			toPost(){
				uni.navigateTo({
					url:"/pages/Square/Post/Post"
				})
			}
		}
	}
</script>

<style>
</style>