<template>
	<view class="content">
        <edits paddingBottom='100' ref="edit" placeText="写点什么吧..."></edits>
	</view>
</template>


<script>
	import edits from '../../components/wjx-edit/wjx-edit.vue';
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		
		components:{
			edits
		},
		onNavigationBarButtonTap: function(e) {
			var that = this;  
			//子组件的data
			var editData = this.$refs.edit.submit(); 
			
			console.log("内容为" + JSON.stringify(editData.editItems));
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title:'灵感'
			})
		},
		methods: {

		}
	}
</script>

<style>
	
</style>
