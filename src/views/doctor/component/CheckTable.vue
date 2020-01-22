<template>
  <button-table
    :header="header"
    :items="items"
    :ffields="ffields"
    :buttons="buttons"
    :create-items="createItems"
    :create-fields="createFields"
  >
    <template slot="startDate" slot-scope="scope">
      <b-form-group
        :label="scope.data.ffield.label"
        :horizontal="true">
        <b-form-input type="date" id="date" v-model="scope.data.currItem == null?'':scope.data.currItem[scope.data.ffield.key]"></b-form-input>
      </b-form-group>
    </template>
  </button-table>
</template>

<script>
  import ButtonTable from "../core/ButtonTable";
  export default {
    name: "CheckTable",
    components: {ButtonTable},
    data(){
      return{
        header: "检查检验列表",
        buttons:[
          {
            text:"查看结果",
            click:function (button) {
              this.showAlert("待实现","danger");
            }
          },
          {
            text:"作废",
            click:function () {
              this.showAlert("已发出作废请求","success");
            }
          },
        ],
        createFields:[
          {key: 'checkId', label: 'ID', sortable: true},
          {key: 'checkName', label: '名称'},
          {key: 'checkPrice', label:"价格", sortable: true},
          {key: 'execDept', label:'执行科室', sortable: true},
        ],
        createItems:[
          { checkId: "No.4", checkName: "X射线升级版", checkPrice: "100.00", execDept: "放射科"},
          { checkId: "No.5", checkName: "CT升级版", checkPrice: "10.00", execDept: "放射科"},
          { checkId: "No.6", checkName: "胃镜升级版", checkPrice: "1.00", execDept: "检查内科"},
        ],
        ffields: [
          {key: 'checkId', label: 'ID', sortable: true, editable: false},
          {key: 'checkName', label: '名称', editable: false},
          {key: 'checkPrice', label:"价格", sortable: true, editable: false},
          {key: 'execDept', label:'执行科室', sortable: true, editable: false},
          {key: 'checkDemand', label:'要求', editable: true},
          {key: 'checkState', label:'状态', editable: false, defaultVal: "未检测"}
        ],
        items:[
          { checkId: "No.1", checkName: "X射线", checkPrice: "100.00", execDept: "放射科", checkDemand: "无", checkState: "未检测"},
          { checkId: "No.2", checkName: "CT", checkPrice: "10.00", execDept: "放射科", checkDemand: "无", checkState: "未提交"},
          { checkId: "No.3", checkName: "胃镜", checkPrice: "1.00", execDept: "检查内科", checkDemand: "无", checkState: "已检测"},
        ],
      }
    },
  }
</script>

<style scoped>

</style>
