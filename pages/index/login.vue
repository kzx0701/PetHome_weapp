<!-- 登陆页 -->
<template>
	<view class="login-container">
		<view class="login-section">
			<image class="login-bg-pet" src="/static/login_bg.png" mode="widthFix"></image>
		</view>
	</view>
</template>

<script></script>

<style scoped lang="scss">
.login-container {
	background-color: #8d9f5e;
	height: 100vh;
	.login-bg-pet {
		width: 350rpx;
		position: absolute;
		top: -255rpx;
		right: 20rpx;
	}
	.login-section {
		background-color: #f9f9f9;
		height: 75%;
		width: 100%;
		position: absolute;
		bottom: 0;
		border-radius: 50rpx 50rpx 0 0;
		border-top: 5rpx solid #534104;
	}
}
</style>
