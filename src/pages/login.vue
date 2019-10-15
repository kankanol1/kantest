<!---
    Created by kankan on 2019/9/2.
    email: lidainzhong@gl-data.com
-->


<template>
  <div class="bg">
    <div class="login-box"></div>
    <Form
            class="login"
            ref="formInline"
            :model="formInline"
            :rules="ruleInline"
            inline
    >
      <FormItem prop="user">
        <Input
                clearable
                type="text"
                value="kankan"
                v-model="formInline.user"
                placeholder="账号"
                @keyup.native.13="focus('password')"
        >
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <br>
      <FormItem prop="password">
        <Input
                clearable
                type="password"
                v-model="formInline.password"
                id="password"
                placeholder="密码"
                @keyup.native.13="handleSubmit('formInline')"
        >
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <br>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
      </FormItem>

    </Form>
  </div>


</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        formInline: {
          user: 'kankan',
          password: 'kankan'
        },
        ruleInline: {
          user: [
            {required: true, message: '请输入用户名', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            {type: 'string', min: 3, message: '请核对密码', trigger: 'blur'}
          ]
        },
        loading: false,
      }
    },
    mounted() {
      const CryptoJS = require("crypto-js");
      const plaintText = 'kankan';
      let keyStr = 'lidianzhongzhong';
      const key = CryptoJS.enc.Utf8.parse(keyStr);
      const encryptedData = CryptoJS.AES.encrypt(plaintText, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
      });
      const encryptedStr = encryptedData.ciphertext.toString();
      const encryptedHexStr = CryptoJS.enc.Hex.parse(encryptedStr);
      const encryptedBase64Str = CryptoJS.enc.Base64.stringify(encryptedHexStr);
      const decryptedData = CryptoJS.AES.decrypt(encryptedBase64Str, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
      });
      // eslint-disable-next-line no-unused-vars
      const decryptedStr = decryptedData.toString(CryptoJS.enc.Utf8);

    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$set(this, 'loading', true);
            this.$axios.get('api/login/login.json', {}).then(response => {
              if (response && response.status === 200) {
                const CryptoJS = require("crypto-js");
                const keyStr = 'lidianzhongzhong';
                const key = CryptoJS.enc.Utf8.parse(keyStr);
                const encryptedHexStr = CryptoJS.enc.Hex.parse(response.data.password);
                const encryptedBase64Str = CryptoJS.enc.Base64.stringify(encryptedHexStr);
                const decryptedData = CryptoJS.AES.decrypt(encryptedBase64Str, key, {
                  mode: CryptoJS.mode.ECB,
                  padding: CryptoJS.pad.Pkcs7
                });
                const pw = decryptedData.toString(CryptoJS.enc.Utf8);
                if (response.data.name === this.formInline.user
                  && pw === this.formInline.password) {
                  this.$set(this, 'loading', false);
                  sessionStorage.setItem('userInfo', JSON.stringify(response.data));
                  sessionStorage.setItem('logout', 600000);
                  this.$router.push({name: 'index'});
                  this.$Message.success({
                    content: '登录成功!',
                    duration: 1
                  });
                } else {
                  this.$Message.warning({
                    content: '请核对信息!',
                    duration: 1
                  });
                }
              }
            }).catch(() => {
              this.$Message.error({
                content: '登录失败!',
                duration: 1
              });
            })
          }
          this.$Message.destroy();
        });
      },
      focus(id) {
        document.getElementById(id).lastElementChild.focus();
      },
    }
  }


</script>

<style scoped lang="less">
  /*---------------Don't Touch My CSS-----------------------*/
  /*---------------Don't Touch My CSS-----------------------*/
  /*---------------Don't Touch My CSS-----------------------*/
  .bg {
    overflow: hidden;
    height: 100vh;
    min-width: 100%;
    position: relative;
    align-items: center;
    display: flex;
    justify-content: center;

    .login-box {
      position: absolute;
      width: 100vw;
      height: 100%;
      background-image: url("../assets/bg.jpg");
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
      filter: blur(0px) grayscale(95%) saturate(90%) opacity(99%);
      -webkit-filter: blur(0px) grayscale(95%) saturate(90%) opacity(99%);
      // 模糊 灰度 饱和
      /*backdrop-filter:blur(4px) saturate(150%);*/
      /*-webkit-backdrop-filter: blur(4px) saturate(150%);*/
    }

    .login {
      background-color: rgba(33, 31, 35, 0.6);
      border-radius: 5px;
      font-family: sans-serif;
      text-align: center;
      line-height: 1;
      max-width: 50%;
      max-height: 50%;
      padding: 20px 30px 20px 40px;
      z-index: 99;
      transform: scale(1.2);
    }
  }

</style>

