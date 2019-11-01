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
				
				<text class="notice noticecheck" @click="handelNotice">关注</text>
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
				authordata:{},
				noticeobj:{},
				isnotice:false,
				df1:'',
				df2:'',
				usernotice:false
			}
		},
		props:{
			authorname:String,
			zpid:String,
		},
		created(){
			try {
				const value = uni.getStorageSync('userinfo');
				if (value) {
					this.noticeobj.name = value.userinfo.name;
				}
			} catch (e) {
				console.log(e)
			}
			this.noticeobj.zpid=this.zpid
			this.noticeobj.isnotice=this.isnotice
			this.noticeobj.df1=this.df1
			this.noticeobj.df2=this.df2
			var _this=this;
			uni.request({
				url: this.base_url + 'attention/searchnotice',
				method: 'GET',
				data: this.noticeobj,
				success:(res)=> {
					_this.usernotice=res.data.data[0].isnotice
				}
			})
			
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
				}
			})
		},
		methods:{
			handelNotice(){
				this.isnotice=!this.isnotice
				console.log(this.isnotice)
				this.noticeobj.isnotice=this.isnotice
				uni.request({
					url: this.base_url + 'attention/notice',
					method: 'GET',
					data: this.noticeobj,
					success:(res)=> {
						if(this.isnotice){
							uni.showToast({
								title:"关注成功！",
								icon:null
							})
						}else{
							uni.showToast({
								title:"取消关注成功",
								icon:null
							})
						}
					}
				})
				
				
			}
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
