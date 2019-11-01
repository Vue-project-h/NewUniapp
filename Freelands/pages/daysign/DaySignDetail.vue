<template>
	<view class="dsinfo">
		<view class="daysign">
			<image :src="data1.imgurl" mode=""></image>
			<view class='ds_day'>
				<text>24</text>
				<view class="ds_day_time">
				<view class="year-m fz-24">
					2019年10月
				</view>
				<view class="class_day  fz-24">
					周四
				</view>
				<view class="nongli  fz-24">
					九月甘六
				</view>
				</view>
			</view>
			
		</view>
		<view class="ds_title">
			<view class="my_content" v-for="(item,index) in data1.content" :key="index">
				{{item}}
			</view>
		</view>
		<view class="author">
			{{data1.author}}
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				data1:{},
			}
		},
		onLoad(option){
			console.log(123)
			let data = JSON.parse(decodeURIComponent(option.data));
			
				 // console.log(this.data1);
				 for(let index in data){
					 this.data1[index]=data[index];
					// console.log(data[index])
				 }
			// this.data1=this.$route.query.data;
			
			
			console.log(this.data1)
		},
		created() {
			// console.log(this.$route.query.data);
			
			// let data = JSON.parse(decodeURIComponent(this.$route.query.data));
			
			// 	 // console.log(this.data1);
			// 	 for(let index in data){
			// 		 this.data1[index]=data[index];
			// 		console.log(data[index])
			// 	 }
			// // this.data1=this.$route.query.data;
			
			// alert(this.data1);
			// console.log(this.data1)
			// uni.request({
			// 	url: 'http://rap2api.taobao.org/app/mock/234629/get/daysign',
			// 	method: 'GET',
			// 	success: res => {
			// 		let arr=res.data.data.map((obj)=>{
			// 			obj.content=obj.content.split('。');
			// 			return obj
			// 		})
			// 		this.data=arr[0]
			// 	}
			// });
		},
		// onLoad: (option) => {
		// 	 let data = JSON.parse(option.data);
		// 	 console.log(this.data1);
		// 	 for(let index in data){
		// 		 // this.data.index=
		// 		console.log(data[index])
		// 	 }
		// 	  // console.log(this.data);
		// 	 // this.data=data;
			
		// }
		
	}
</script>

<style lang="scss">
	.dsinfo{
		width: 100%;
		// padding-top: 88upx;
		position: fixed;
		top: 0;
		bottom: 0;
	}
	.daysign{
		// width: 680upx;
		text-shadow:3px 2px 4px  #6a898e;
		margin: 0 35upx;
		height: 500upx;
		// background: red;
		font-family: '楷体';
		position: relative;
		image{
			width: 100%;
			height: 100%;
			z-index: 1;
			position: absolute;
			top: 0;
			left: 0;
			
		}
		.ds_day{
			padding: 50upx 0 0 35upx;
			display: flex;
			position: relative;
			z-index: 2;
			text{
				font-size: 85upx;
				color: white;
				// font-family: '宋体';
				
				position: relative;
				z-index: 2;
			}
			.ds_day_time{
				display: flex;
				flex-direction: column;
				margin-left: 25upx;
				
				position: relative;
				z-index: 2;
			}
			.fz-24{
				font-size: 28upx;
				color: white;
				margin-bottom: 10upx;
				
				position: relative;
				z-index: 2;
				
			}
		}
		
	}
	.ds_title{
		margin-top: 20upx;
		font-size: 30upx;
		color: #333;
		line-height: 40upx;
		margin-left: 35upx;
		
		position: relative;
		z-index: 2;
	}
	.author{
		font-size: 20upx;
		color: #868081;
		position: absolute;
		right: 50upx;
		bottom: 20upx;
		z-index: 2;
	}
</style>
