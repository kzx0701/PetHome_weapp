<!-- 登陆页 -->
<template>
	<view class="login-container">
		<view class="title-container">
			<view>欢迎来到</view>
			<view>萌宠之家</view>
		</view>
		<view class="login-section">
			<image class="login-bg-pet" src="/static/login_bg.png" mode="widthFix"></image>
			<view class="action-container">
				<button class="login-btn" open-type="getPhoneNumber" @getphonenumber="handleGetPhoneNumber">一键登录</button>
				<button class="skip-btn" @click="switchTab('/pages/home/index')">跳过</button>
			</view>
		</view>
	</view>
</template>

<script setup>
// 一键登录
const handleGetPhoneNumber = (e) => {
	console.log(e);
};
// 页面跳转
const switchTab = (url) => {
	uni.switchTab({
		url: url
	});
};
</script>

<style scoped lang="scss">
.login-container {
	background-color: #8d9f5e;
	height: 100vh;
	.title-container {
		color: #ffffff;
		font-size: 50rpx;
		padding: 80rpx;
	}
	.login-section {
		background-color: #f9f9f9;
		height: 75%;
		width: 100%;
		position: absolute;
		bottom: 0;
		border-radius: 50rpx 50rpx 0 0;
		border-top: 5rpx solid #000000;
		.login-bg-pet {
			width: 500rpx;
			position: absolute;
			top: -360rpx;
			right: 20rpx;
		}
		.action-container {
			margin-top: 40%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			gap: 40rpx;
			.login-btn {
				width: 80%;
				height: 80rpx;
				background-color: #8d9f5e;
				border-radius: 40rpx;
				color: #fff;
				font-size: 30rpx;
				font-weight: 500;
				margin: 0 auto;
				border: 0px;
			}
			.skip-btn {
				width: 80%;
				height: 80rpx;
				background-color: #e3e3e3;
				border-radius: 40rpx;
				color: #959595;
				font-size: 30rpx;
				font-weight: 500;
				border: 0px;
			}
		}
	}
}
</style>
