<template>
	<view class="classifyitem">
		<view class="bg-img bg-mask flex align-center cli"
		:style="{background:'url('+imgurl+')'}"
		>
			<view class=" text-white">
				<view class=" text-xxl">
					{{clyname}}
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
			clyname:String,
			imgurl:String
		}
	}
</script>

<style>
	.classifyitem .cli {
		width: 330upx;
		height: 290upx;
		border-radius: 15upx;
		margin-bottom: 34upx;
	}
	.bg-mask .text-white{
		width: 100%;
		text-align: center;
		color: #fdfeff;
		font-size: 34upx;
	}
</style>
