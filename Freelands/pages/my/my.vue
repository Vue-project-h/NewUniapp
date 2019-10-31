<template>
	<view>
		<scroll-view scroll-x class="bg-white nav text-center my-nav text-pink">
			<view class="cu-item fl" >
				<text class="cuIcon-notice"></text> 
			</view>
			<view class="fr">
				<navigator url="Sendemail" hover-class="navigator-hover" class="fr">
					<view class="cu-item" >
						<text class="cuIcon-mail"></text> 
					</view>
					</navigator>
				
				<navigator url="Setting" hover-class="navigator-hover" class="fr">
				            <view class="cu-item">
				            	<text class="cuIcon-settings"></text> 
				            </view>   
				                </navigator>
			</view>
		</scroll-view>
		<MyLogin v-if="isShow"></MyLogin>
		<MyInfo v-else></MyInfo>
		
	</view>
</template>

<script>
	import MyLogin from '../../components/Logins.vue'
	import MyInfo from '../../components/MyInfo.vue'
	export default {
		data(){
			return{
				userinfo:{},
				isShow:true,
				TabCur: 0,
				scrollLeft: 0
			}
		},
		
		components:{
			'MyLogin':MyLogin,
			'MyInfo':MyInfo
		},
		onShow() {
			let that=this;
		    this.userinfo = getApp().globalData.userinfo;
			console.log('-----------------------------------------------------------------')
			console.log(this.userinfo.token)
			console.log('-----------------------------------------------------------------')
			if(this.userinfo.token){
				this.isShow=false
			}else{
				// uni.navigateTo({
				//     url: 'Goviews'
				// });
				this.isShow=true
			}
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
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
