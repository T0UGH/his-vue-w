<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="8">
          <b-card-group>
            <b-card no-body class="p-4">
              <b-card-body>
                <b-form>
                  <h1>登录</h1>
                  <p class="text-muted">Sign In to your account</p>
                  <b-form-group label-for="inputError2"
                                label="用户名"
                                validated
                                :invalid-feedback="errors.first('user_name')"
                                :valid-feedback="validFeedback">
                    <b-form-input v-validate="'required'" name="userName" v-model="user_name" type="text" class="form-control-warning" id="inputError2" required></b-form-input>
                  </b-form-group>
                  <b-form-group validated
                                label="密码"
                                label-for="normalPass"
                                v-bind:invalid-feedback="errors.first('password')"
                                v-bind:valid-feedback="validFeedback">
                    <b-form-input v-validate="'required'" v-model="password" name="password" id="normalPass" type="password" placeholder="Enter Password.." required autocomplete="current-password"></b-form-input>
                  </b-form-group>
                  <b-row>
                    <b-col cols="12">
                      <b-alert :show="dismissCountDown" dismissible variant="danger" @dismissed="dismissCountdown=0" @dismiss-count-down="countDownChanged">
                        {{message}}
                      </b-alert>
                    </b-col>
                    <b-col cols="6">
                      <b-button variant="primary" class="px-4" v-on:click="submitLogin" :disabled="disabledLogin">登录</b-button>
                    </b-col>
                    <b-col cols="6" class="text-right">
                      <b-button variant="link" class="px-0" v-on:click="forgetPass">忘记密码?</b-button>
                    </b-col>
                  </b-row>
                </b-form>
              </b-card-body>
            </b-card>
            <b-card no-body class="text-white bg-primary py-5 d-md-down-none" style="width:44%">
              <b-card-body class="text-left">
                <div>
                  <h2>HIS门诊工作站</h2>
                  <p>HIS系统致力于为您提供更加便捷和智能的工作体验!</p>
                  <p>HIS系统的主要功能按照数据流量、流向及处理过程分为临床诊疗、药品管理、经济管理、综合管理与统计分析等!</p>
                  <b-button variant="primary" class="active mt-3">联系我们!</b-button>
                </div>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'
  export default {
  name: 'Login',
  data:function() {
  return {
    user_name:undefined,
    password:undefined,
    dismissCountDown: 0,
    defaultDismissDes:3,
    message:""
  };

},
computed:{
  disabledLogin(){
    return this.errors.has('password') || this.errors.has("user_name");
  },
  validFeedback(){
    return "valid";
  },
  ...mapState("common",['user_type']),
  ...mapState("common",['curr_user_type']),
},
  methods:{
    ...mapMutations('common',['set_curr_user_type']),
    ...mapMutations('common',['set_curr_user']),
    ...mapMutations('common',['set_curr_user_id']),
    ...mapMutations('common',['set_curr_dept']),
    ...mapMutations('common',['set_curr_role']),
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },

    submitLogin(){
      console.log("click");
      let data= {
        userLoginName: this.user_name,
        password: this.password
      };
      console.log(data);
      console.log(this.user_type.indexOf(data.userLoginName));
      console.log(this.user_type.includes(data.userLoginName));
      if(!this.user_type.includes(data.userLoginName)){
        this.message="用户不存在";
        this.alertLoginFail();
      }else if(data.userLoginName !== data.password){
        this.message="用户密码错误";
        this.alertLoginFail();
      }else{
            this.set_curr_user_type(data.userLoginName);
            this.$router.push("/" + this.curr_user_type);
      }
    },
    forgetPass(){//忘记密码

    },
    alertLoginFail(){//弹出登陆失败的对话框
      this.dismissCountDown = this.defaultDismissDes;
    },
  }
}
</script>
