<template>
	<view class="moretopic">
		<TopicItem v-for="(item,index) in sptlist" :key="index" :sptdata="item"></TopicItem>
		<!-- <TopicItem></TopicItem>
		<TopicItem></TopicItem>
		<TopicItem></TopicItem>
		<TopicItem></TopicItem>
		<TopicItem></TopicItem> -->
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
				sptlist:[]
			}
		},
		onLoad(){
			uni.request({
				url:this.base_url+"speciltopic/list",
				method:'get',
				
				success: (resdetail) => {
					
					
					this.sptlist=resdetail.data.data;
					
					console.log(this.sptlist);
					// 设置页面元素高度，在大量数据加载完成后
					
				}
			})
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
