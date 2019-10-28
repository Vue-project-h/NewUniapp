<template>
	<view class="">
	<scroll-view class="uni-slidingMenu solid-bottom shadow-warp" scroll-x >
		<view  :class="['slidingMenuList',activeIndex==index?'active':'']" v-for="(item, index) in list" :key="index" @click="getActive(index)" v-cloak>{{ item }}</view>
	</scroll-view>
	<view>
		<swiper @change="handelSlide" :current='activeIndex'>
			<swiper-item>
				<view class="swiper-item">123</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">456</view>
			</swiper-item>
		</swiper>
	</view>
	</view>
</template>

<script>
	// import Navbar from '../../Components/haverster-slidingMenu/haversterSlidingMenu.vue'
	export default {
		data() {
			return {
				list: ['推荐', '探索'],
				activeIndex:"0"
			}
		},
		components:{
			// 'Navbar':Navbar
		},
		methods: {
			getActive(index){
				this.activeIndex=index;
				// this.$emit("changes",this.activeIndex);
				
			},
			handelSlide(detail){
				this.activeIndex=detail.detail.current
				// console.log()
			}
		}
	}
</script>

<style>

	page{
		background-color: #fafafa;
	}
/* 滑动菜单栏的总内容区域 */
.uni-slidingMenu {
	width: 100%;
	white-space: nowrap;
	height: 100rpx;
	background-color: #FFFFFF;
}
/* 循环显示的菜单栏 */
.slidingMenuList {
	height: 100rpx;
	line-height: 100rpx;
	display: inline-block;
	font-size: 24rpx;
	margin-left: 80rpx;
	color:#7d7778;
}
.slidingMenuList:last-child{
	margin-right: 60rpx;
}
/* 点击选中菜单栏时的样式 */
.active {
	color: #414247;
	font-size: 24rpx;
	margin-left: 80rpx;
	font-weight: 600;
	border-bottom: 4rpx solid #000000;
	box-sizing: border-box;
}
swiper-item{
	min-height:50upx ;
	background: red;
}
</style>
