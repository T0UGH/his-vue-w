<template>
    <select-table
      :header="header"
      :items="items"
      :ffields="ffields"
      :curr-show-fields="currShowFields"
      :select-options="selectOptions"
    ></select-table>
</template>

<script>
    import SelectTable from "../core/SelectTable";
    export default {
      name: "PatientTable",
      components: {SelectTable},
      data(){
        return{
          header: "患者列表",
          ffields: [
            {key: 'recordId', label: 'ID', sortable: true},
            {key: 'patientName', label: '姓名'},
            {key: 'registerDate', label:"日期", sortable: true},
            {key: 'registerType', label:'挂号类', sortable: true},
            {key: 'recordState', label:'状态', sortable: true}
          ],
          currShowFields: ["recordId", "patientName", "recordState", "patientType","sex", "age", "history", "registerType"],
          items:[
            {recordId: "No.1", patientName: "小花", registerDate:"2019.01.01", recordState: "待诊断", patientType: "城镇", history: "无病史", sex: "女", age: "20岁", registerType: "个人"},
            {recordId: "No.2", patientName:"小明", registerDate:"2019.01.02", recordState:"已诊断", patientType: "城镇", history: "无病史", sex: "女", age: "20岁", registerType: "科室"},
            {recordId: "No.3", patientName:"小李", registerDate:"2019.01.03", recordState:"已确诊", patientType: "城镇", history: "无病史", sex: "女", age: "20岁", registerType: "个人"},
            {recordId: "No.4", patientName:"小王", registerDate:"2019.01.04", recordState:"已终诊", patientType: "城镇", history: "无病史", sex: "女", age: "20岁", registerType: "科室"},
            {recordId: "No.5", patientName:"小江", registerDate:"2019.01.04", recordState:"待检查", patientType: "城镇", history: "无病史", sex: "女", age: "20岁", registerType: "个人"},
            {recordId: "No.6", patientName:"小赵", registerDate:"2019.01.04", recordState:"待诊断", patientType: "城镇", history: "无病史", sex: "女", age: "20岁", registerType: "科室"},
          ],
          selectOptions:[
            {
              selected: null,
              options: [
                {value: null, text: '全部挂号'},
                {value: '个人', text: '只看个人'},
                {value: '科室', text: '只看科室'},
              ],
            },
            {
              selected: null,
              options: [
                {value: null, text: '全部日期'},
                {value: '2019.01.04', text: '只看今天'},
                {value: '2019.01.04', text: '只看昨天'},
              ]
            },
            {
              selected: null,
              options: [
                {value: null, text: '全部状态'},
                {value: '待诊断', text: '待诊断'},
                {value: '已诊断', text: '已诊断'},
                {value: '已诊断', text: '待检查'},
                {value: '已诊断', text: '已确诊'},
                {value: '已诊断', text: '已终诊'},
              ]
            }
          ]
        };
      }
    }
</script>
