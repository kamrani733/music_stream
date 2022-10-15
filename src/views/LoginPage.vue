<template lang="">
  <div class="loginPage">
    <div class="leftside">
      <router-link to="/">
        <img class="leftside-logo" src="../assets/image/logo.png" alt="Logo" />
      </router-link>

      <Form
        @submit="sendReq"
        :validation-schema="schema"
        class="leftside-form loginform"
      >
        <label class="loginform__label">نام کاربری</label>
        <Field
          class="loginform__input1"
          v-model="user"
          name="user"
          :rules="loginFormInput1"
        />
        <ErrorMessage name="user" />
        <label class="loginform__label">رمز عبور</label>
        <Field
          class="loginform__input2"
          v-model="pass"
          name="pass"
          :rules="loginFormInput2"
        />
        <ErrorMessage name="user" />
        <input class="loginform__button" type="submit" value="ورود" id="" />
        <div class="loginform__register">
          حساب کاربری ندارید؟
          <span>
            <router-link to="register">ثبت نام </router-link>
          </span>
        </div>
        <div class="loginform__forgetpass">
          <router-link to="forgetPass">بازیابی رمز عبور</router-link>
        </div>
      </Form>
      <div class="leftside-google">ورود با حساب گوگل</div>
      <div class="leftside-desc">
        <p class="leftside-desc__p1">لورم ایپسوم متن ساختگی با تولید سادگی</p>
        <p class="leftside-desc__p2">
          چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
        </p>
      </div>
    </div>
    <div class="rigtside">
      <div class="rigtside-tittle">به آوا لند خوش آمدید</div>
      <div class="rigtside-desc">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد
      </div>
    </div>
  </div>
</template>
<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import "../assets/style/scss/loginStyle.scss";
// const { inject } = "vue";
// const $axios = inject('$axios');
import axios from "axios";
import { ref } from "vue";

const schema = yup.object({
  user: yup.string().required(),
  pass: yup.string().required().min(8)
});
// import { useRouter } from "vue-router";
// const router = useRouter();
let user = ref("");
let pass = ref("");
function sendReq() {
  const options = {
    url: "http://localhost:3000/users/signIn",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
      Origin: "http://localhost:8080",
    },
    data: {
      name: `${user.value}`,
      pass: `${pass.value}`,
    },
  };

  axios(options).then((response) => {
    console.log(response.status);
  });
}
</script>
