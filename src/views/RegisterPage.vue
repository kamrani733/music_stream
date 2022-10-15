<template lang="">
  <div class="loginPage">
    <div class="leftside">
      <router-link to="/">
        <img class="leftside-logo" src="../assets/image/logo.png" alt="Logo" />
      </router-link>

      <div v-if="forgetpassStep1" class="leftside-form loginform">
        <label class="loginform__label" for="">سوالات شخصی</label>
        <select class="loginform__list" name="cars" id="cars">
          <option value="volvo">نام اولین معلم؟</option>
          <option value="saab">رنگ مورد علاقه؟</option>
          <option value="opel">نام مادر</option>
          <option value="audi">نام دایی</option>
        </select>
        <label class="loginform__label" for="">پاسخ</label>
        <input class="loginform__input2" type="text" name="" id="" />
        <input
          class="loginform__button"
          type="button"
          value="ثبت"
          id=""
        />
      </div>
      <div class="leftside-form loginform">
        <label class="loginform__label" for="">نام کاربری</label>
        <input class="loginform__input1" type="text" name="" id="" />
        <label class="loginform__label" for="">رمز عبور</label>
        <input class="loginform__input2" type="password" name="" id="" />
        <label class="loginform__label" for="">تکرار رمز عبور</label>
        <input class="loginform__input2" type="password" name="" id="" />
        <input class="loginform__button" type="button" value="ورود" id="" />
        <div class="loginform__register">
          قبلا ثبت نام کرده اید؟
          <span>
            <router-link to="login">ورود </router-link>
          </span>
        </div>
      </div>
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
import "../assets/style/scss/loginStyle.scss";
// import { ref } from 'vue'
</script>
