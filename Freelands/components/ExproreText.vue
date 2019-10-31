<template>
	<view class="exproretext">
		<rich-text :nodes="text"></rich-text>
		<!-- <h1>诗歌标题</h1>
		  <p><span style="font-size: x-small;">作者：张三</span></p>
		  <h2><span style="font-size: x-small;">第一章</span></h2>
		  <p><span style="font-size: x-small;">啦啦啦看看好吃</span></p>
		  <p><span style="font-size: x-small;">那就好说次说错扩耨逛解耦逛监控录像错做那就好说次说错扩耨逛解耦逛监控录像错做做做做做做做做做做做做子扩女扩你看你看今年才可能你可垃圾就是</span></p>
		  <p><span style="font-size: x-small;">几乎窒息智商低回电话</span></p>
		  <p><span style="font-size: x-small;">机场速回电话赛</span></p>
		  <p><img src="https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg" style="max-width:100%;"><span
		      style="font-size: x-small;"><br></span></p>
		  <p><span style="font-size: x-small;">第二章</span></p>
		  <p><span style="font-size: x-small;">呼呼没出事实看看hi分数</span></p>
		  <p><span style="font-size: x-small;">那就是</span></p>
		  <p><span style="font-size: x-small;">那时候</span></p>
		  <p><img src="https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg" style="max-width:100%;"><span
		      style="font-size: x-small;"><br></span></p> -->
	</view>
</template>

<script>
	export default{
		data(){
			return{
				authordata:{}
			}
		},
		props:{
			text:String
		},
		
	}
</script>

<style>
	.exproretext{
		padding: 0 30upx;
		position: relative;
		z-index: 2;
	}
	 h1 {
		font-size: 38upx;
		color: #1a1a1a;
		text-align: center;
	}
	.exproretext p:nth-of-type(1){
		font-size: 28upx;
		color: #a2a2a2;
		text-align: center;
	}
	.exproretext span,p {
		font-size: 30upx;
		color: #232323;
		line-height: 40upx;
		text-align: justify;
	}
	.exproretext img {
		margin: 20upx 0;
	}
</style>
