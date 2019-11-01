<template>
	<view class="">
		<view class="preventCollapse">
			
		</view>
	<scroll-view class="uni-slidingMenu solid-bottom addSD  " scroll-x >
		<view  class="fontSizeSet " :class="['slidingMenuList',activeIndex==index?'active':'']" v-for="(item, index) in list" :key="index" @click="getActive(index)" v-cloak>{{ item }}</view>
	</scroll-view>
	<view class="index-content ">
		<swiper @change="handelSlide" :current='activeIndex'   :style="{height:swiperHeight+'px'}">
			<swiper-item>
				<view class="swiper-item  list">
					<view class="content">
						<view class="text-area padding-top shadow-blur ta">
							<DaySign></DaySign>
							<text class="more-daysign cuIcon-calendar" @click="handelMoreDaySign">
								
							</text>
						</view>
						<!-- box-shadow: 3px 3px 4px rgba(26, 26, 26, 0.2); -->
						<!-- box-shadow:0px 10px 5px #000; -->
						<view class="item-list">
							<view class="my_day padding">
								<view class="m_d text-gray">
									10月25日
								</view>
								<view class="my_week  text-sl">
									星期五
								</view>
							</view>
							<Potery v-for="(item,index) in detaillist" :key="index" :detaildata="item"></Potery>
						</view>
						<view class="more">
							<Topics></Topics>
						</view>
					</view>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item list1">
					<view class="exprore">
						 <view class="uni-padding-wrap">
							<view class="page-section swiper">
								<view class="page-section-spacing">
									<swiper class="swiper" :indicator-dots=true :autoplay=true :interval="3000" :circular=true>
										<swiper-item >
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
								<text class="look-more" @click="handelMoreTopic">更多</text>
							 </view>
						 	<swiper class="card-swiper"  :circular=true 
						 	 interval="5000" duration="500" @change="cardSwiper" indicator-color="#8799a3"
						 	 indicator-active-color="#0081ff">
						 		<swiper-item v-for="(item,index) in Myspecial" :key="index" :class="cardCur==index?'cur':''" @click="handelClickMore(item)">
						 			<view class="swiper-item">
						 				<image :src="item.imgurl" mode="aspectFill" v-if="item.ispro==true" class="exp-img"></image>
						 				<view class="img-text">
											{{item.dis}}
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
								
								<ClassifyItem v-for="(item,index) in classifylist" :key="index" :clyname="item.clyname" :imgurl="item.imgurl"></ClassifyItem>
								
							</view>
						 </view>
						      
						        
					</view>
				</view>
			</swiper-item>
		</swiper>
	</view>
	</view>
</template>

<script>
	import DaySign from '../../components/DaySign.vue'
	import Potery from '../../components/Potery.vue'
	import Topics from '../../components/MyTopics.vue'
	import ClassifyItem from '../../components/ClassifyItem.vue'
	export default {
		data() {
			return {
				// swiper自适应高度
				 listHeight:0,  //内部的高度
				 swiperHeight:0,  //外部的高度

				title: 'Hello',
				list: ['推荐', '探索'],
				activeIndex:"0",
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
				direction: '',
				detaillist:[],
				classifylist:[],
				Myspecial:[],
			}
		},
		components:{
			'DaySign':DaySign,
			'Potery':Potery,
			'Topics':Topics,
			'ClassifyItem':ClassifyItem,
		},
		onLoad() {
			this.TowerSwiper('swiperList');
			// 初始化towerSwiper 传已有的数组名即可
			
		},
		onShow() {
			let attr=getApp().globalData.userinfo;
			console.log('***')
			console.log(attr)
			console.log('***')
			let _this = this;
			
			
			uni.getStorage({
			    key: 'token',
			    success: (res)=> {
			        
						uni.request({
							url:this.base_url+"detaillisttoken",
							method:'get',
							data:{
								'token':res.data
							},
							success: (res1) => {
								// console.log(res1.data.data)
								
							}
						})
					
			    }
			});
			
			
			uni.request({
				url:this.base_url+"classfiylist",
				method:'get',
				
				success: (resclassify) => {
					
					this.classifylist=resclassify.data.data
					// console.log(this.classifylist)
				}
			})
			
			uni.request({
				url:this.base_url+"detaillist",
				method:'get',
				
				success: (resdetail) => {
					
					
					this.detaillist=resdetail.data.data;
					
					// console.log(this.detaillist);
					// 设置页面元素高度，在大量数据加载完成后
					setTimeout(function(){
						let list = ".list";
						_this.getlistHeight(list);
					},100) 
				}
			})
			
			
			
			uni.request({
				url:this.base_url+"speciltopic/list",
				method:'get',
				success: (res) => {
					
					this.Myspecial=res.data.data
				}
			})
			
			
		},

		methods: {
			handelClickMore(item){
				console.log(item.name)
				// uni.request({
				// 	url:this.base_url+"speciltopic/list",
				// 	method:'get',
					
				// 	success: (res1) => {
				// 		let myname=res1.data.data
				// 		console.log(myname)
				// 	}
				// })
				uni.navigateTo({
					url:`../LookMores/LookMores?name=`+item.name
				})
			},
			handelMoreDaySign(){
				uni.navigateTo({
					url:"/pages/daysign/daysign"
				})
			},
			// handelDaySign(){
			// 	console.log("DaySignDetail")
			// 	uni.navigateTo({
			// 		url:"/pages/daysign/DaySignDetail"
			// 	})
			// },
			// swiper自适应高度
			getlistHeight(list){
					let _this = this
					let info = uni.createSelectorQuery().select(list);
					// console.log(info)
					info.boundingClientRect(function(data) {
						// console.log(111)
						// console.log(data)  // 获取元素的各种参数
						 _this.listHeight = data.height ; // 获取元素高度
						_this.getHeight();
					}).exec();
				},
				getHeight(){
					let _this = this;
					_this.swiperHeight = _this.listHeight;
					return _this.swiperHeight;
				},
			
			getActive(index){
				this.activeIndex=index;
				// this.$emit("changes",this.activeIndex);
				
			},
			handelSlide(detail){
				// console.log(detail)
				this.activeIndex=detail.detail.current;
				
				  let _this = this;
				  		// 不同的tab不同的高度赋不同的值
						// console.log(detail.target.current)
				  		if(detail.target.current==0){
				  			let list = ".list";
				  			_this.getlistHeight(list);
				  		}else if(detail.target.current==1){
				  			let list = ".list1";
				  			_this.getlistHeight(list);
				  		}
				 
				// console.log()
			},
			handelMoreTopic(){
				uni.navigateTo({
					url:"/pages/moretopic/moretopic"
				})
			},
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
	
	.fontSizeSet{
		font-size: 30upx !important;
	}
	.preventCollapse{
		height: var(--status-bar-height);
	}
	.ta {
		position: relative;
	}
	.more-daysign{
		position: absolute;
		right: 54upx;
		top: 50upx;
		z-index: 2;
		font-size: 40upx;
	}
	.content{
		background: white;
		padding-bottom:200upx ;
	}
	.more{
		/* background: red; */
		height: 100upx;
	}
	
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
	    width: 650upx !important;
	    padding:0px;
		height:370upx
	}
	.card-swiper {
	    height: 300upx !important;
	}
	.ti-more {
		display: flex;
		justify-content: space-between;
		padding-bottom: 20upx;
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
	    width: 85%;
	    display: block;
	    height: 250upx;
	    margin: 0;
	    border-radius: 5px;
	    pointer-events: none;
	}
	/* .card-swiper uni-swiper-item {
		padding: 0;
	} */
</style>
