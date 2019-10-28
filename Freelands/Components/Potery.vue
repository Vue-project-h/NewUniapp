<template>
	<view class="">
		<view class="my_day padding">
			<view class="m_d text-gray">
				10月25日
			</view>
			<view class="my_week  text-sl">
				星期五
			</view>
		</view>
		<view class="cu-card case" >
			<view class="cu-item shadow">
				<view class="image my_add_boder">
					<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"
					 mode="widthFix"></image>
					<view class="my_pos cuIcon-like text-white text-bold text-xl"></view>
				</view>
				<view class="cu-list menu-avatar">
					<view class="text-black text-left padding-sm text-lg text-bold text-cut">
						我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。
					</view>
					<view class=" flex padding-sm">
						<!-- <view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view> -->
						<view class="flex-sub flex names">
							<view class="text-grey">正义天使 凯尔</view>
							<view class="text-gray text-sm ">
								<view class="text-gray text-sm">
									<text class="cuIcon-attentionfill margin-lr-xs"></text> 10
									<!-- <text class="cuIcon-appreciatefill margin-lr-xs"></text> 20 -->
									<text class="cuIcon-messagefill margin-lr-xs"></text> 30
								</view>
								
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		created() {
			let times=new Date()
			console.log(times)
		}
	}
</script>

<style>
	.names{
		flex-wrap: nowrap;
		align-items: center;
		justify-content: space-between;
	}
	.my_pos{
		position: absolute;
		top: 20upx;
		right: 20upx;
	}
	.my_add_boder image{
		border-radius: 15upx;
	}
</style>
