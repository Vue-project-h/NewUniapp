<template>
	<view class="detail">
		<image class="detail-img-fixd" :src="detaildata.imgurl"></image>
		
		<view class="d-content">
		</view>
		
		<view class="bg-white">
			<DetailAuthor :zpid="detaildata._id" :authorname="detaildata.authorname"></DetailAuthor>
			<ExproreText :text="detaildata.content" :title="detaildata.title"></ExproreText>
			<DetailFooter :foot="detaildata.textfoot"></DetailFooter>
			<!-- <PostComment ></PostComment> -->
			<view class="d-comment">
				<view class="co-title">
					最新评论
				</view>
				<view class="commentlist">
					<CommentItem :comeninfo="detaildata._id"></CommentItem>
				</view>
			</view>
		</view>
		
		
		
			
		
	</view>
</template>

<script>
	import DetailAuthor from '../../components/DetailAuthor.vue'
	import ExproreText from '../../components/ExproreText.vue'
	import DetailFooter from '../../components/DetailFooter.vue'
	// import PostComment from '../../components/PostComment.vue'
	import CommentItem from '../../components/CommentItem.vue'
	export default {
		data(){
			return {
				detaildata:{},
			}
		},
		components:{
			DetailAuthor,
			DetailFooter,
			// PostComment,
			ExproreText,
			CommentItem
		},
		
		created(){
			let data = JSON.parse(this.$route.query.detaildata);
			// let data = this.$route.query;
			console.log(data);
			for(let index in data){
				 this.detaildata[index]=data[index];
			}
			// console.log(this.detaildata)
		}
	}
</script>

<style>
	.detail{
		background-color: #fff;
		padding-bottom: 100upx;
	}
	.detail-img{
		width: 100%;
		height: 612upx;
	}
	.detail .detail-img-fixd {
		height: 612upx;
		position:fixed;
		top: 0;
		width: 100%;	
	}
	.d-content{
		width: 100%;
		height: 500upx;
	}
	.bg-white {
		background: #fff;
		position: relative;
		transition: all 0.2s linear;
	}
	.d-comment {
		border-top: 1px solid #e7e6e9;
		padding: 0 30upx;
	}
	.co-title {
		background-color: #fff;
		font-size: 30upx;
		color: #000;
		padding: 58upx 0;
	}
</style>
