<template>
	<view class="">
		
		<view class="cu-card case"  v-for="(item,index) in mtopic" :key="index">
			
			<view class="cu-item shadow" @click="handelClick(item)">
				<view class="image my_add_boder">
					<image :src="item.imgurl"
					 mode="widthFix"></image>
					<!-- <view class="my_pos cuIcon-like text-white text-bold text-xl"></view> -->
				</view>
				
				<view class="cu-list menu-avatar">
					<view class="text-black text-left padding-sm text-lg text-bold text-cut">
						{{item.name}}
					</view>
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				mtopic:[]
			}
		},
		
		created() {
			
			uni.request({
				url:this.base_url+"topic/list",
				method:'get',
				
				success: (resdetail) => {
					
					
					this.mtopic=resdetail.data.data;
					
					// console.log(this.mtopic);
					// 设置页面元素高度，在大量数据加载完成后
					
				}
			})
		},
		methods:{
			handelClick(val){
				
				// console.log("nnnnn")
				// console.log(val.name)
				uni.request({
					url:this.base_url+"detaillist",
					method:'get',
					
					success: (resdetail) => {
						
						let arr=resdetail.data.data;
						// console.log(arr);
						arr.forEach((val1)=>{
							// console.log(val1.topicname);
							// console.log(v);
							// console.log(val.topicname===val.name)
							if(val1.topicname===val.name){
								// console.log("mkhih")
								var detaildata = JSON.stringify(val1);
								uni.navigateTo({
									url:"/pages/Detail/Detail?detaildata="+detaildata
								})
							}
						})
						
					}
				})
				
				
				// this.$route.query
				// router.push({ path: 'register', query: { plan: 'private' }})
				// this.$router.push({path:'/pages/Detail/Detail',query:this.detaildata});
				
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
