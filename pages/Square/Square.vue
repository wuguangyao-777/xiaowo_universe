<template>
	<button @click='toTopics()'>更多</button>
	<button @click='toPost()'>帖子</button>
	<button @click='toEditPost()'>发表帖子</button>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			toTopics(){
				uni.navigateTo({
					url:"/pages/Square/Topic/Topic"
				})
			},
			toPost(){
				uni.navigateTo({
					url:"/pages/Square/Post/Post"
				})
			},
			toEditPost(){
				uni.navigateTo({
					url:"/pages/Square/EditPost/EditPost"
				})
			}
		}
	}
</script>

<style>
</style>