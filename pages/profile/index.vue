<template>
	<view class="container">
		<view class="profile-container">
			<view class="top-container">
				<view class="userInfo-container">
					<uv-avatar size="52"></uv-avatar>
					<view class="userName">用户名</view>
				</view>
			</view>
			<view class="content-container">
				<!-- 我的宠物 -->
				<view class="myPets-container">
					<view>我的宠物</view>
					<scroll-view class="scroll-container" :scroll-x="true">
						<view class="pet-item" v-for="(item, index) in myPetsStore.petsList" :key="index">
							<uv-avatar src="/static/pet.png" size="52" mode="aspectFill"></uv-avatar>
							<view class="pet-detail">
								<view class="name">{{ item.name }}</view>
								<view class="pet-variety">
									<image class="variety-image" :src="item.variety_icon"></image>
									<view class="variety-name">{{ item.variety }}</view>
								</view>
							</view>
						</view>
						<view></view>
					</scroll-view>
				</view>
				<!-- 我的收藏 -->
				<view>
					<uv-tabs :list="list" :scrollable="false" lineColor="#a1b275" :activeStyle="{ color: '#000000' }"></uv-tabs>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { useMyPetsStore } from '../../stores/myPetsStore';
const myPetsStore = useMyPetsStore();
const list = [
	{
		name: '照片'
	},
	{
		name: '点赞'
	},
	{
		name: '收藏'
	}
];
</script>

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
					font-size: 32rpx;
				}
			}
		}
		.content-container {
			height: 80%;
			background-color: #ecebeb;
			border-radius: 60rpx 60rpx 0 0;
			padding: 40rpx 30rpx;
			box-sizing: border-box;
			.myPets-container {
				border-bottom: 1rpx solid #ffffff;
				.scroll-container {
					white-space: nowrap;
					overflow-x: scroll;
					width: 100%;
					.pet-item {
						display: inline-flex;
						width: 200rpx;
						border-radius: 20rpx;
						padding: 20rpx;
						box-sizing: border-box;
						width: 50%;
						.pet-detail {
							margin-left: 10rpx;
							.name {
								font-size: 26rpx;
								font-weight: bold;
							}
							.pet-variety {
								display: flex;
								align-items: center;
								margin-top: 10rpx;
								gap: 10rpx;
								.variety-image {
									width: 30rpx;
									height: 30rpx;
								}
								.variety-name {
									font-size: 24rpx;
								}
							}
						}
					}
				}
			}
		}
	}
}
</style>
