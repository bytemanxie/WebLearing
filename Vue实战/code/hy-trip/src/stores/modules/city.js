import {defineStore} from "pinia";
import {getCityAll} from "@/services/index.js";

const useCityStore = defineStore("city", {
    state: () => ({
        allCities: {}
    }),
    actions: {
        async fetchAllCitiesData() {
            const res = await getCityAll()
            this.allCities = res.data
            // console.log(res, this.allCities)
        }
    }
})

export default useCityStore