 <template>
	 <!-- <text class='u-line-1'>是日也，天朗气清，惠风和畅，仰观宇宙之大，俯察品类之盛1111111111111111111111111111111111</text> -->
	<button @click='toSquare()'>立即登录</button>
	<button @click='toIdSel()'>注册</button>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			toSquare(){
				uni.switchTab({
					url:"/pages/Square/Square"
				})
			},
			toIdSel(){
				uni.redirectTo({
					url:"/pages/Register/IdentitySelection"
				})
			}
		}
	}
</script>

<style>
</style> 

