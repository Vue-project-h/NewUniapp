<template>
	<view class="author">
		<view class="title">
			{{authordata.title}}
		</view>
		
			<view class="cu-item">
				<view class="cu-avatar round head-img" 
				:style="{background:'url('+authordata.imgurl+')'}"></view>
				
				<view class="content">
					<view class="text-grey a-name">{{authorname}}</view>
					<view class=" flex justify-between">
						<view class="text-gray text-df date-text">2018年12月4日</view>	
					</view>
				</view>
				
				<text class="notice noticecheck">关注</text>
			</view>
			<view class="a-img shadow">
				<image :src="authordata.imgurl"></image>
			</view>
			<view class="a-dis">
				{{authordata.dis}}
			</view>
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				authordata:{}
			}
		},
		props:{
			authorname:String
		},
		created(){
			console.log(this.authorname)
			uni.request({
				url:this.base_url+"author/list",
				method:'get',
				
				success: (resdetail) => {
					
					
					let authorlist=resdetail.data.data;
					
					
					authorlist.forEach((val)=>{
						if(val.name==this.authorname){
							this.authordata=val;
						}
					})
					console.log(this.authordata);
					// this.authordata=
				}
			})
		}
	}
</script>

<style>
	.author{
		padding: 30upx;
	}
	.title{
		font-size: 48upx;
		color: #000;
		font-weight: 700;
		font-family: "宋体";
		margin: 50upx 0;
	}
	.cu-item {
		display: flex;
	}
	.head-img {
		margin-right: 20upx;
		width: 70upx;
		height: 70upx;
	}
	.content {
		font-size: 22upx;
	}
	.a-img {
		width: 100%;	
		text-align: center;
		border-bottom: 1px solid #eaeaea;
		
	}
	.a-img image {
		margin-top: 130upx;
		width: 325upx;
		height: 325upx;
		vertical-align: middle;
		margin-bottom: 1upx;
	}
	.a-dis {
		margin-top: 60upx;
		color: #a3a3a3;
		font-size: 24upx;
		line-height: 30upx;
	}
	.notice {
		position: absolute;
		right: 30upx;
		line-height: 30upx;
		padding: 6upx;
		border: 1px solid #1e1e1e;
		border-radius: 21upx;
	}
	.noticecheck {
		position: absolute;
		right: 30upx;
		line-height: 30upx;
		padding: 6upx;
		border: 1px solid #1e1e1e;
		border-radius: 21upx;
		color: gray;
		background: #1e1e1e;
	}
</style>
