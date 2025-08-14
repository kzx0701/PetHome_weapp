<!-- 首页 -->
<template>
	<view class="home-container">
		<view class="top-container">
			<view class="search-container">
				<uv-input
					placeholder="请输入内容"
					border="none"
					:clearable="true"
					:customStyle="{ backgroundColor: '#ecebeb', padding: '10rpx', borderRadius: '15rpx' }"
				></uv-input>
			</view>
		</view>
		<view class="content-container"></view>
	</view>
</template>

<script setup></script>

<style scoped lang="scss">
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
		width: 100%;
		border-radius: 80rpx 80rpx 0 0;
	}
}
</style>
