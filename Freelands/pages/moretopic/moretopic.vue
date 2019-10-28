<template>
	<view class="moretopic">
		<TopicItem></TopicItem>
		<TopicItem></TopicItem>
		<TopicItem></TopicItem>
		<TopicItem></TopicItem>
		<TopicItem></TopicItem>
		<TopicItem></TopicItem>
	</view>
</template>

<script>
	import TopicItem from '../../components/TopicItem.vue'
	export default {
		components:{
			TopicItem
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.moretopic{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
