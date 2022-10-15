<template>
    <div class="outer-container">
        <main class="content">
            <topMain />
            <div class="container">
                <div class="breadcrumb">
                    <div class="breabreadcrum__step2">ذخیره اطلاعات</div>
                    <div class="breabreadcrum__arrow_icon_left">
                        <img src="../assets/image/icons/linear/Seperator.png" alt="" />
                    </div>
                    <div class="breabreadcrum__step1">بارگذاری آهنگ</div>
                </div>
                <div class="upload">
                    <div class="upload__tittle">بارگذاری آهنگ</div>
                    <div class="upload__browse">
                        <div class="upload__browse-inside">
                            <div class="upload__browse_detail">
                                <div class="uplad_browse__tittle">اتمام بارگذاری</div>
                                <progress class="uplad_browse-progress" id="file" value="100" max="100">
                                    100%
                                </progress>
                            </div>
                        </div>
                        <div class="upload__browse-describe">
                            <span class="describe__p">
                                لورم ایپسورم و دیگر توضیحات اضافه که شاید نیاز داشته باشید
                            </span>
                            <img class="describe__icon" src="../assets/image/icons/Bold/info-circle.png" alt="" />
                        </div>
                    </div>
                </div>
                <div class="song_info">
                    <div class="song_info-tittle">اطلاعات آهنگ</div>
                    <div class="song_info-inside">
                        <div class="song_info__details">
                            <div class="col">
                                <div class="detail__lable">نام آهنگ</div>
                                <input class="detaile__input" placeholder="اشارات" type="text" />

                                <div class="detail__lable">نام آلبوم</div>
                                <input class="detaile__input" placeholder="اشارات" type="text" />
                            </div>
                            <div class="col">
                                <div class="detail__lable">نام خواننده</div>
                                <input class="detaile__input" placeholder="محمدرضا شجریان" type="text" />

                                <div class="detail__lable">مدت زمان آهنگ</div>
                                <input class="detaile__input" placeholder="۰۹:۰۰" type="text" />
                            </div>
                            <div class="col position-relative">
                                <img class="detaile__cover" src="../assets/image/pic/cover.png" alt="" />
                                <div class="detaile__file_back">
                                    <div class="detaile__file">
                                        <input type="file" class="customfile__input" />
                                        <img class="customfile__icon" src="../assets/image/icons/linear/camera.png"
                                            alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="song_info-lyrics">
                            <div class="lyrics_tittle">متن آهنگ</div>
                            <div class="lyrics__text">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                                مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                                تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                                کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                                آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم
                                افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                                طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
                                صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                                راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل
                                حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای
                                موجود طراحی اساسا مورد استفاده قرار گیرد.
                            </div>
                        </div>
                        <div class="song_info-buttons">
                            <div class="button button-cansel">لغو</div>
                            <div class="button button-save">دخیره اطلاعات</div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <SideBar />
    </div>

</template>
<script setup>
import "../assets/style/scss/style.scss";
import topMain from "@/components/topMain.vue";
import SideBar from "@/components/SideBar.vue";
</script>