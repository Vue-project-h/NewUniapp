<template>
	<view class="foucse">
			<view class="fc-content">
			    <view class="cu-avatar round head-img1" style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png);"></view>
				<view class="text-grey a-name1">莫甘娜</view>
			</view>
			
			<text class="nownotice">正在关注</text>
		
	</view>
</template>

<script>
	export default{
		
	}
</script>

<style>
	.foucse{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.fc-content{
		display: flex;
		align-items: center;
	}
	.nownotice{
		padding: 20upx 30upx;
		font-size: 22upx;
		font-weight: 500;
		color: #fff;
		background: #404146;
		border-radius: 10upx;
	}
	.head-img1{
		width: 125upx;
		height: 125upx;
		border-radius: 50%;
		border: 1px sollid #353535;
	}
	.a-name1{
		margin-left: 32upx;
		font-size: 20upx;
		color: #404146;
	}
</style>
