<template>
	<view class="foc">
		<view class="focusenum">
			关注了1个人
		</view>
		<Focuse></Focuse>
		<view class="loaddata">
			已经加载全部数据
		</view>
	</view>
	
</template>

<script>
	import Focuse from '../../components/Foucse.vue'
	export default {
		data() {
			return {
				
			}
		},
		components:{
			Focuse
		},
		methods: {
			
		}
	}
</script>

<style>
	.foc{
		padding: 0 30upx;
	}
	.focusenum{
		padding: 30upx 0;
		font-size: 26upx;
		color: #2e2f34;
	}
	.loaddata{
		font-size: 22upx;
		color: #8a8686;
		text-align: center;
		padding: 20upx 0;
	}
</style>
