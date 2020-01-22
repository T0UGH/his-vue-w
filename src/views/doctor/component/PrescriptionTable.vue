<template>
  <button-table
    :header="header"
    :items="items"
    :ffields="ffields"
    :buttons="buttons"
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
    name: "PrescriptionTable",
    components: {ButtonTable},
    data(){
      return{
        header: "检查检验列表",
        buttons:[
          {
            text:"编辑药品",
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
        ffields: [
          {key: 'prescriptionId', label: 'ID', sortable: true, editable:false, defaultVal: "No.4"},
          {key: 'prescriptionName', label: '处方名称', editable: true},
          {key: 'patientName', label: '患者名称', editable: false, defaultVal: "小花"},
          {key: 'prescriptionPrice', label:"总价", sortable: true, editable: false, defaultVal: "0"},
          {key: 'prescriptionDemand', label:'医嘱', editable: true},
          {key: 'prescriptionState', label:'状态', editable: false, defaultVal: "未提交"}
        ],
        items:[
          { prescriptionId: "No.1", prescriptionName: "感冒处方", prescriptionPrice: "100.00", patientName: "小花", prescriptionDemand: "无", prescriptionState: "已提交"},
          { prescriptionId: "No.2", prescriptionName: "发烧处方", prescriptionPrice: "10.00", patientName: "小花", prescriptionDemand: "无", prescriptionState: "未提交"},
          { prescriptionId: "No.3", prescriptionName: "处方#001", prescriptionPrice: "1.00", patientName: "小花", prescriptionDemand: "无", prescriptionState: "已废除"},
        ],
      }
    },
  }
</script>

<style scoped>

</style>
