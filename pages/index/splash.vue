<!-- 启动页 -->
<template>
	<view class="splash-container">
		<view class="skip" @click="skip">跳过</view>
		<uni-swiper-dot :info="info" mode="round" :dotsStyles="dotsStyles" :current="currentIndex">
			<swiper class="swiper" :current="currentIndex" @change="changeSwiper">
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
		</uni-swiper-dot>
		<view class="next-btn-container">
			<view class="next-btn" @click="nextSwiper">
				<uv-icon name="arrow-rightward" color="#ffffff" size="20"></uv-icon>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import uniSwiperDot from '@dcloudio/uni-ui/lib/uni-swiper-dot/uni-swiper-dot.vue';
const info = ref([1, 2, 3]);
const currentIndex = ref(0);
const dotsStyles = {
	backgroundColor: 'rgba(255, 255, 255, .3)',
	border: '1px rgba(255, 255, 255, .3) solid',
	color: '#fff',
	selectedBackgroundColor: 'rgba(255, 255, 255, .9)',
	selectedBorder: '1px rgba(255, 255, 255, .9) solid'
};
const changeSwiper = (e) => {
	currentIndex.value = e.detail.current;
};
const nextSwiper = () => {
	if (currentIndex.value < 2) {
		currentIndex.value++;
	} else {
		uni.navigateTo({
			url: '/pages/index/login'
		});
	}
};
const skip = () => {
	uni.navigateTo({
		url: '/pages/index/login'
	});
};
</script>

<style scoped lang="scss">
.splash-container {
	position: relative;
	background-color: #8d9f5e;
	height: 100vh;
}
.skip {
	color: #ffffff;
	text-align: right;
	padding-right: 30rpx;
	padding-top: 15vh;
}
.swiper {
	height: 50vh;
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
	margin-top: 80rpx;
	.next-btn {
		background: linear-gradient(45deg, #466100c7, #b5cb7b);
		box-shadow: 0 0 5rpx rgba(0, 0, 0, 0.2);
		border-radius: 50%;
		padding: 35rpx;
	}
}
</style>
