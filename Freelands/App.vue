<script>
	import Vue from 'vue'
	
	export default {
		globalData:{
			userinfo:{},
		},
		created() {
			// #ifdef APP-PLUS
			plus.navigator.closeSplashscreen(); 
			// #endif 
		},
		onLaunch: function() {
			let _this=this;
			try {
			   const myinfo = uni.getStorageSync('userinfo');
			    if (myinfo) {
			        _this.$options.globalData.userinfo = myinfo.userinfo;
			    }
			} catch (e) {
			    console.log(e)
			}
			// let userinfo = uni.getStorage({ //【2】在应用初始化的时候，从本地缓存取出用户信息
			//             key:'userinfo',
			//             complete: (res) => {
			// 				console.log(res)
			//                 if(res.data){
			//                     //【3】可以通过 this.$options.globalData 读写全局数据对象
			//                     this.$options.globalData.userinfo = res.data.userinfo //【4】将用户信息存储至globalData
			//                 }
			//             }
			//         })
			console.log('App Launch')
			uni.getSystemInfo({
				success: function(e) {
					// #ifndef MP
					Vue.prototype.StatusBar = e.statusBarHeight;
					if (e.platform == 'android') {
						Vue.prototype.CustomBar = e.statusBarHeight + 50;
					} else {
						Vue.prototype.CustomBar = e.statusBarHeight + 45;
					};
					// #endif
		
					// #ifdef MP-WEIXIN
					Vue.prototype.StatusBar = e.statusBarHeight;
					let custom = wx.getMenuButtonBoundingClientRect();
					Vue.prototype.Custom = custom;
					Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
					// #endif		
		
					// #ifdef MP-ALIPAY
					Vue.prototype.StatusBar = e.statusBarHeight;
					Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
					// #endif
				}
			})
		},
		
		onShow: function() {
			console.log('App 开启')
		},
		onHide: function() {
			console.log('App 关闭')
		}
	}
</script>

<style >

	body{
		background: #FFFFFF !important;
	}
	
</style>
