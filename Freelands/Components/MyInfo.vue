<template>
	<view class="bg-gray">
		<view class="my_imgbg bg-mask">
			<image src="../../static/image/userbgimg.jpg" mode="aspectFill"></image>
			<view class="usertitle">
				<view class="user-icon flex align-center">
					<image src="../../static/image/usericon.jpg" mode=""></image>
					<view class="user-name">
						钢铁侠
					</view>
				</view>
				<view class="user-weite flex margin-top-xl">
					<view class="my_wr">
						这个人很懒还有没签名
					</view>
					<view class="text-gray cuIcon-writefill my_wr_icon" >
						
					</view>
				</view>
				
			</view>
			<view class="howread margin-top-xl text-white text-sm">
				已读一篇文章
			</view>
		</view>
		<view class="my_list margin-top-sm">
			<view class="my_list1">
				<view class="cu-list menu" :class="[menuBorder?'sm-border':'',menuCard?'card-menu margin-top':'']">
					<view class="cu-item arrow">
						<view class="content">
							<text class=" text-black"></text>
							<text class="text-black">钱包</text>
						</view>
					</view>
					<view class="cu-item arrow">
						<view class="content">
							<text class=" text-black"></text>
							<text class="text-black">已购专栏</text>
						</view>
					</view>
				</view>
			</view>
			<view class="my_list2 margin-top-sm">
				<view class="cu-list menu" :class="[menuBorder?'sm-border':'',menuCard?'card-menu margin-top':'']">
					<view class="cu-item arrow">
						<view class="content">
							<text class=" text-black"></text>
							<text class="text-black">我的创作</text>
						</view>
					</view>
					<view class="cu-item arrow">
						<view class="content">
							<text class=" text-black"></text>
							<text class="text-black">我的收藏</text>
						</view>
					</view>
					<view class="cu-item arrow">
						<view class="content">
							<text class=" text-black"></text>
							<text class="text-black">我的投稿</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="cu-bar bg-white margin-top padding flex flex-direction">
			<!-- <view class="action"> -->
				<button style="width: 100%;" class="cu-btn bg-black  lg text-white shadow" @tap="showModal" data-target="DialogModal1">退出登录</button>
			<!-- </view> -->
		</view>
		<view class="cu-modal" :class="modalName=='DialogModal1'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content"></view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl">
					是否退出登录
				</view>
				<view class="cu-bar bg-white justify-end">
					<view class="action">
						<button class="cu-btn line-green text-green" @tap="hideModal">取消</button>
						<button class="cu-btn bg-green margin-left" @tap="hideModal(),quitlogin()" >确定</button>
		
					</view>
				</view>
			</view>
		</view>
		<view class="cu-modal drawer-modal justify-end" :class="modalName=='DrawerModalR'?'show':''" @tap="hideModal">
			<view class="cu-dialog basis-lg" @tap.stop="" :style="[{top:CustomBar+'px',height:'calc(100vh - ' + CustomBar + 'px)'}]">
				<view class="cu-list menu text-left">
					<view class="cu-item arrow" v-for="(item,index) in 5" :key="index">
						<view class="content">
							<view>Item {{index +1}}</view>
						</view>
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
				CustomBar: this.CustomBar,
				modalName: null,
				menuBorder: false,
				menuCard: false,
				radio: 'radio1',
				checkbox: [{
					value: 0,
					name: '10元',
					checked: false,
					hot: false,
				}, {
					value: 1,
					name: '20元',
					checked: true,
					hot: false,
				}, {
					value: 2,
					name: '30元',
					checked: true,
					hot: true,
				}, {
					value: 3,
					name: '60元',
					checked: false,
					hot: true,
				}, {
					value: 4,
					name: '80元',
					checked: false,
					hot: false,
				}, {
					value: 5,
					name: '100元',
					checked: false,
					hot: false,
				}]
			}
		},
		components:{
			// 'Navbar':Navbar
		},
		methods: {
			quitlogin(){
				console.log('tuichu')
				uni.removeStorage({
				    key: 'userinfo',
				    success: function (res) {
				        console.log('success');
						getApp().globalData.userinfo='';
						uni.reLaunch({
						    url: '../index/index'
						});
				    }
				});
			},
			showModal(e) {
				
				this.modalName = e.currentTarget.dataset.target
				
			},
			hideModal(e) {
				this.modalName = null
			},
			RadioChange(e) {
				this.radio = e.detail.value
			},
			ChooseCheckbox(e) {
				let items = this.checkbox;
				let values = e.currentTarget.dataset.value;
				for (let i = 0, lenI = items.length; i < lenI; ++i) {
					if (items[i].value == values) {
						items[i].checked = !items[i].checked;
						break
					}
				}
			}
		}
	}
</script>

<style lang="scss">
.my_imgbg{
	position: relative;
	image{
		width: 100%;
		height: 570upx;
	}
	.usertitle{
		position: absolute;
		top: 30%;
		left: 32upx;
		.user-icon{
			.user-name{
				font-size: 32upx;
				font-weight: 600;
				color: white;
				margin-left: 40upx;
			}
			image{
				width: 140upx;
				height: 140upx;
				border-radius: 50%;
			}
		}
		.user-weite{
			color: white;
			.my_wr{
				font-size: 24upx;
			}
			.my_wr_icon{
				margin-left: 10upx;
			}
		}
	}
	.howread{
		position: absolute;
		bottom: 40upx;
		left: 32upx;
	}
}
button .cu-tag {
		position: absolute;
		top: 8upx;
		right: 8upx;
	}
	.action{
		button{
			width: 100% !important;
		}
	}
</style>
