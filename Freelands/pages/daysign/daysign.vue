<template>
	<view class="daysigndetail">
		<!-- <DaySign></DaySign> -->
		<DaySign v-for="(item,index) of data" :key="index" :dsitem="item"></DaySign>
	</view>
</template>

<script>
	import DaySign from '../../components/DaySign.vue'
	export default{
		components:{
			DaySign
		},
		data(){
			return {
				data:[],
			}
		},
		created() {
			uni.request({
				url: 'http://rap2api.taobao.org/app/mock/234629/get/daysign',
				method: 'GET',
				success: res => {
					let arr=res.data.data.map((obj)=>{
						obj.content=obj.content.split('。');
						return obj
					})
					this.data=arr
					console.log(this.data)
				}
			});
		}
	}
</script>

<style>
</style>
