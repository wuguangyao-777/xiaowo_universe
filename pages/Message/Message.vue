<template>
	<button @click='toLike()'>点赞</button>
	<button @click='toComment()'>评论</button>
	<button @click='toAttention()'>关注</button>
	<button @click='toByAt()'>被@</button>
	<button @click='toReferenced()'>被引用</button>
	<button @click='toSystemNotification()'>系统通知</button>
	<button @click='toChatting()'>聊天界面</button>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			toLike(){
				uni.navigateTo({
					url:"/pages/Message/MessageBox/Like"
				})
			},
			toComment(){
				uni.navigateTo({
					url:"/pages/Message/MessageBox/Comment"
				})
			},
			toAttention(){
				uni.navigateTo({
					url:"/pages/Message/MessageBox/Attention"
				})
			},
			toByAt(){
				uni.navigateTo({
					url:"/pages/Message/MessageBox/ByAt"
				})
			},
			toReferenced(){
				uni.navigateTo({
					url:"/pages/Message/MessageBox/Referenced"
				})
			},
			toSystemNotification(){
				uni.navigateTo({
					url:"/pages/Message/MessageBox/SystemNotification"
				})
			},
			toChatting(){
				uni.navigateTo({
					url:"/pages/Message/Chatting/Chatting"
				})
			}
		}
	}
</script>

<style>
</style>