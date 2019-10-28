<template>
	<view class="clntest" style="background: #fff;">
		<ClassifyItem></ClassifyItem>
		<TopicItem></TopicItem>
		<CommentItem></CommentItem>
		<ExproreDetail></ExproreDetail>
		
		
	</view>
</template>

<script>
	import ClassifyItem from '../../components/ClassifyItem.vue'
	import TopicItem from '../../components/TopicItem.vue'
	import CommentItem from '../../components/CommentItem.vue'
	import ExproreDetail from '../../components/ExproreDetail.vue'
	import PostComment from '../../components/PostComment.vue'
	import DetailFooter from '../../components/DetailFooter.vue'
	export default {
		data() {
			return {
				
			}
		},
		components:{
			ClassifyItem,
			TopicItem,
			CommentItem,
			ExproreDetail,
			PostComment,
			DetailFooter
		},
		methods: {
			
		}
	}
</script>

<style>
	.clntest {
		padding-bottom: 80upx;
	}
</style>
