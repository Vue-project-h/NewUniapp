<template>
	<view class="detail">
		<image class="detail-img-fixd" src="https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png"></image>
		
		<view class="d-content">
		</view>
		.
		<view class="bg-white">
			<DetailAuthor></DetailAuthor>
			<ExproreText></ExproreText>
			<DetailFooter></DetailFooter>
			<PostComment></PostComment>
			<view class="d-comment">
				<view class="co-title">
					最新评论
				</view>
				<view class="commentlist">
					<CommentItem></CommentItem>
				</view>
			</view>
		</view>
		
		
		
			
		
	</view>
</template>

<script>
	import DetailAuthor from '../../components/DetailAuthor.vue'
	import ExproreText from '../../components/ExproreText.vue'
	import DetailFooter from '../../components/DetailFooter.vue'
	import PostComment from '../../components/PostComment.vue'
	import CommentItem from '../../components/CommentItem.vue'
	export default {
		onPageScroll: function(Object) { 
		 // console.log(Object.scrollTop);//实时获取到滚动的值 if(0)
		 // if(Object.scrollTop>0){
			 
		 // }
		},
		components:{
			DetailAuthor,
			DetailFooter,
			PostComment,
			ExproreText,
			CommentItem
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
