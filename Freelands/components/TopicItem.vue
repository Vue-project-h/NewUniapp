<template>
	<view class="classifyitem">
		<view class="bg-img bg-mask flex align-center" style="background-image: url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg');">
			<view class=" text-white">
				<view class=" text-xxl title-text">
					《飞地》从刊
				</view>
				<view class=" text-lg dis-text">
					《飞地》从刊创办于2012年春季，以选题策划的方式专辑出版，致力于当代新诗的深度观察以选题策划的方式专辑出版，致力于当代新诗的深度观察
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
