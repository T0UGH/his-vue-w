<template>
  <select-table
    :header="header"
    :items="items"
    :ffields="ffields"
    :select-options="selectOptions"
  ></select-table>
</template>

<script>
  import SelectTable from "../core/SelectTable";
  export default {
    name: "PatientCostTable",
    components: {SelectTable},
    data(){
      return{
        header: "患者费用",
        ffields: [
          {key: 'costId', label: 'ID', sortable: true},
          {key: 'costName', label: '名称'},
          {key: 'costDate', label:"日期", sortable: true},
          {key: 'costType', label:'收费类型', sortable: true},
          {key: 'costPrice', label:'单价', sortable: true},
          {key: 'costAmount', label:'数量', sortable: true},
          {key: 'costTotalPrice', label:'总价', sortable: true},
        ],
        items:[
          {costId: "No.1", costName: "静坐", costDate:"2019-01-04", costType: "处置", costPrice: "10.00", costAmount: "1", costTotalPrice: "10.00"},
          {costId: "No.2", costName: "感冒常规处方", costDate:"2019-01-04", costType: "处方", costPrice: "40.00", costAmount: "1", costTotalPrice: "40.00"},
          {costId: "No.3", costName: "x射线", costDate:"2019-01-04", costType: "检查", costPrice: "10.00", costAmount: "1", costTotalPrice: "10.00"},
        ],
        selectOptions:[
          {
            selected: null,
            options: [
              {value: null, text: '全部类型'},
              {value: '处置', text: '只看处置'},
              {value: '处方', text: '只看处方'},
              {value: '检查', text: '只看检查'},
              {value: '其他', text: '只看其他'},
            ],
          },
          {
            selected: null,
            options: [
              {value: null, text: '全部日期'},
              {value: '2019-01-04', text: '只看今天'},
              {value: '2019-01-03', text: '只看昨天'},
            ]
          },
        ]
      };
    }
  }
</script>
