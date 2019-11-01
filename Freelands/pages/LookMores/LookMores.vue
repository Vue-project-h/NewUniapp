<template>
	<view>
		<view class="">
			<view class="imgboxsss">
				<image src="../../static/image/mmexport1572587010155.jpg" mode="aspectFill"></image>
			</view>
			<view class="fzsz padding-top padding-bottom-sm padding-left">
				《FreeLand》
			</view>
			<view class="fztitle text-gray padding-left margin-top">
				一场灵魂与心灵的碰撞，一场冷气与热焰的交融，一场笔尖与paper的共舞。
			</view>
		</view>
		<Potery v-for="(item,index) in detaillist" :key="index" :detaildata="item"></Potery>
	</view>
</template>

<script>
	import Potery from '../../components/Potery.vue'
	export default {
		components:{
			Potery
		},
		data() {
			return {
				detaillist:[],
				names:''
			}
		},
		 onLoad: function (option) { 
		        this.names=option.name; 
				
		    },
		created() {
			uni.request({
				url:this.base_url+"detaillist",
				method:'get',
				success: (res1) => {
					console.log(res1)
					this.detaillist=res1.data.data
					console.log(this.detaillist)
					let newArr=this.detaillist.filter((val)=>{
						console.log(val.sptname)
						console.log(this.names)
						return val.sptname==this.names
					})
					this.detaillist=newArr;
				}
			})
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.imgboxsss{
		width: 100%;
		image{
			width: 100%;
			height: 574upx;
		}
	}
.fzsz{
	font-size: 50upx;	
	text-align: center;
}
.fztitle{
	font-size: 28upx;
}
</style>
