<template>
	<view class="content">
		<view class="text-area">
			<DaySign></DaySign>
		</view>
		<view class="item-list">
			<Potery></Potery>
		</view>
		<view class="more">
			<Topics></Topics>
		</view>
	</view>
</template>

<script>
	import DaySign from '../../components/DaySign.vue'
	import Potery from '../../components/Potery.vue'
	import Topics from '../../components/MyTopics.vue'
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		components:{
			'DaySign':DaySign,
			'Potery':Potery,
			'Topics':Topics
		},
		onLoad() {
			// console.log(1111)
		},
		methods: {

		}
	}
</script>

<style>
	.content{
		background: white;
	}
	/* .more{
		background: red;
		height: 100upx;
	} */
</style>
