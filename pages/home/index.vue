<!-- 首页 -->
<template>
	<view class="container">
		<sideMenuVue @update:checked="handleToggleChange"></sideMenuVue>
		<view class="home-container" :class="{ transformed: sideMenuStatus }">
			<view class="top-container">
				<view class="search-container">
					<uv-input
						placeholder="查询宠物信息"
						border="none"
						prefixIcon="search"
						prefixIconStyle="font-size: 26px;color: #909399"
						:clearable="true"
						:customStyle="{ backgroundColor: '#ecebeb', padding: '10rpx', borderRadius: '15rpx' }"
					></uv-input>
				</view>
			</view>
			<view class="content-container">
				<!-- 最受欢迎宠物 -->
				<view class="popular-container">
					<componentTitleVue title="最受欢迎"></componentTitleVue>
					<scroll-view class="scroll-container" :scroll-x="true">
						<view class="scroll-item" v-for="(item, index) in 4" :key="index">
							<image class="scroll-bg" src="/static/pet.png" mode="aspectFill"></image>
							<view class="mask"></view>
							<view class="scroll-content">
								<view class="name-container">
									<view class="name">大黑</view>
									<uv-icon name="man" color="#8bbdec" size="22"></uv-icon>
								</view>
								<view class="location-container">
									<uv-icon name="map-fill" color="#ffffff" size="12"></uv-icon>
									<view class="location">徐州市</view>
								</view>
							</view>
						</view>
					</scroll-view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import componentTitleVue from '../../components/component-title.vue';
import sideMenuVue from '../../components/side-menu.vue';
import { ref } from 'vue';
// 侧边菜单状态
const sideMenuStatus = ref(false);

// 处理侧边菜单开关状态变化
const handleToggleChange = (newState) => {
	// 捕获子组件传递的状态
	sideMenuStatus.value = newState;
	console.log('侧边菜单状态:', newState);
	if (newState) {
		// 开关开启时的逻辑
	} else {
		// 开关关闭时的逻辑
	}
};
</script>

<style scoped lang="scss">
.container {
	background-color: #8d9f5e;
	position: relative;
}
.home-container {
	background-color: #a1b275;
	height: 100vh;
	position: relative;
	.top-container {
		height: 20%;
		position: relative;
		display: flex;
		justify-content: center;
		.search-container {
			position: absolute;
			bottom: 20rpx;
			width: 90%;
		}
	}
	.content-container {
		background-color: #ecebeb;
		position: absolute;
		bottom: 0;
		height: 80%;
		width: -webkit-fill-available;
		border-radius: 60rpx 60rpx 40rpx 40rpx;
		padding: 0 30rpx;
		.popular-container {
			.scroll-container {
				while: 100%;
				white-space: nowrap;
				.scroll-item {
					display: inline-block;
					align-items: center;
					position: relative;
					width: 30%;
					height: 300rpx;
					border-radius: 20rpx;
					margin-right: 10rpx;
					overflow: hidden;
					.scroll-bg {
						width: 100%;
						height: 100%;
					}
					.mask {
						position: absolute;
						left: 0;
						top: 0;
						width: 100%;
						height: 100%;
						background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, /* 顶部完全透明 */ rgba(0, 0, 0, 0.3) 50%, /* 中间半透明 */ rgba(0, 0, 0, 0.8) 100% /* 底部深色 */);
						z-index: 1;
					}
					.scroll-content {
						position: absolute;
						bottom: 0;
						color: #ffffff;
						padding: 20rpx;
						z-index: 2;
						.name-container {
							display: flex;
							flex-direction: row;
							align-items: center;
							font-size: 24rpx;
							gap: 10rpx;
						}
						.location-container {
							display: flex;
							flex-direction: row;
							align-items: baseline;
							font-size: 20rpx;
							gap: 10rpx;
						}
					}
				}
			}
		}
	}
}
// 侧边菜单开启样式
.transformed {
	transition: transform 0.5s ease;
	transform: scale(0.7) translateX(50%);
	border-radius: 40rpx;
	box-shadow: -30rpx 30rpx 50rpx rgba(0, 0, 0, 0.3);
	filter: brightness(0.9);
}
</style>
