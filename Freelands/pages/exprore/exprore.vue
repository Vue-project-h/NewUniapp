<template>
	<view class="exprore">
		 <view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" :indicator-dots=true :autoplay=true :interval="3000" :circular=true>
						<swiper-item>
							<view class="swiper-item uni-bg-red">A</view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item uni-bg-green">B</view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item uni-bg-blue">C</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
		 </view>
		 <view class="exp-topic">
			 <view class="title ti-more">
			 	专题
				<text class="look-more">更多</text>
			 </view>
		 	<swiper class="card-swiper square-dot" :class="dotStyle?'square-dot':'round-dot'" :circular=true
		 	 interval="5000" duration="500" @change="cardSwiper" indicator-color="#8799a3"
		 	 indicator-active-color="#0081ff">
		 		<swiper-item v-for="(item,index) in swiperList" :key="index" :class="cardCur==index?'cur':''">
		 			<view class="swiper-item">
		 				<image :src="item.url" mode="aspectFill" v-if="item.type=='image'" class="exp-img"></image>
		 				<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
						<view class="img-text">
							《飞地》从刊
						</view>
					</view>
		 		</swiper-item>
		 	</swiper>
		 </view>
		 <view class="classify">
		 	<view class="title">
		 		分类
		 	</view>
			<view class="classify-list">
				<ClassifyItem></ClassifyItem>
				<ClassifyItem></ClassifyItem>
				<ClassifyItem></ClassifyItem>
				<ClassifyItem></ClassifyItem>
				<ClassifyItem></ClassifyItem>
			</view>
		 </view>
		      
		        
	</view>
</template>

<script>
	

import ClassifyItem from '../../components/ClassifyItem.vue'
export default {
	components:{
		ClassifyItem,
		
	},
		data() {
			return {
				cardCur: 0,
				swiperList: [{
					id: 0,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
				}, {
					id: 1,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
				}, {
					id: 2,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
				}, {
					id: 3,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
				}, {
					id: 4,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
				}, {
					id: 5,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
				}, {
					id: 6,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
				}],
				dotStyle: false,
				towerStart: 0,
				direction: ''
			};
		},
		onLoad() {
			this.TowerSwiper('swiperList');
			// 初始化towerSwiper 传已有的数组名即可
		},
		methods: {
			DotStyle(e) {
				this.dotStyle = e.detail.value
			},
			// cardSwiper
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
			// towerSwiper
			// 初始化towerSwiper
			TowerSwiper(name) {
				let list = this[name];
				for (let i = 0; i < list.length; i++) {
					list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
					list[i].mLeft = i - parseInt(list.length / 2)
				}
				this.swiperList = list
			},

			// towerSwiper触摸开始
			TowerStart(e) {
				this.towerStart = e.touches[0].pageX
			},

			// towerSwiper计算方向
			TowerMove(e) {
				this.direction = e.touches[0].pageX - this.towerStart > 0 ? 'right' : 'left'
			},

			// towerSwiper计算滚动
			TowerEnd(e) {
				let direction = this.direction;
				let list = this.swiperList;
				if (direction == 'right') {
					let mLeft = list[0].mLeft;
					let zIndex = list[0].zIndex;
					for (let i = 1; i < this.swiperList.length; i++) {
						this.swiperList[i - 1].mLeft = this.swiperList[i].mLeft
						this.swiperList[i - 1].zIndex = this.swiperList[i].zIndex
					}
					this.swiperList[list.length - 1].mLeft = mLeft;
					this.swiperList[list.length - 1].zIndex = zIndex;
				} else {
					let mLeft = list[list.length - 1].mLeft;
					let zIndex = list[list.length - 1].zIndex;
					for (let i = this.swiperList.length - 1; i > 0; i--) {
						this.swiperList[i].mLeft = this.swiperList[i - 1].mLeft
						this.swiperList[i].zIndex = this.swiperList[i - 1].zIndex
					}
					this.swiperList[0].mLeft = mLeft;
					this.swiperList[0].zIndex = zIndex;
				}
				this.direction = ""
				this.swiperList = this.swiperList
			},
		}
	}
</script>

<style>
	.exprore {
		padding: 0 30upx;
	}
	.title{
		font-size: 38upx;
		color: #030303;
		margin: 30upx 0;
	}
	.classify-list {
		display: flex;
		
		flex-wrap: wrap;
		justify-content: space-between;
	}
	
	.card-swiper uni-swiper-item {
	    width: 80% !important;
	    padding:0px;
		height:256upx
	}
	.card-swiper {
	    height: 300upx !important;
	}
	.ti-more {
		display: flex;
		justify-content: space-between;
		pos-bottom: 20upx;
	}
	.look-more {
		font-size: 30upx;
		color: #4899d7;
		
	}
	.img-text {
		color: #2c2b32;
		font-size: 30upx;
	}
	.screen-swiper uni-image, .screen-swiper uni-video, .swiper-item uni-image, .swiper-item uni-video {
	    width: 100%;
	    display: block;
	    height: 250upx;
	    margin: 0;
	    border-radius: 5px;
	    pointer-events: none;
	}
</style>
