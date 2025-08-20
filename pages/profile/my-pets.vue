<template>
	<view class="pets-container">
		<view class="top-container">
			<image class="bg" src="/static/mypets_bg.png" mode="aspectFit"></image>
		</view>
		<view class="content-container">
			<view class="pet-item">
				<image src="/static/pet.png" class="pet-image" mode="aspectFill"></image>
				<view class="pet-content">
					<view class="pet-name">大黑</view>
					<view class="pet-type">
						<uv-icon name="man" size="18" color="#8bbdec"></uv-icon>
						<view class="pet-typeName">金毛</view>
					</view>
					<view class="pet-desc">一只特立独行的狗</view>
				</view>
			</view>
		</view>
		<view class="add-pet-container">
			<uv-button class="add-pet-btn" color="#a1b275">添加宠物</uv-button>
		</view>
	</view>
</template>

<script setup>

</script>

<style scoped lang="scss">
.pets-container {
	background-color: #a1b275;
	height: calc(100vh - 44px);
	position: relative;
	.top-container {
		height: 10%;
		position: relative;
		.bg {
			width: 100%;
			position: relative;
			bottom: 55rpx;
		}
	}
	.content-container {
		height: 90%;
		box-sizing: border-box;
		background-color: #ecebeb;
		border-radius: 60rpx 60rpx 0 0;
		padding: 40rpx 30rpx;
		z-index: 9;
		.pet-item {
			display: flex;
			align-items: center;
			.pet-image {
				width: 200rpx;
				height: 230rpx;
				border-radius: 20rpx;
			}
			.pet-content {
				background-color: #ffffff;
				flex: 1;
				width: 100%;
				border-radius: 10rpx;
				height: 160rpx;
				margin-left: -10rpx;
				border: 1px solid #a1b275;
				box-shadow: 0 0 20rpx rgba(0, 0, 0, 0.1);
				padding: 20rpx 20rpx 20rpx 30rpx;
				.pet-name {
					font-weight: bold;
				}
				.pet-type {
					display: flex;
					align-items: baseline;
					gap: 10rpx;
					.pet-typeName {
						color: #5a5a5a;
						font-size: 24rpx;
						margin-top: 10rpx;
					}
				}
				.pet-desc {
					font-size: 22rpx;
					margin-top: 10rpx;
					color: #949494;
				}
			}
		}
	}
	.add-pet-container {
		position: absolute;
		bottom: 50rpx;
		width: 100%;
		display: flex;
		justify-content: center;
		.add-pet-btn {
			width: 90%;
		}
	}
}
</style>
