// 我的宠物数据管理
import { defineStore } from 'pinia';

export const useMyPetsStore = defineStore('myPets', {
	state: () => ({
		// 宠物列表
		petsList: [
			{
				name: '小黑',
				type: '狗',
				variety: '金毛',
				variety_icon: '/static/jinmao.png',
				image: ''
			},
			{
				name: '小黑',
				type: '狗',
				variety: '金毛',
				variety_icon: '/static/jinmao.png',
				image: ''
			}
		]
	})
});
