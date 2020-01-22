<template>
  <b-card :header="header">
    <p v-if="currShowFields.length > 0"><strong>当前</strong>: {{currItemStr}}</p>
    <b-row>
      <b-col md="8">
        <b-input-group>
          <b-form-input
            v-model="searchStr"
            placeholder="请输入关键字搜索"
            size="sm"
          ></b-form-input>
        </b-input-group>
      </b-col>
      <b-col md="4">
        <b-form-select
          v-model="perPage"
          :options="pageOptions"
          size="sm"
        ></b-form-select>
      </b-col>
    </b-row>
    <br>
    <b-row v-if="cutSelectOptions.length !==0">
      <b-col v-for="(selectOption,index) in cutSelectOptions" v-bind:key="index" :md=" 12 / cutSelectOptions.length">
        <b-form-select v-model="selectOption.selected" :options="selectOption.options" size="sm"></b-form-select>
      </b-col>
    </b-row>
    <br v-if="cutSelectOptions.length !==0">
    <b-table
      selectable
      select-mode="single"
      @row-selected="onSelectItem"
      :items="items"
      :fields="ffields"
      :per-page="perPage"
      :currentPage="currPage"
      :filter="reg"
      id="table"
    ></b-table>
    <b-pagination
      v-model="currPage"
      :total-rows="totalRows"
      :per-page="perPage"
      aria-controls="table"
      align="center"
    ></b-pagination>
  </b-card>
</template>
<script>
    export default {
      props:{
        header:{
          type:String,
          default:()=>{return "列表"}
        },
        ffields:{
          type: Array,
          default:()=>{return []}
        },
        selectOptions:{
          type: Array,
          default:()=>{return []}
        },
        currShowFields:{
          type: Array,
          default:()=>{return []}
        },
        perPage:{
          type: Number,
          default: 5
        },
        items:{
          type: Array,
          default:()=>{return []}
        }
      },
      data() {
        return {
          currPage:1,
          currItem:null,
          pageOptions: [3, 5, 7, 10, 15, 20],
          searchStr:null,
        }
      },
      computed: {
        cutSelectOptions(){
          return this.selectOptions.slice(0, 3);
        },
        totalRows() {
          return this.items.length
        },
        reg(){
          let regStr = "";
          if(this.searchStr !== null){
            regStr += "(?=.*?" + this.searchStr + ")";
          }
          for(let i in this.selectOptions){
            if(this.selectOptions[i].selected !== null){
              regStr += "(?=.*?" + this.selectOptions[i].selected + ")";
            }
          }
          return new RegExp(regStr);
        },
        currItemStr(){
          if(!this.currItem){
            return "未选择";
          }
          let currItemStr = "";
          for(let i = 0; i<this.currShowFields.length; i++){
            currItemStr += this.currItem[this.currShowFields[i]];
            if (i < this.currShowFields.length - 1){
              currItemStr += "|";
            }
          }
          return currItemStr;
        }
      },
      methods:{
        onSelectItem(items){
          this.currItem = JSON.parse(JSON.stringify(items[0]));
          this.$emit('select', this.currItem);
        },
      }
    }
</script>


<style scoped>

</style>
