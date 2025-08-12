<template>
	<view class="splash-container">
		<view class="skip">跳过</view>
		<swiper class="swiper">
			<swiper-item>
				<view class="swiper-item">
					<image
						class="swiper-image"
						mode="aspectFit"
						src="http://t0thhhqp2.hd-bkt.clouddn.com/%E5%9B%BE%E7%89%87%E8%B5%84%E6%BA%90/01%201.png?e=1754902617&token=w_xSY7nosVGTTL1lQnvTeLRGq78L4-drxlPRu_IN:IGqGwa93I5_hk52oRcLFqi2Llbc="
					></image>
					<view class="title">欢迎来到萌宠之家</view>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image
						class="swiper-image"
						mode="aspectFit"
						src="http://t0thhhqp2.hd-bkt.clouddn.com/%E5%9B%BE%E7%89%87%E8%B5%84%E6%BA%90/01%201.png?e=1754902617&token=w_xSY7nosVGTTL1lQnvTeLRGq78L4-drxlPRu_IN:IGqGwa93I5_hk52oRcLFqi2Llbc="
					></image>
					<view class="title">欢迎来到萌宠之家</view>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image
						class="swiper-image"
						mode="aspectFit"
						src="http://t0thhhqp2.hd-bkt.clouddn.com/%E5%9B%BE%E7%89%87%E8%B5%84%E6%BA%90/01%201.png?e=1754902617&token=w_xSY7nosVGTTL1lQnvTeLRGq78L4-drxlPRu_IN:IGqGwa93I5_hk52oRcLFqi2Llbc="
					></image>
					<view class="title">欢迎来到萌宠之家</view>
				</view>
			</swiper-item>
		</swiper>
		<view class="next-btn-container">
			<view class="next-btn">
				<uv-icon name="arrow-rightward" color="#ffffff"></uv-icon>
			</view>
		</view>
	</view>
</template>

<script setup></script>

<style scoped lang="scss">
page {
	background-color: #8d9f5e;
}
.splash-container {
	position: relative;
	padding-top: 15vh;
}
.skip {
	color: #ffffff;
	text-align: right;
	padding-right: 30rpx;
}
.swiper {
	height: 40vh;
}
.swiper-item {
	height: 100%;
	text-align: center;
}
.swiper-image {
	width: 100%;
	height: 80%;
}
.title {
	font-size: 42rpx;
	color: #ffffff;
	font-weight: bold;
}
.next-btn-container {
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 20rpx;
	.next-btn {
		background-color: red;
		border-radius: 50%;
		padding: 20rpx;
	}
}
</style>
