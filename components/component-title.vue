<!-- 组件标题 -->
<template>
	<view class="component-container">
		<view class="title">{{ title }}</view>
		<view class="more">更多</view>
	</view>
</template>

<script setup>
const props = defineProps({
	title: {
		type: String,
		default: '默认标题'
	}
});
</script>

<style scoped lang="scss">
.component-container {
	display: flex;
	justify-content: space-between;
	align-items: baseline;
	padding: 20rpx 0;
	.title {
		font-size: 30rpx;
	}
	.more {
		font-size: 24rpx;
		color: #999;
	}
}
</style>
