<template>
  <div class="tw-py-10" :class="mode ? 'tw-bg-black' : ''" style="height: 100vh">
    <kinesis-container>
      <kinesis-element :strength="2" type="depth">
        <div class="tw-flex tw-items-center tw-justify-center">
          <kinesis-container
            class="tw-overflow-hidden tw-pt-6 tw-flex tw-items-center tw-justify-center tw-w-66"
            style="height: 75vh"
          >
            <kinesis-element class="tw-flex" :strength="10" type="depth">
              <!-- <img class="tw-m-auto tw-text-center tw-w-60" src="../../assets/heyday.png"/> -->
              <kinesis-element :strength="20" type="depth_inv">
                <img
                  data-cursor-hover
                  class="shape-wave-left-0 tw-m-auto tw-text-center tw-w-26"
                  src="../../assets/wave2.png"
                />
              </kinesis-element>
              <kinesis-element :strength="20" type="depth_inv">
                <img
                  data-cursor-hover
                  class="shape-wave-left-1 tw-m-auto tw-text-center tw-w-26"
                  src="../../assets/wave2.png"
                />
              </kinesis-element>
              <kinesis-element :strength="20" type="depth_inv">
                <img
                  data-cursor-hover
                  class="shape-wave-left-2 tw-m-auto tw-text-center tw-w-26"
                  src="../../assets/wave2.png"
                />
              </kinesis-element>
              <kinesis-element :strength="-15" type="depth">
                <img
                  data-cursor-hover
                  class="shape-h tw-m-auto tw-text-center tw-w-34"
                  src="../../assets/h.png"
                />
              </kinesis-element>
              <kinesis-element :strength="-15" type="depth_inv">
                <img
                  data-cursor-hover
                  class="shape-y tw-m-auto tw-text-center tw-w-26"
                  src="../../assets/y3.png"
                />
              </kinesis-element>
              <kinesis-element :strength="20" type="depth">
                <img
                  data-cursor-hover
                  class="shape-wave-right-0 tw-m-auto tw-text-center tw-w-26"
                  src="../../assets/wave1.png"
                />
              </kinesis-element>
              <kinesis-element :strength="20" type="depth">
                <img
                  data-cursor-hover
                  class="shape-wave-right-1 tw-m-auto tw-text-center tw-w-26"
                  src="../../assets/wave1.png"
                />
              </kinesis-element>
              <kinesis-element :strength="20" type="depth">
                <img
                  data-cursor-hover
                  class="shape-wave-right-2 tw-m-auto tw-text-center tw-w-26"
                  src="../../assets/wave1.png"
                />
              </kinesis-element>
            </kinesis-element>
          </kinesis-container>
          <!-- <kinesis-container>
            <kinesis-element :strength="10" type="depth">
              <a href="https://heydayle.github.io/Portfolio/">
                Portfolio
              </a>
            </kinesis-element>
          </kinesis-container> -->
        </div>
        <div class="tw-relative">
          <kinesis-container>
            <kinesis-element
              data-cursor-hover
              class="tw-absolute tw-bottom-20"
              style="left: 30rem"
              :strength="0.2"
              type="scale"
            >
              <v-btn href="https://fb.com/heydaysea" icon>
                <v-img src="../../assets/icon3d/facebook.png" class="tw-w-12" />
              </v-btn>
            </kinesis-element>
          </kinesis-container>
          <kinesis-container>
            <kinesis-element
              data-cursor-hover
              class="tw-absolute tw-bottom-10"
              style="right: 28rem"
              :strength="1"
              type="scale"
            >
              <v-btn href="https://instagram.com/heyday.le" icon>
                <v-img
                  src="../../assets/icon3d/instagram.png"
                  class="tw-w-12"
                />
              </v-btn>
            </kinesis-element>
          </kinesis-container>
          <kinesis-container>
            <kinesis-element
              data-cursor-hover
              class="tw-absolute tw-right-80 tw-bottom-80"
              :strength="0.2"
              type="scale"
            >
              <v-btn href="https://linkedin.com/in/thinh-le-profile/" icon>
                <v-img src="../../assets/icon3d/linkedin.png" class="tw-w-10" />
              </v-btn>
            </kinesis-element>
          </kinesis-container>
          <kinesis-container>
            <kinesis-element
              data-cursor-hover
              class="tw-absolute tw-left-20 tw-bottom-80"
              :strength="0.2"
              type="scale"
            >
              <v-btn v-if="mode" class="tw-animate-flipIn" @click="changeMode" icon>
                <v-img class="tw-w-12" src="../../assets/icon3d/crescent.png" />
              </v-btn>  
              <v-btn v-else @click="changeMode" icon>
                <v-img class="tw-animate-flipOut tw-w-12" src="../../assets/icon3d/cloud.png" />
              </v-btn>  
            </kinesis-element>
          </kinesis-container>
          <kinesis-container>
            <kinesis-element
              data-cursor-hover
              class="tw-absolute tw-right-80 tw-bottom-80"
              :strength="0.2"
              type="scale"
            >
              <v-btn href="https://linkedin.com/in/thinh-le-profile/" icon>
                <v-img src="../../assets/icon3d/linkedin.png" class="tw-w-10" />
              </v-btn>
            </kinesis-element>
          </kinesis-container>
          <kinesis-container>
            <kinesis-element
              data-cursor-hover
              v-if="mode"
              class="tw-absolute"
              style="bottom: 26rem;left: 26rem;"
              :strength="0.2"
              type="scale"
            >
              <v-btn href="https://linkedin.com/in/thinh-le-profile/" icon>
                <v-img src="../../assets/icon3d/firefly.png" class="tw-w-4 tw-animate-fireFlyMove" />
              </v-btn>
            </kinesis-element>
          </kinesis-container>
          <kinesis-container>
            <kinesis-element
              data-cursor-hover
              v-if="mode"
              class="tw-absolute"
              style="bottom: 26rem;right: 12rem"
              :strength="0.4"
              type="scale"
            >
              <v-img src="../../assets/icon3d/shooting-star.png" class="tw-w-14 tw-animate-tiktok" />
            </kinesis-element>
          </kinesis-container>
          <kinesis-container>
            <kinesis-element
              data-cursor-hover
              v-if="mode"
              class="tw-absolute"
              style="bottom: 5rem;right: 8rem"
              :strength="0.2"
              type="scale"
            >
              <v-img src="../../assets/icon3d/mushroom.png" class="tw-w-14" />
            </kinesis-element>
          </kinesis-container>
          <kinesis-container>
            <kinesis-element
              data-cursor-hover
              v-if="!mode"
              class="tw-absolute"
              style="bottom: -8rem;right: 1rem"
              :strength="0.2"
              type="scale"
            >
              <v-img src="../../assets/icon3d/waves.png" class="tw-w-14 tw-animate-waves" />
            </kinesis-element>
          </kinesis-container>
          <kinesis-container>
            <kinesis-element
              data-cursor-hover
              v-if="!mode"
              class="tw-absolute"
              style="bottom: 26rem;left: 26rem;"
              :strength="0.2"
              type="scale"
            >
              <v-btn href="https://linkedin.com/in/thinh-le-profile/" icon>
                <v-img src="../../assets/icon3d/bee.png" class="tw-w-4 tw-animate-fireFlyMove" />
              </v-btn>
            </kinesis-element>
          </kinesis-container>
          <kinesis-container>
            <kinesis-element
              data-cursor-hover
              v-if="!mode"
              class="tw-absolute"
              style="bottom: 26rem;right: 12rem"
              :strength="0.4"
              type="scale"
            >
              <v-img src="../../assets/icon3d/shooting-star.png" class="tw-w-14 tw-animate-tiktok" />
            </kinesis-element>
          </kinesis-container>
          <kinesis-container>
            <kinesis-element
              data-cursor-hover
              v-if="!mode"
              class="tw-absolute"
              style="bottom: 5rem;right: 8rem"
              :strength="0.2"
              type="scale"
            >
              <v-img src="../../assets/icon3d/clover.png" class="tw-w-14 tw-animate-spin" />
            </kinesis-element>
          </kinesis-container>
          <kinesis-container>
            <kinesis-element
              data-cursor-hover
              v-if="!mode"
              class="tw-absolute"
              style="bottom: -8rem;right: 1rem"
              :strength="0.2"
              type="scale"
            >
              <v-img src="../../assets/icon3d/waves.png" class="tw-w-14 tw-animate-waves" />
            </kinesis-element>
          </kinesis-container>
          <kinesis-container>
            <kinesis-element
              data-cursor-hover
              v-if="!mode"
              class="tw-absolute"
              style="bottom: -8rem;right: 1rem"
              :strength="0.2"
              type="scale"
            >
              <v-img src="../../assets/icon3d/waves.png" class="tw-w-14 tw-animate-waves9" />
            </kinesis-element>
          </kinesis-container>
        </div>
        <kinesis-container>
          <kinesis-element data-cursor-hover :strength="10" type="depth">
            <div>
              <kinesis-container
                class="tw-flex tw-justify-center tw-items-end tw-pb-4 tw-space-x-2"
                href="https://github.com/heydayle"
                tag="a"
              >
                <kinesis-element :strength="10" type="depth">
                  <img
                    class="tw-m-auto tw-text-center tw-w-6"
                    src="../../assets/h-char.png"
                  />
                </kinesis-element>
                <kinesis-element :strength="7" type="depth_inv">
                  <img
                    class="tw-m-auto tw-text-center tw-w-6"
                    src="../../assets/e-char.png"
                  />
                </kinesis-element>
                <kinesis-element :strength="6" type="depth">
                  <img
                    class="tw-m-auto tw-text-center tw-w-6 tw-relative tw-top-2"
                    src="../../assets/y-char.png"
                  />
                </kinesis-element>
                <kinesis-element :strength="9" type="depth">
                  <img
                    class="tw-m-auto tw-text-center tw-w-6"
                    src="../../assets/d-char.png"
                  />
                </kinesis-element>
                <kinesis-element :strength="15" type="depth_inv">
                  <img
                    class="tw-m-auto tw-text-center tw-w-8"
                    src="../../assets/a-char.png"
                  />
                </kinesis-element>
                <kinesis-element :strength="9" type="depth">
                  <img
                    class="tw-m-auto tw-text-center tw-w-6 tw-relative tw-top-2"
                    src="../../assets/y-char.png"
                  />
                </kinesis-element>
              </kinesis-container>
            </div>
          </kinesis-element>
        </kinesis-container>
      </kinesis-element>
    </kinesis-container>
    <p
      class="tw-absolute tw-bottom-4 tw-text-xs tw-ml-4"
      :class="mode ? 'tw-text-white' : 'tw-text-black'"
      small
      href='https://github.com/heydayle'
    >
    Heyday Lê since 2022
    </p>
    <cursor-fx
      :config="cursorConfig"
      color="#118ab2"
      color-hover="#06d6a0"
      outside-size="65px"
      hide-inside
    />
  </div>
