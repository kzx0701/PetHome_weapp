<template>
	<!-- 用 view 作为点击容器，直接绑定点击事件 -->
	<view class="nav-icon-wrapper" @click="isChecked = !isChecked">
		<view class="nav-icon-label">
			<view class="bar bar1" :class="{ active: isChecked }"></view>
			<view class="bar bar2" :class="{ active: isChecked }"></view>
			<view class="bar bar3" :class="{ active: isChecked }"></view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
// 仅通过响应式变量管理状态，不依赖任何原生表单组件
const isChecked = ref(false);
</script>

<style scoped>
.nav-icon-wrapper {
	/* 点击容器可点击 */
	cursor: pointer;
	display: inline-block;
}

.nav-icon-label {
	width: 36px;
	height: 40px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 6px;
}

.bar {
	height: 6px;
	background-color: #ffffff;
	border-radius: 8px;
	transition: all 300ms;
}

.bar1,
.bar3 {
	width: 66.666%;
	transform-origin: right center;
}

.bar2 {
	width: 100%;
	transform-origin: center right;
}

/* 激活状态动画 */
.bar1.active {
	width: 100%;
	transform: rotate(-30deg) translateY(-5px);
}

.bar2.active {
	transform: rotate(90deg) translateX(18px) translateY(2px);
}

.bar3.active {
	width: 100%;
	transform: rotate(30deg) translateY(5px);
}
</style>
