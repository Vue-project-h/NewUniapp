<template>
	<view class="">
		<view class="my_day padding">
			<view class="m_d text-gray">
				10月25日
			</view>
			<view class="my_week  text-sl">
				星期五
			</view>
		</view>
		<view class="cu-card case" >
			
			<view class="cu-item shadow" @click="handelClick(detaildata)">
				<view class="image my_add_boder">
					<image :src="detaildata.imgurl"
					 mode="widthFix"></image>
					<view class="my_pos cuIcon-like text-white text-bold text-xl"></view>
				</view>
				
				<view class="cu-list menu-avatar">
					<view class="text-black text-left padding-sm text-lg text-bold text-cut">
						{{detaildata.title}}
					</view>
					<view class=" flex padding-sm">
						<!-- <view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view> -->
						<view class="flex-sub flex names">
							<view class="text-grey">{{detaildata.authorname}} {{detaildata.clyname}}</view>
							<view class="text-gray text-sm ">
								<view class="text-gray text-sm">
									<text class="cuIcon-attentionfill margin-lr-xs"></text> 10
									<!-- <text class="cuIcon-appreciatefill margin-lr-xs"></text> 20 -->
									<text class="cuIcon-messagefill margin-lr-xs"></text> 30
								</view>
								
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			detaildata:Object
		},
		created() {
			let times=new Date()
			console.log(times)
		},
		methods:{
			handelClick(val){
				console.log(this.detaildata)
				var detaildata = JSON.stringify(this.detaildata);
				// // this.$route.query
				// // router.push({ path: 'register', query: { plan: 'private' }})
				// // this.$router.push({path:'/pages/Detail/Detail',query:this.detaildata});
				uni.navigateTo({
					url:"/pages/Detail/Detail?detaildata="+detaildata
				})
				// uni.request({
				// 	url:this.base_url+"detaillist",
				// 	method:'get',
					
				// 	success: (resdetail) => {
						
				// 		let arr=resdetail.data.data;
				// 		// console.log(arr);
				// 		arr.forEach((val1)=>{
				// 			// console.log(val1.topicname);
				// 			console.log(val1._id);
				// 			// console.log(val.topicname===val.name)
				// 			if(val1._id===val._id){
				// 				console.log(val1)
				// 				var detaildata = JSON.stringify(val1);
				// 				uni.navigateTo({
				// 					url:"/pages/Detail/Detail?detaildata="+detaildata
				// 				})
				// 			}
				// 		})
						
				// 	}
				// })
			}
		}
	}
</script>

<style>
	.names{
		flex-wrap: nowrap;
		align-items: center;
		justify-content: space-between;
	}
	.my_pos{
		position: absolute;
		top: 20upx;
		right: 20upx;
	}
	.my_add_boder image{
		border-radius: 15upx;
	}
</style>
