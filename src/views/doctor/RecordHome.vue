<template>
  <b-row>
    <b-col lg="4">
      <patient-table></patient-table>
    </b-col>
    <b-col lg="8">
      <b-card :header="header">
        <div slot="header">
          病历填写
          <div class="card-header-actions">
            <b-button-group class="pull-right" >
              <b-button variant="info"  size="sm" @click="onSave">暂存</b-button>
              <b-button variant="danger"  size="sm" @click="onDelete">清空</b-button>
              <b-button variant="success"  size="sm" @click="onSubmit">提交</b-button>
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
        >
          {{alertMsg.text}}
        </b-alert>
        <b-form>
          <!--  主诉chiefComplaint -->
          <b-form-group
            label="主诉"
            label-for="chiefComplaint"
            :label-cols="2"
            :horizontal="true">
            <b-form-input id="chiefComplaint" type="text" placeholder="请输入内容..."></b-form-input>
          </b-form-group>
          <!--  现病史presentHistory -->
          <b-form-group
            label="现病史"
            label-for="presentHistory"
            :label-cols="2"
            :horizontal="true">
            <b-form-textarea id="presentHistory" placeholder="请输入内容..." rows="3" ></b-form-textarea>
          </b-form-group>
          <!--  现病治疗情况presentTreatment-->
          <b-form-group
            label="现病治疗情况"
            label-for="presentTreatment"
            :label-cols="2"
            :horizontal="true">
            <b-form-textarea id="presentTreatment" placeholder="请输入内容..." rows="3" ></b-form-textarea>
          </b-form-group>
          <!--既往史pastHistory-->
          <b-form-group
            label="既往史"
            label-for="pastHistory"
            :label-cols="2"
            :horizontal="true">
            <b-form-textarea id="pastHistory" placeholder="请输入内容..." rows="3" ></b-form-textarea>
          </b-form-group>
          <!--  过敏史allergicHistory-->
          <b-form-group
            label="过敏史"
            label-for="allergicHistory"
            :label-cols="2"
            :horizontal="true">
            <b-form-textarea id="allergicHistory" placeholder="请输入内容..." rows="3" ></b-form-textarea>
          </b-form-group>
          <!--  体格检查physicalExamination-->
          <b-form-group
            label="体格检查"
            label-for="physicalExamination"
            :label-cols="2"
            :horizontal="true">
            <b-form-textarea id="physicalExamination" placeholder="请输入内容..." rows="3" ></b-form-textarea>
          </b-form-group>
        </b-form>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
  import PatientTable from "./component/PatientTable";
  export default {
    name: "RecordHome",
    components: {PatientTable},
    data(){
      return{
        alertMsgs: []
      }
    },
    methods:{
      onSave(){
        this.showAlert("暂存成功","success");
      },
      onDelete(){
        this.deleteItem(this.currItem);
      },
      onSubmit(){
        this.showAlert("提交成功", "success");
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
    }
  }
</script>
