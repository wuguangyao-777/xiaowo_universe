<template>
	<button @click='toVis()'>可见范围</button>
	<button @click='toPub()'>发表范围</button>
	<button @click='Finish()'>编辑完成</button>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			toVis(){
				uni.navigateTo({
					url:"/pages/Square/Topic/Edit/Vis_Pub/VisibleArea"
				})
			},
			toPub(){
				uni.navigateTo({
					url:"/pages/Square/Topic/Edit/Vis_Pub/PublishArea"
				})
			},
			Finish(){
				uni.navigateTo({
					url:"/pages/Square/Topic/Topic"
				})
			}
		}
	}
</script>

<style>
</style>