</template>

<script>
import { KinesisContainer, KinesisElement } from "vue-kinesis";
import { CursorFx } from "@luxdamore/vue-cursor-fx";
export default {
  components: {
    KinesisContainer,
    KinesisElement,
    CursorFx,
  },
  data() {
    return {
      cursorConfig: {
        lerps: {
          dot: 0,
          circle: 0.2,
          custom: 0.23,
        },
        scale: {
          ratio: 0.18,
          min: 0.5,
          max: 1,
        },
        opacity: 0.8,
      },
      mode: true,
      dark: 'cloud.png',
      light: 'crescent.png'
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    changeMode() {
      this.mode = !this.mode
    }
  },
};
</script>
<style src="@luxdamore/vue-cursor-fx/dist/CursorFx.css"></style>
<style lang="scss">
a {
  cursor: normal !important;
}
img {
  position: relative;
}
.shape-h {
  bottom: 5.625rem;
  left: 9.6875rem;
}
.shape-y {
  top: 6.5625rem;
  right: 7.8125rem;
}
@for $i from 0 to 3 {
  .shape-wave-right-#{$i} {
    @if $i == 0 {
      top: 5.4375rem;
      right: 7.1875rem;
    }
    @if $i == 1 {
      top: 6.875rem;
      right: 12.75rem;
    }
    @if $i == 2 {
      top: 8.3125rem;
      right: 18.375rem;
    }
  }
}
@for $i from 0 to 3 {
  .shape-wave-left-#{$i} {
    @if $i == 0 {
      top: 8.25rem;
      left: 18.125rem;
    }
    @if $i == 1 {
      top: 6.875rem;
      left: 15.4375rem;
    }
    @if $i == 2 {
      top: 5.5rem;
      left: 12.8125rem;
    }
  }
}
</style>
