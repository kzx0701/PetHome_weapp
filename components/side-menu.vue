<template>
	<view class="component-container">
		<button @click="openSideMenu" v-show="!isChecked">侧边菜单</button>
		<view class="menu-container" v-show="isChecked">
			<view class="userInfo">
				<uv-avatar text="李" shape="square"></uv-avatar>
				<view>dsas</view>
			</view>
			<view class="menu-item" v-for="(item, index) in sideMenuStore.sideMenuList" :key="index">
				<uni-icons :type="item.icon" color="#bcc4a7"></uni-icons>
				<view>{{ item.title }}</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref, defineEmits } from 'vue';
import { useSideMenuStore } from '../stores/sideMenuStore';
const sideMenuStore = useSideMenuStore();
const isChecked = ref(false);
// 定义要触发的事件（通知父组件）
const emit = defineEmits(['update:checked']);
// 开启侧边菜单
const openSideMenu = () => {
	isChecked.value = !isChecked.value;
	// 触发事件，将最新状态传递给父组件
	emit('update:checked', isChecked.value);
	uni.hideTabBar({
		animation: true // 是否需要动画效果
	});
};
</script>

<style scoped lang="scss">
.component-container {
	position: absolute;
	z-index: 9;
	height: 100vh;
	.menu-container {
		position: absolute;
		z-index: 9;
		width: 300rpx;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		gap: 20rpx;
	}
	.menu-item {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 32rpx;
		color: #bcc4a7;
	}
}
</style>
