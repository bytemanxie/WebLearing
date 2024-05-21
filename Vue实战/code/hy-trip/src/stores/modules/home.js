import { getHomeHotSuggests, getHomeCategories, getHomeHouselist } from "@/services";
import { defineStore } from "pinia";

const useHomeStore = defineStore("home", {
    state: () => ({
        hotSuggests: [],
        categories: [],
        currentPage: 1,
        houselist: []
    }),
    actions: {
        async fetchHotSuggestData() {
            const res = await getHomeHotSuggests()
            this.hotSuggests = res.data
            // console.log(res)
        },
        async fetchCategoriesData() {
            const res = await getHomeCategories()
            this.categories = res.data
        },
        async fetchHouselistData() {
            try {
                // 尝试获取数据，等待Promise解决
                const res = await getHomeHouselist(this.currentPage);
                // 数据获取成功，更新房源列表
                this.houselist.push(...res.data);
                // 更新当前页面
                this.currentPage++;
            } catch (error) {
                // 如果Promise被拒绝，处理错误
                console.error("获取房源数据失败:", error);
                // 这里可以进一步处理错误，如显示错误信息给用户等
            }
        }
    }

})

export default useHomeStore

