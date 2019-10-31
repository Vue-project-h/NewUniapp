<template>
<<<<<<< HEAD
    <view class="container">
        <editor id="editor" class="ql-container" :placeholder="placeholder" @ready="onEditorReady"></editor>
        <button type="warn" @tap="undo">撤销</button>
    </view>
</template>


<script>
    export default {
        data() {
            return {
                placeholder: '开始输入...'
            }
        },
        methods: {
            onEditorReady() {
                uni.createSelectorQuery().select('#editor').context((res) => {
                    this.editorCtx = res.context
                }).exec()
            },
            undo() {
                this.editorCtx.undo()
            }
        }
    }
</script>

<style>
    .container {
        padding: 10px;
    }

    #editor {
        width: 100%;
        height: 300px;
        background-color: #CCCCCC;
    }

    button {
        margin-top: 10px;
    }
</style>
=======
	<view class="foc">
		<view class="focusenum">
			关注了1个人
		</view>
		<Focuse></Focuse>
		<view class="loaddata">
			已经加载全部数据
		</view>
	</view>
	
</template>

<script>
	import Focuse from '../../components/Foucse.vue'
	export default {
		data() {
			return {
				
			}
		},
		components:{
			Focuse
		},
		methods: {
			
		}
	}
</script>

<style>
	.foc{
		padding: 0 30upx;
	}
	.focusenum{
		padding: 30upx 0;
		font-size: 26upx;
		color: #2e2f34;
	}
	.loaddata{
		font-size: 22upx;
		color: #8a8686;
		text-align: center;
		padding: 20upx 0;
	}
</style>
>>>>>>> master
