<template>
	<view class="">
		
		<view class="login-content">
			<view class="My-login">
				<image src="../../static/image/login_03.jpg" mode=""></image>
			</view>
			<view class="login-title">
				登录后进行其他操作
			</view>
			
			<navigator url="../login/login" hover-class="navigator-hover">
			    <view class="cu-btn round lg  bg-black btn-addpd shadow my-btns">
			        登录
			    </view>
			</navigator>
		</view>
		
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				TabCur: 0,
				scrollLeft: 0
			};
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			
			// handeljumpSetting(){}
		}
	}
</script>

<style>
		.my-nav{
			position: relative;
			top:var(--status-bar-height);
			background-color:transparent;
			/* color: white; */
			font-weight: 900;
			font-size: 50upx;
		}
	.login-content{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-top: 200upx;
		/* padding: 300upx; */
		/* height: 100%; */
	}
	.My-login image{
		width: 140upx;
		height: 130upx;
	}
	.login-title{
		font-size: 32upx;
		letter-spacing: 5upx;
		margin-top: 100upx;
		margin-bottom: 85upx;
		color: #2f2f2f;
		font-size: 32upx;
		font-weight: 700;
	}
	.login-btn{
		background: #404146;
		color: white;
		width: 250upx;
	}
	.btn-addpd{
		padding:  10upx 20upx;
	}
	.my-btns{
		width: 300upx;
		height: 80upx;
	}
</style>
