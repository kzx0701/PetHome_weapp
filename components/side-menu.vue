<template>
	<view class="component-container">
		<view class="menu-btn" v-show="!isChecked">
			<uni-icons type="bars" color="#ffffff" size="32" @click="openSideMenu"></uni-icons>
		</view>
		<view class="menu-container" :class="{ showMenu: isChecked }">
			<view class="userInfo">
				<uv-avatar text="李" shape="square"></uv-avatar>
				<view class="userName">李四</view>
			</view>
			<view class="menu-item" v-for="(item, index) in sideMenuStore.sideMenuList" :key="index" @click="navigateTo(item.path)">
				<uni-icons :type="item.icon" color="#bcc4a7" size="32"></uni-icons>
				<view>{{ item.title }}</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useSideMenuStore } from '../stores/sideMenuStore';
const sideMenuStore = useSideMenuStore();
const isChecked = ref(false);
// 定义事件
const emit = defineEmits(['update:checked']);
const props = defineProps({
	checked: {
		type: Boolean,
		default: false
	}
});
// 监听父组件传递的checked值
watch(
	() => props.checked,
	(newValue) => {
		isChecked.value = newValue;
	}
);
// 开启侧边菜单
const openSideMenu = () => {
	isChecked.value = !isChecked.value;
	// 触发事件，将最新状态传递给父组件
	emit('update:checked', isChecked.value);
	uni.hideTabBar({
		animation: true // 是否需要动画效果
	});
};
// 路由跳转
const navigateTo = (url) => {
	uni.navigateTo({
		url: url
	});
};
</script>

<style scoped lang="scss">
.component-container {
	z-index: 9;
	position: absolute;
	height: 100%;
	.menu-btn {
		// width: 100rpx;
		// height: 100rpx;
	}
	.menu-container {
		position: absolute;
		z-index: 9;
		width: 300rpx;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		gap: 40rpx;
		padding: 0 40rpx;
		transform: translateX(-80%);
		transition: transform 0.5s ease;
		.userInfo {
			display: flex;
			align-items: center;
			gap: 40rpx;
			padding: 80rpx 0 60rpx 0;
			.userName {
				color: #eef0e8;
				font-weight: bold;
				font-size: 28rpx;
			}
		}
		.menu-item {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 20rpx;
			font-size: 32rpx;
			color: #bcc4a7;
		}
	}
}
.showMenu {
	transform: translateX(0%) !important;
	transition: transform 0.5s ease;
}
</style>
