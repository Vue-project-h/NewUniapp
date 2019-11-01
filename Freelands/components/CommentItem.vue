<template>
	<view class="">
		<view class="cu-list menu-avatar comment solids-top comment-bgc" v-for="(item,index) in allcomment" :key="index">
			<view class="cu-item">
				<view class="cu-avatar round head-img" style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png);"></view>

				<view class="content">
					<view class="text-grey">{{item.user_id}}</view>
					<view class=" flex justify-between">
						<view class="text-gray text-df date-text">{{item.other_1}}</view>
						<view>
							<!-- <text class="cuIcon-forwardfill margin-sm text-gray"></text>
							<text class="cuIcon-appreciatefill text-gray"></text> -->
						</view>
					</view>
					<view class="text-co text-content text-df">
						{{item.content}}
					</view>
					

				</view>

			</view>

		</view>
		<view class="postcommen">
		<input type="text" v-model="comcontent" class="inp-text" placeholder="发表评论" placeholder-class="pla-style">
		<view class="pos-msg" @click="sendComment">
		<text class="cuIcon-write po-icon" ></text>
			<text>评论</text>
		</view>
	
	</view>
	</view>
</template>





<script>
	export default {
		props: {
			comeninfo: String,
		},
		data() {
			return {
				comcontent: '',
				user_id: '',
				allcomment: [],
				datas: [1, 2, 3],
				times: ''
			}
		},
		created() {
			let day2 = new Date();
			day2.setTime(day2.getTime());
			this.times = day2.getFullYear() + "-" + (day2.getMonth() + 1) + "-" + day2.getDate();
			uni.request({
				url: this.base_url + 'comment/search',
				method: 'GET',
				data:{
					'works_id': this.comeninfo,
				},
				success:(res)=> {
					this.allcomment = res.data
					console.log(this.allcomment)
				}
			})
		},
		methods: {
			sendComment() {
				try {
					const value = uni.getStorageSync('userinfo');
					if (value) {
						this.user_id = value.userinfo.name;
					}
				} catch (e) {
					console.log(e)
				}
				uni.request({
					url: this.base_url + 'comment/newcom',
					method: 'GET',
					data: {
						content: this.comcontent,
						'works_id': this.comeninfo,
						"user_id": this.user_id,
						"other_1": this.times,
						"other_2": '',
						"other_3": '',
					},
					success:(res)=> {
						console.log(res)
						console.log(res)
						this.allcomment.push(res.data.data)
					}
				})
			}
		},
	}
</script>

<style>
	.head-img {
		width: 74upx;
		height: 74upx;
	}

	.cu-list.menu-avatar>.cu-item .content>uni-view:first-child {
		color: #424348;
		font-size: 20upx;
	}

	.date-text {
		color: #878283;
		font-size: 20upx;
	}

	.comment-bgc {
		background-color: #fff;
	}

	.reapet-box {
		border: 1px solid #8b8687;
		color: #404146;
	}

	.text-co {
		color: #404146;
	}

	.postcommen {

		z-index: 2;
		background-color: #fff;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		border-top: 1px solid #e7e7e7;
		line-height: 98upx;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.inp-text {
		width: 486upx;
		height: 60upx;
		border: 1px solid #bcbcbc;
		border-radius: 30upx;
		padding-left: 30upx;
	}

	.pla-style {
		font-size: 30upx;
		color: #b2b2b2;

	}

	.po-icon {
		font-size: 46upx;
		color: #37393e;
	}
</style>
