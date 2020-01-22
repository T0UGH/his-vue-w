<template>
  <button-table
    :header="header"
    :items="items"
    :ffields="ffields"
    :buttons="buttons"
    :create-items="createItems"
    :create-fields="createFields"
  >
  </button-table>
</template>

<script>
  import ButtonTable from "../core/ButtonTable";
  export default {
    name: "TreatmentTable",
    components: {ButtonTable},
    data(){
      return{
        disableCreate: true,
        header: "处置列表",
        buttons:[
          {
            text:"作废",
            click:function () {
              this.showAlert("已发出作废请求","success");
            }
          }
        ],
        createFields:[
          {key: 'treatmentId', label: 'ID', sortable: true, editable: false},
          {key: 'treatmentName', label: '名称', editable: false},
          {key: 'treatmentPrice', label:"价格", sortable: true, editable: false},
          {key: 'execDept', label:'执行科室', sortable: true, editable: false},
        ],
        createItems:[
          { treatmentId: "No.4", treatmentName: "高级静坐", treatmentPrice: "1.00", execDept: "注射科", treatmentDemand: "无", treatmentState: "未执行"},
          { treatmentId: "No.5", treatmentName: "高级观察", treatmentPrice: "1.00", execDept: "注射科", treatmentDemand: "无", treatmentState: "未提交"},
          { treatmentId: "No.6", treatmentName: "高级仰卧", treatmentPrice: "1.00", execDept: "注射科", treatmentDemand: "无", treatmentState: "已执行"},
        ],
        ffields: [
          {key: 'treatmentId', label: 'ID', sortable: true, editable: false},
          {key: 'treatmentName', label: '名称', editable: false},
          {key: 'treatmentPrice', label:"价格", sortable: true, editable: false},
          {key: 'treatmentAmount', label:"数量", sortable: true, editable: true},
          {key: 'execDept', label:'执行科室', sortable: true, editable: false},
          {key: 'treatmentDemand', label:'医嘱', editable: true},
          {key: 'treatmentState', label:'状态', editable: false, defaultVal: "未提交"}
        ],
        items:[
          { treatmentId: "No.1", treatmentName: "静坐", treatmentPrice: "1.00", treatmentAmount: "1", execDept: "注射科", treatmentDemand: "无", treatmentState: "未执行"},
          { treatmentId: "No.2", treatmentName: "观察", treatmentPrice: "1.00", treatmentAmount: "1", execDept: "注射科", treatmentDemand: "无", treatmentState: "未提交"},
          { treatmentId: "No.3", treatmentName: "仰卧", treatmentPrice: "1.00", treatmentAmount: "1", execDept: "注射科", treatmentDemand: "无", treatmentState: "已执行"},
        ],
      }
    },
  }
</script>

<style scoped>

</style>
