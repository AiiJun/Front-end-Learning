import { getBannerAPI } from '@/api/home'
import { ref, onMounted } from 'vue'


// 封装banner轮播图数据业务相关代码
export function useBanner () {
    const bannerList = ref([])

    const getBanner = async () => {
      const res = await getBannerAPI({
        distributionSite: '2'
      })
      bannerList.value = res.result
    }
    onMounted(() => getBanner())
    return {
        bannerList
    }
}