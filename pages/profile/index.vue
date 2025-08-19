<template>
	<view class="container">
		<view class="profile-container">
			<view class="top-container">
				<view class="userInfo-container">
					<uv-avatar></uv-avatar>
					<view class="userName">用户名</view>
				</view>
			</view>
			<view class="content-container"></view>
		</view>
	</view>
</template>

<script setup></script>

<style scoped lang="scss">
.container {
	background-color: #8d9f5e;
	height: 100vh;
	.profile-container {
		width: 100%;
		height: 100%;
		background-color: #a1b275;
		.top-container {
			height: 20%;
			.userInfo-container {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				gap: 20rpx;
				height: 100%;
				.userName {
					color: #eef0e8;
				}
			}
		}
		.content-container {
			height: 80%;
			background-color: #ecebeb;
			border-radius: 60rpx 60rpx 0 0;
		}
	}
}
</style>
