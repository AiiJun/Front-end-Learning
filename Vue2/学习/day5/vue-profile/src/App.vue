<template>
  <div>
    <!-- 2.在使用组件时, 组件标签内填入内容 -->
    <!-- 3. 具名插槽 -->
    <MyDialog>
      <!-- 需要template标签包裹起来 -->
      <template v-slot:head>
        <div>我是大标题</div>
      </template>
      <template #body>
        <div>我是主体部分</div>
      </template>
      <template #foot>
        <div>
          <button>确认</button>
          <button>取消</button>
        </div>
      </template>
    </MyDialog>
    <MyTable :data="list">
      <!-- 3.通过template #插槽名="变量名" 接收 -->
      <template #default="obj">
        <!-- {{ obj }} -->
        <button @click="del(obj.row.id)">删除</button>
      </template>
    </MyTable>
    <MyTable :data="list2">
      <!-- 3.通过template #插槽名="变量名" 接收 -->
      <template #default="{row}">
        <!-- {{ obj }} -->
        <button @click="show(row)">查看</button>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyDialog from "./components/MyDialog.vue";
import MyTable from "./components/MyTable.vue";
export default {
  data() {
    return {
      list: [
        { id: 1, name: "张晓华", age: 18 },
        { id: 2, name: "孙大明", age: 19 },
        { id: 3, name: "刘得中", age: 17 }
      ],
      list2: [
        { id: 1, name: "赵小云", age: 18 },
        { id: 2, name: "刘培培", age: 19 },
        { id: 3, name: "蒋小琴", age: 17 }
      ]
    };
  },
  components: {
    MyDialog,
    MyTable
  },
  methods: {
    del(id) {
      // console.log(id);
      this.list = this.list.filter(item => item.id != id);
    },
    show(row) {
      console.log(row);
      alert(`姓名:${row.name};年龄:${row.age}`);
    }
  }
};
</script>

<style>
body {
  background-color: #b3b3b3;
}
</style>