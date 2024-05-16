import {defineStore} from "pinia";
import {getCityAll} from "@/services/index.js";

const useCityStore = defineStore("city", {
    state: () => ({
        allCities: {},
        currentCity:{cityName: "广州"}
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