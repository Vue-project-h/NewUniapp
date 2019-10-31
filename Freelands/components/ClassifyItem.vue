<template>
	<view class="classifyitem">
<<<<<<< HEAD
		<view class="bg-img bg-mask flex align-center addwh" style="background-image: url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg');">
			<view class=" text-white">
				<view class=" text-xxl text-alignss">
					钢铁之翼
=======
		<view class="bg-img bg-mask flex align-center cli"
		:style="{background:'url('+imgurl+')'}"
		>
			<view class=" text-white">
				<view class=" text-xxl">
					{{clyname}}
>>>>>>> master
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
<<<<<<< HEAD
	.classifyitem .addwh {
=======
	.classifyitem .cli {
>>>>>>> master
		width: 330upx;
		height: 290upx;
		border-radius: 15upx;
		margin-bottom: 34upx;
	}
<<<<<<< HEAD
	.classifyitem .text-alignss{
		width: 100% !important;
=======
	.bg-mask .text-white{
		width: 100%;
>>>>>>> master
		text-align: center;
		color: #fdfeff;
		font-size: 34upx;
	}
</style>
