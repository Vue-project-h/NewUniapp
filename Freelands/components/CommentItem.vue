<template>
	<view class="cu-list menu-avatar comment solids-top comment-bgc">
		<view class="cu-item">
			<view class="cu-avatar round head-img" style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png);"></view>
			
			<view class="content">
				<view class="text-grey">莫甘娜</view>
				<view class=" flex justify-between">
					<view class="text-gray text-df date-text">2018年12月4日</view>
					<view>
						<text class="cuIcon-forwardfill margin-sm text-gray"></text>
						<text class="cuIcon-appreciatefill text-gray"></text>
						
					</view>
				</view>
				<view class="text-co text-content text-df">
					凯尔，你被自己的光芒变的盲目。凯尔，你被自己的光芒变的盲目。凯尔，你被自己的光芒变的盲目。
				</view>
				<view class=" padding-sm radius margin-top-sm  text-sm reapet-box">
					<view >
						<view>凯尔</view>
						<view class="flex-sub">妹妹，你在帮他们给黑暗找借口吗?凯尔，你被自己的光芒变的盲目。凯尔，你被自己的光芒变的盲目。</view>
					</view>
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
	.head-img {
		width: 74upx;
		height: 74upx;
	}
	.cu-list.menu-avatar>.cu-item .content>uni-view:first-child{
		color:#424348;
		font-size: 20upx;
	}
	.date-text {
		color: #878283;
		font-size: 20upx;
	}
	.comment-bgc {
		background-color:#fff;
	}
	.reapet-box {
		border:1px solid #8b8687;
		color:#404146;
	}
	.text-co{
		color:#404146;
	}
</style>
