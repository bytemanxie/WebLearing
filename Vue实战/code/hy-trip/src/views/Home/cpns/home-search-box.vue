<script setup>
  import useCityStore from '@/stores/modules/city.js';
  import {storeToRefs} from "pinia";
  import { formatMonthDay, getDiffDays } from "@/utils/format_date"
  import {ref} from "vue";
  import useHomeStore from "@/stores/modules/home"
  import useMainStore from "@/stores/modules/main.js";
  import {computed} from "vue";

  const positionClick = () => {
    navigator.geolocation.getCurrentPosition(res => {
      console.log("获取位置成功:", res)
    }, err => {
      console.log("获取位置失败:", err)
    }, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    })
  }

  import {useRouter} from "vue-router";

  const router = useRouter()
  const cityStore = useCityStore()
  const { currentCity } = storeToRefs(cityStore)
  const cityclick = () => {
    router.push('/city')
  }

  // 日期范围的处理
  const nowDate = new Date()
  const newDate = new Date()
  newDate.setDate(nowDate.getDate() + 1)

  // 日期范围的处理
  const mainStore = useMainStore()
  const { startDate, endDate } = storeToRefs(mainStore)

  const startDateStr = computed(() => formatMonthDay(startDate.value))
  const endDateStr = computed(() => formatMonthDay(endDate.value))
  const stayCount = ref(getDiffDays(startDate.value, endDate.value))

  const showCalendar = ref(false)
  const onConfirm = (value) => {
    // 1.设置日期
    const selectStartDate = value[0]
    const selectEndDate = value[1]
    mainStore.startDate = selectStartDate
    mainStore.endDate = selectEndDate
    stayCount.value = getDiffDays(selectStartDate, selectEndDate)

    // 2.隐藏日历
    showCalendar.value = false
  }
  // 热门建议
  const homeStore = useHomeStore()
  const { hotSuggests } = storeToRefs(homeStore)

  // 开始搜索
  const searchBtnClick = () => {
    router.push({
      path: "/search",
      query: {
        startDate: startDate.value,
        endDate: endDate.value,
        currentCity: currentCity.value.cityName
      }
    })
  }
</script>

<template>
  <div class="location">
    <div class="city" @click="cityclick">{{ currentCity.cityName }}</div>
    <div class="position" @click="positionClick">
      <span class="text">我的位置</span>
      <img src="@/assets/image/home/icon_location.png" alt="">
    </div>
  </div>
  <div class="section date-range bottom-gray-line bottom-gray-line" @click="showCalendar = true">
    <div class="start">
      <div class="date">
        <span class="tip">入住</span>
        <span class="time">{{ startDateStr }}</span>
      </div>
      <div class="stay">共{{ stayCount }}晚</div>
    </div>
    <div class="end">
      <div class="date">
        <span class="tip">离店</span>
        <span class="time">{{ endDateStr }}</span>
      </div>
    </div>
  </div>
  <van-calendar
      v-model:show="showCalendar"
      type="range"
      color="#ff9854"
      :round="false"
      :show-confirm="false"
      @confirm="onConfirm"
  />
  <div class="section price-counter bottom-gray-line">
    <div class="start">价格不限</div>
    <div class="end">人数不限</div>
  </div>
  <!-- 关键字 -->
  <div class="section keyword bottom-gray-line">关键字/位置/民宿名</div>

  <!-- 热门建议 -->
  <div class="section hot-suggests">
    <template v-for="(item, index) in hotSuggests" :key="index">
      <div
          class="item"
          :style="{ color: item.tagText.color, background: item.tagText.background.color }"
      >
        {{ item.tagText.text }}
      </div>
    </template>
  </div>

  <!-- 搜索按钮 -->
  <div class="section search-btn">
    <div class="btn" @click="searchBtnClick">开始搜索</div>
  </div>

</template>

<style lang="less" scoped>
.location{
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 20px;

  .city{
    flex: 1;
    color: #333;
    font-size: 15px;
  }

  .position{
    width: 74px;
    display: flex;
    align-items: center;

    .text{
      position: relative;
      bottom: 1px;
      font-size: 12px;
      color: #666;
    }

    img{
      margin-left: 5px;
      width: 18px;
      height: 18px;
    }
  }
}

.section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 0 0 20px;
  color: #999;
  height: 44px;

  .start {
    flex: 1;
    display: flex;
    height: 44px;
    align-items: center;
  }

  .end {
    //min-width: 30%;
    padding-left: 20px;
    padding-right: 20px;;
  }

  .date {
    display: flex;
    flex-direction: column;

    .tip {
      font-size: 12px;
      color: #999;
    }

    .time {
      margin-top: 3px;
      color: #333;
      font-size: 15px;
      font-weight: 500;
    }
  }
}

.date-range {
  height: 44px;
  .stay {
    flex: 1;
    text-align: center;
    font-size: 12px;
    color: #666;
  }
}

.bottom-gray-line{
  border-bottom: 1px solid var(--line-color);
}

.hot-suggests {
  margin: 10px 0;
  height: auto;
  .item {
    padding: 4px 8px;
    margin: 4px;
    border-radius: 14px;
    font-size: 12px;
    line-height: 1;
  }
}

.search-btn {
  .btn {
    width: 342px;
    height: 38px;
    max-height: 50px;
    font-weight: 500;
    font-size: 18px;
    line-height: 38px;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    background-image: var(--theme-linear-gradient);
  }
}

</style>