<template>
	<view class="daysign" @click="handelDaySign">
		<image :src="data.imgurl" mode=""></image>
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
		<view class="ds_title">
			<view class="my_content" v-for="(item,index) in data.content" :key="index">
				{{item}}
			</view>
		</view>
		<view class="author">
			{{data.author}}
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				data:{},
				isAll:false
			}
		},
		computed:{
			data1(){
				
				return this.dsitem?this.dsitem:this.data;
			}
		},
		props:{
			dsitem:Object
		},
		mounted() {
			
			
			if(this.data1.author){
				console.log("dsitem")
				this.data=this.dsitem;
			}else{
				uni.request({
					url: this.base_url+"daysign/list",
					method: 'GET',
					success: res => {
						let arr=res.data.data.map((obj)=>{
							obj.content=obj.content.split('。');
							return obj
						})
						this.data=arr[0]
					}
				});
			// }
			
		}
		},
		methods:{
			handelDaySign(){
				// console.log("DaySignDetail")
				// console.log(this.data1)
				
				 var navData = encodeURIComponent(JSON.stringify(this.data));
				uni.navigateTo({
					url:"/pages/daysign/DaySignDetail?data="+navData
				})
			},
		}
	}
</script>

<style lang="scss">
	.daysign{
		   box-shadow: rgba(26, 26, 26, 0.2) 0px 0px 5px 2px;
		// width: 680upx;
		
		text-shadow:3px 2px 4px  #6a898e;
		margin: 0 35upx;
		height: 500upx;
		// background: red;
		font-family: '楷体';
		position: relative;
		margin-bottom: 30upx;
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
		.ds_title{
			margin-top: 50upx;
			font-size: 24upx;
			color: white;
			line-height: 40upx;
			margin-left: 35upx;
			
			position: relative;
			z-index: 2;
		}
		.author{
			font-size: 18upx;
			color: white;
			position: absolute;
			right: 50upx;
			bottom: 20upx;
			
			z-index: 2;
		}
	}
</style>
