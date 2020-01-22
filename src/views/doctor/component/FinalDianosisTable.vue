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
    name: "FinalDiagnosisTable",
    components: {ButtonTable},
    data(){
      return{
        disableCreate: true,
        header: "疾病列表",
        buttons:[
          {
            text:"作废",
            click:function () {
              this.showAlert("已发出作废请求","success");
            }
          },
          {
            text:"终诊",
            click:function () {
              this.showAlert("已终诊","success");
            }
          }
        ],
        createFields:[
          {key: 'diagnosisId', label: '疾病ID', sortable: true},
          {key: 'diagnosisIcd', label: '疾病ICD'},
          {key: 'diagnosisName', label:"名称", sortable: true},
        ],
        createItems:[
          { diagnosisId: "No.1", diagnosisIcd:"PTGM-01", diagnosisName: "普通感冒"},
          { diagnosisId: "No.2", diagnosisIcd:"YHY-PD1", diagnosisName: "咽喉炎"},
          { diagnosisId: "No.3", diagnosisIcd:"ZRY-PD3", diagnosisName: "中耳炎"},
          { diagnosisId: "No.4", diagnosisIcd:"ZFY-PD3", diagnosisName: "肺炎"},
        ],
        ffields: [
          {key: 'diagnosisId', label: 'ID', sortable: true, editable: false},
          {key: 'diagnosisName', label: '名称', editable: false},
          {key: 'startDate', label:"发病时间", sortable: true, editable: true},
          {key: 'diagnosisState', label:'状态', sortable: true, editable: false, defaultVal: "未提交"}
        ],
        items:[
          { diagnosisId: "No.1", diagnosisName: "普通感冒", startDate: "2019-07-12", diagnosisState: "未提交"},
          { diagnosisId: "No.2", diagnosisName: "咽喉炎", startDate: "2019-07-12", diagnosisState: "已提交"},
          { diagnosisId: "No.3", diagnosisName: "中耳炎", startDate: "2019-07-13", diagnosisState: "已废除"},
          { diagnosisId: "No.4", diagnosisName: "肺炎", startDate: "2019-07-13", diagnosisState: "已提交"},
        ],
      }
    },
  }
</script>

<style scoped>

</style>
