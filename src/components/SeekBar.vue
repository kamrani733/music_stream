<template>
    <div class="player">
        <div class="player__back">
            <div class="player__cover">
                <img class="player__cover-img" src="../assets/image/pic/dastband_cover.png" alt="" />
                <div class="player__info">
                    <p>باطل</p>
                    <p>شادمهر عقیلی</p>
                </div>
            </div>

            <div class="player__middlepart">
                <div class="player__volume">
                    <input class="player__volume__line" type="range" id="player__volume__line" name="player__volume" min="0" max="11">
                    <div class="player__volume--icon">
                        <img src="../assets/image/icons/Bold/volume-high.png" alt="" />
                    </div>
                </div>
                <div class="player__timer">۲:۳۸</div>
                <input id="audio_player" type="range" name="player__volume" min="0" max="11">
            </div>

            <div class="player__timer">۲:۳۸</div>
            <div class="player__buttons">
                <img class="player__buttons-next" src="../assets/image/icons/Bold/next.png" alt="" />
                <img class="player__buttons-pause" src="../assets/image/icons/Bold/pause.png" alt="" />
                <img class="player__buttons-previous" src="../assets/image/icons/Bold/previous.png" alt="" />
            </div>
            <div class="player__icons">
                <label class="music_like">
                    <input class="music_like_radio" type="checkbox">
                    <span></span>
                </label>
                <div class="music_more_opt">
                    <img src="../assets/image/icons/linear/more.png" alt="">
                </div>
            </div>
        </div>

    </div>
</template>