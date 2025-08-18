// 侧边菜单数据管理
import { defineStore } from 'pinia';

export const useSideMenuStore = defineStore('sideMenu', {
	state: () => ({
		sideMenuList: [
			{
				title: '添加宠物',
				icon: 'plusempty',
				path: '/home'
			},
			{
				title: '我的收藏',
				icon: 'heart-filled',
				path: '/home'
			},
			{
				title: '个人中心',
				icon: 'person-filled',
				path: '/goods'
			},
			{
				title: '设置',
				icon: 'gear-filled',
				path: '/order'
			}
		]
	})
});
