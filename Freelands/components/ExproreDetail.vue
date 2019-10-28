<template>
	<view class="exproredetail">
		<DetailAuthor></DetailAuthor>
		<ExproreText></ExproreText>
		<DetailFooter></DetailFooter>
		<PostComment></PostComment>
	</view>
</template>

<script>
	import DetailAuthor from './DetailAuthor.vue'
	import ExproreText from './ExproreText.vue'
	import DetailFooter from './DetailFooter.vue'
	import PostComment from './PostComment.vue'
	export default {
		components:{
			DetailAuthor,
			DetailFooter,
			PostComment,
			ExproreText
		}
	}
</script>

<style>
</style>
