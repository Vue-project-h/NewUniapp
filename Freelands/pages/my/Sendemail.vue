<template>
	<view class="sendmail">
		<form @submit="" @reset="">
			<view class="cu-form-group margin-top">
				<textarea maxlength="-1" :disabled="modalName!=null" @input="textareaAInput" placeholder="请输入想反馈的信息"></textarea>
			</view>
			<button form-type="submit" class="sendemailbtn bg-black addmymargin">提交</button>
		</form>
		
	</view>
</template>
<script>
</script>

<style>
	.addmymargin{
		margin: 50upx;
	}
</style>
