<template>
	<view class="classifyitem">
		<view class="bg-img bg-mask flex align-center" 
		:style="{background:'url('+sptdata.imgurl+')'}"
		>
			<view class=" text-white title-text">
				<view class=" text-xxl ">
					{{sptdata.name}}
				</view>
				<view class=" text-lg dis-text">
					{{sptdata.dis}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:{
			sptdata:Object
		}
	}
</script>

<style>
	.classifyitem {
	margin-bottom: 30upx;	
	}
	.classifyitem >uni-view {
		width: 690upx;
		height: 380upx;
		border-radius: 10upx;
	}
	.bg-mask .title-text{
		width: 100%;
		text-align: center;
		color: #fdfeff;
		font-size: 44upx;
		margin-bottom: 20upx;
	}
	.dis-text {
		color: #fcfcfe;
		font-size: 24upx;
		text-align: center;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		padding: 0 60upx;
	}
</style>
