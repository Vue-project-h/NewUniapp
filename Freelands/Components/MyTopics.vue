<template>
	<view class="padding" >
			<view class="topic-topbar flex">
				<text class='text-black text-bold text-xxl '>话题</text>
				<text class= 'text-blue' @click="handelmtopic">更多</text>
			</view>
			<view class="" @click="handelClick(topiclist)">
				<view class="cuIcon-new text-gray text-sl padding-top padding-bottom"></view>
				<view class="items text-black text-xxl">
					{{topiclist.name}}
				</view>
				<view class="my_talk text-gray padding-top-sm">
					84个讨论
				</view>
			</view>
			
		</view>
</template>

<script>
	export default{
		data(){
			return{
				topiclist:{}
			}
		},
		methods:{
			handelmtopic(){
				uni.navigateTo({
					url:"/pages/moretopic/mtopic"
				})
			},
			handelClick(val){
				// console.log(val)
				
				
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
			}
		},
		mounted(){
			uni.request({
				url:this.base_url+"topic/list",
				method:'get',
				
				success: (resdetail) => {
					
					
					this.topiclist=resdetail.data.data[0];
					
					// console.log(this.topiclist);
					// 设置页面元素高度，在大量数据加载完成后
					
				}
			})
		},
		
	}
</script>

<style>
	.topic-topbar{
		justify-content: space-between;
	}
</style>
