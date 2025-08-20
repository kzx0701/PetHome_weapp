// 我的宠物数据管理
import { defineStore } from 'pinia';

export const useMyPetsStore = defineStore('myPets', {
	state: () => ({
		// 宠物列表
		petsList: [
			{
				name: '小黑',
				type: '猫',
				variety: '英短',
				image: ''
			},
			{
				name: '小黑',
				type: '猫',
				variety: '英短',
				image: ''
			}
		]
	})
});
