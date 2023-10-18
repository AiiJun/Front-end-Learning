<script setup>
import { ref } from 'vue'
import { Delete, Edit } from '@element-plus/icons-vue'
import ChannelSelect from './components/ChannelSelect.vue'
import { artGetListService, artDelService } from '@/api/article'
import { formatTime } from '@/utils/format.js'
import ArticleEdit from './components/ArticleEdit.vue'

const articleList = ref([]) // 文章列表
const total = ref(0) // 总条数
const loading = ref(false)
const articleEditRef = ref()
// 定义请求参数对象
const params = ref({
    pagenum: 1, // 当前页
    pagesize: 5, // 当前生效的每页条数
    cate_id: '',
    state: ''
})

const getArticleList = async () => {
    loading.value = true
    const res = await artGetListService(params.value)
    articleList.value = res.data
    total.value = res.total
    loading.value = false
}
getArticleList()

// 处理分页逻辑
const onSizeChange = size => {
    // console.log('每页条数', size)
    // 只要是每页条数变化了. 那么原来正在访问的当前页意义不大了, 数据大概率已经不在原来那一页了
    // 重新从第一页渲染即可
    params.value.pagenum = 1
    params.value.pagesize = size
    // 基于最新的当前页 和 每页条数, 渲染新数据
    getArticleList()
}
const onCurrentChange = page => {
    // console.log('页码', page)
    params.value.pagenum = page
    // 基于最新的当前页, 渲染数据
    getArticleList()
}

// 搜索逻辑 => 按照最新的条件, 重新检索, 从第一页开始展示
const onSearch = () => {
    params.value.pagenum = 1 // 重置页面
    getArticleList()
}
// 重置的逻辑 => 将筛选条件清空, 重新检索, 从第一页开始展示
const onReset = () => {
    params.value.pagenum = 1 // 重置页面
    params.value.cate_id = ''
    params.value.state = ''
    getArticleList()
}

// 添加逻辑
const onAddArticle = () => {
    articleEditRef.value.open({})
}
// 编辑逻辑
const onEditArticle = (row) => {
    articleEditRef.value.open(row)
}
// 删除逻辑
const onDelArticle = async (row) => {
    await ElMessageBox.confirm('你确认删除该文章信息吗？', '温馨提示', {
        type: 'warning',
        confirmButtonText: '确认',
        cancelButtonText: '取消'
    })
    await artDelService(row.id)
    ElMessage({ type: 'success', message: '删除成功' })
    getArticleList()
}

// 添加修改成功
const onSuccess = (type) => {
    if (type === 'add') {
        // 如果是添加，需要跳转渲染最后一页，编辑直接渲染当前页
        const lastPage = Math.ceil((total.value + 1) / params.value.pagesize)
        params.value.pagenum = lastPage
    }
    getArticleList()
}

</script>

<template>
    <page-container title="文章管理">
        <template #extra>
            <el-button @click="onAddArticle">添加文章</el-button>
        </template>

        <!-- 表单区域 -->
        <el-form inline>
            <el-form-item label="文章分类:">
                <channel-select v-model:model-value="params.cate_id"></channel-select>
            </el-form-item>
            <el-form-item>
                <el-select v-model="params.state">
                    <el-option label="已发布" value="已发布"></el-option>
                    <el-option label="草稿" value="草稿"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button @click="onSearch" type="primary">搜索</el-button>
                <el-button @click="onReset">重置</el-button>
            </el-form-item>
        </el-form>
        <!-- 表格区域 -->
        <el-table :data="articleList" v-loading="loading">
            <el-table-column label="文章标题" prop="title">
                <template #default="{ row }">
                    <el-link type="primary" :underline="false">{{ row.title }}</el-link>
                </template>
            </el-table-column>
            <el-table-column label="分类" prop="cate_name"></el-table-column>
            <el-table-column label="发表时间" prop="pub_date">
                <template #default="{ row }">
                    {{ formatTime(row.pub_date) }}
                </template>
            </el-table-column>
            <el-table-column label="状态" prop="state"></el-table-column>
            <el-table-column label="操作">
                <!-- 利用作用域插槽 row 可以获取当前行的数据 -->
                <template #default="{ row }">
                    <el-button circle plain type="primary" :icon="Edit" @click="onEditArticle(row)"></el-button>
                    <el-button circle plain type="danger" :icon="Delete" @click="onDelArticle(row)"></el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- 分页区域 -->
        <el-pagination v-model:current-page="params.pagenum" v-model:page-size="params.pagesize" :page-sizes="[2, 3, 5, 10]"
            :background="true" layout="jumper, total, sizes, prev, pager, next" :total="total" @size-change="onSizeChange"
            @current-change="onCurrentChange" style="display: flex;justify-content: flex-end;margin-top: 20px;" />
        <!-- 抽屉 -->
        <article-edit ref="articleEditRef" @success="onSuccess"></article-edit>
    </page-container>
</template>

<style lang="scss" scoped></style>