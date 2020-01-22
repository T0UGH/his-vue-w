<template>
  <b-card :header="header">
    <div slot="header">
      {{header}}
      <div class="card-header-actions">
        <b-button-group class="pull-right" >
          <b-button v-if="!disableCreate" variant="primary"  size="sm" @click="onCreate">新增</b-button>
          <b-button v-if="!disableUpdate" variant="warning"  size="sm" @click="onUpdate">修改</b-button>
          <b-button v-if="!disableSave" variant="info"  size="sm" @click="onSave">暂存</b-button>
          <b-button variant="dark" size="sm" v-for="(button,index) in buttons" v-bind:key="index" @click="changeThis(button.click, button)">{{button.text}}</b-button>
          <b-button v-if="!disableDelete" variant="danger"  size="sm" @click="onDelete">删除</b-button>
          <b-button v-if="!disableSubmit" variant="success"  size="sm" @click="onSubmit">提交</b-button>
        </b-button-group>
      </div>
    </div>
    <b-alert
      v-for="(alertMsg,index) in alertMsgs"
      v-bind:key="index"
      @row-selected="onSelectItem"
      show="1"
      dismissible
      fade
      :variant="alertMsg.variant"
    >{{alertMsg.text}}</b-alert>
    <b-modal ref="update-modal" size="md" centered title="修改元素"  hide-footer>
      <slot v-for="(item,index) in ffields" :name="item.key" :data="{ffield: item, currItem: currItem}">
        <b-form-group
          :label="item.label"
          :horizontal="true"
          :disabled="!item.editable">
          <b-form-input type="text" placeholder="请输入内容..." v-model="currItem == null?'':currItem[item.key]"></b-form-input>
        </b-form-group>
      </slot>
    </b-modal>
    <b-modal ref="create-modal" size="md" centered title="创建元素" hide-header @ok="onCreateFinish" okTitle="提交" cancelTitle="取消" @cancel="onCreateCancel">
      <select-table v-if="createFields.length !== 0"
        header="选择元素"
        :items="createItems"
        :ffields="createFields"
        @select="onSelect"
      ></select-table>
      <slot v-for="(item,index) in ffields" :name="item.key" :data="{ffield: item, currItem: currModalItem}">
        <b-form-group
          :label="item.label"
          :horizontal="true"
          :disabled="!item.editable">
          <b-form-input type="text" placeholder="请输入内容..." v-model="currModalItem == null?'':currModalItem[item.key]"></b-form-input>
        </b-form-group>
      </slot>
    </b-modal>
    <b-table
      selectable
      select-mode="single"
      @row-selected="onSelectItem"
      :items="items"
      :fields="ffields"
      id="table"
    ></b-table>
  </b-card>
</template>

<script>
    import SelectTable from "./SelectTable";
    export default {
        name: "ButtonTable",
      components: {SelectTable},
      props:{
            header:{
              type:String,
              default:()=>{return "列表"}
            },
            disableCreate:{
              type:Boolean,
              default:()=>{return false}
            },
            disableUpdate:{
              type:Boolean,
              default:()=>{return false}
            },
            disableDelete:{
              type:Boolean,
              default:()=>{return false}
            },
            disableSave:{
              type:Boolean,
              default:()=>{return false}
            },
            disableSubmit:{
              type:Boolean,
              default:()=>{return false}
            },
            ffields:{
              type: Array,
              default:()=>{return []}
            },
            createFields:{
              type: Array,
              default:()=>{return []}
            },
            createItems:{
              type: Array,
              default:()=>{return []}
            },
            items:{
              type: Array,
              default:()=>{return []}
            },
            buttons:{
              type: Array,
              default:()=>{return []}
            },
            deleteItem:{
              type:Function,
              default:function (currItem) {
                let index = this.items.indexOf(currItem);
                if(index !== -1){
                  this.items.splice(index, 1);
                  this.showAlert("删除成功", "success");
                }else{
                  this.showAlert("删除失败", "danger");
                }
              }
            },
        },
        data(){
          return{
            currItem: null,
            currModalItem: null,
            alertMsgs: []
          }
        },
        methods: {
          onSelectItem(items) {
            let dupItem = null;
            if(items.length === 0){
              this.currItem = null;
            }else{
              this.currItem = items[0];
              dupItem = JSON.parse(JSON.stringify(items[0]))
            }
            this.$emit('select', dupItem);
          },
          onSubmit(){
            if(this.currItem == null){
              this.showAlert("未选择项目", "warning");
            }else{
              this.showAlert("提交成功", "success");
            }
          },
          onCreate(){
            if(this.createFields.length === 0){
              this.currModalItem = {};
              for (let i in this.ffields) {
                if (this.currModalItem[this.ffields[i].key] == null && this.ffields[i].defaultVal !== null) {
                  this.currModalItem[this.ffields[i].key] = this.ffields[i].defaultVal;
                }
              }
            }
            this.$refs["create-modal"].show();
          },
          onSelect(newItem){
            this.currModalItem = newItem;
            if(this.currModalItem != null) {
              for (let i in this.ffields) {
                if (this.currModalItem[this.ffields[i].key] == null && this.ffields[i].defaultVal !== null) {
                  this.currModalItem[this.ffields[i].key] = this.ffields[i].defaultVal;
                }
              }
            }
          },
          onCreateFinish(){
            if(this.currModalItem != null){
              this.items.push(this.currModalItem);
            }
          },
          onCreateCancel(){
            this.currModalItem = null
          },
          onUpdate(){
            if(this.currItem == null){
              this.showAlert("未选择项目", "warning");
            }else{
              this.$refs["update-modal"].show();
            }
          },
          onSave(){
            this.showAlert("暂存成功","success");
          },
          changeThis(func, args){
            func.call(this, args);
          },
          onDelete(){
            this.deleteItem(this.currItem);
          },
          showAlert(text, variant){
            if(variant == null){
              variant = "info";
            }
            this.alertMsgs.push(
              {
                text:text,
                variant:variant
              }
            );
          },
        },
    }
</script>
