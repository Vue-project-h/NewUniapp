<template>
	<view>
		<view class="creater-content padding">
			<view class="content-left">
				<view class="content-title">
					糖诗
				</view>
				<view class="content-write">
					“烹羊宰牛且为乐 会须一饮三百杯” 开始琢磨起，诗要几分甜
				</view>
				<view class="coontent-userinfo">
					<view class="user-icon">
						<image src="../../static/image/fz_logo_03.jpg" mode="widthFix"></image>
					</view>
					<view class="content-info-two">
						<view class="userinfo-name">
							西蓝
						</view>
						<view class="userinfo-daytime">
							07月27日
						</view>
					</view>
				</view>
			</view>
			<view class="content-right">
				<image src="../../static/image/suger_03.jpg" mode="widthFix"></image>
			</view>
		</view>
		
			<view class="creater-content padding">
				<view class="content-left">
					<view class="content-title">
						糖诗
					</view>
					<view class="content-write">
						“烹羊宰牛且为乐 会须一饮三百杯” 开始琢磨起，诗要几分甜
					</view>
					<view class="coontent-userinfo">
						<view class="user-icon">
							<image src="../../static/image/fz_logo_03.jpg" mode="widthFix"></image>
						</view>
						<view class="content-info-two">
							<view class="userinfo-name">
								西蓝
							</view>
							<view class="userinfo-daytime">
								07月27日
							</view>
						</view>
					</view>
				</view>
				<view class="content-right">
					<image src="../../static/image/suger_03.jpg" mode="widthFix"></image>
				</view>
			</view>
			
				<view class="creater-content padding">
					<view class="content-left">
						<view class="content-title">
							糖诗
						</view>
						<view class="content-write">
							“烹羊宰牛且为乐 会须一饮三百杯” 开始琢磨起，诗要几分甜
						</view>
						<view class="coontent-userinfo">
							<view class="user-icon">
								<image src="../../static/image/fz_logo_03.jpg" mode="widthFix"></image>
							</view>
							<view class="content-info-two">
								<view class="userinfo-name">
									西蓝
								</view>
								<view class="userinfo-daytime">
									07月27日
								</view>
							</view>
						</view>
					</view>
					<view class="content-right">
						<image src="../../static/image/suger_03.jpg" mode="widthFix"></image>
					</view>
				</view>
				
					<view class="creater-content padding">
						<view class="content-left">
							<view class="content-title">
								糖诗
							</view>
							<view class="content-write">
								“烹羊宰牛且为乐 会须一饮三百杯” 开始琢磨起，诗要几分甜
							</view>
							<view class="coontent-userinfo">
								<view class="user-icon">
									<image src="../../static/image/fz_logo_03.jpg" mode="widthFix"></image>
								</view>
								<view class="content-info-two">
									<view class="userinfo-name">
										西蓝
									</view>
									<view class="userinfo-daytime">
										07月27日
									</view>
								</view>
							</view>
						</view>
						<view class="content-right">
							<image src="../../static/image/suger_03.jpg" mode="widthFix"></image>
						</view>
					</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		onNavigationBarButtonTap(){
			uni.navigateTo({
			    url: '../edit/edit'
			});
			
		}
	}
</script>

<style>
.creater-content{
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #dfdfdf;
}
.user-icon{
	width: 65upx;
	height: 65upx;
}
.content-right{
	width: 185upx;
	height: 185upx;
}
.content-title{
	font-size: 30upx;
	font-weight: 800;
	padding-bottom: 20upx;
}
.content-write{
	padding-bottom: 30upx;
	color: #858080;
	line-height: 40upx;
	font-size: 26upx;
}

.coontent-userinfo{
	display: flex;
	align-items: center;
	color: #2d2e34;
}
/* .content-info-two{
	display: flex;
} */
.user-icon{
	margin-right: 15upx;
}
.userinfo-daytime{
	color: #8b8687;
}
</style>
