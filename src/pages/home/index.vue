<template>
<div>
  <div class="tw-overflow-hidden tw-pt-6 tw-flex tw-items-center tw-justify-center tw-w-70" style="height: 75vh">
    <kinesis-container class="tw-my-auto">
        <kinesis-element class="tw-flex" :strength="10" type="depth">
          <!-- <img class="tw-m-auto tw-text-center tw-w-60" src="../../assets/heyday.png"/> -->
          <kinesis-element :strength="20" type="depth_inv">
            <img class="shape-wave-left-0 tw-m-auto tw-text-center tw-w-26" src="../../assets/wave2.png"/>
          </kinesis-element>
          <kinesis-element :strength="20" type="depth_inv">
            <img class="shape-wave-left-1 tw-m-auto tw-text-center tw-w-26" src="../../assets/wave2.png"/>
          </kinesis-element>
          <kinesis-element :strength="20" type="depth_inv">
            <img class="shape-wave-left-2 tw-m-auto tw-text-center tw-w-26" src="../../assets/wave2.png"/>
          </kinesis-element>
          <kinesis-element :strength="10" type="depth">
            <img class="shape-h tw-m-auto tw-text-center tw-w-34" src="../../assets/h.png"/>
          </kinesis-element>
          <kinesis-element :strength="10" type="depth_inv">
            <img class="shape-y tw-m-auto tw-text-center tw-w-26" src="../../assets/y3.png"/>
          </kinesis-element>
          <kinesis-element :strength="20" type="depth">
            <img class="shape-wave-right-0 tw-m-auto tw-text-center tw-w-26" src="../../assets/wave1.png"/>
          </kinesis-element>
          <kinesis-element :strength="20" type="depth">
            <img class="shape-wave-right-1 tw-m-auto tw-text-center tw-w-26" src="../../assets/wave1.png"/>
          </kinesis-element>
          <kinesis-element :strength="20" type="depth">
            <img class="shape-wave-right-2 tw-m-auto tw-text-center tw-w-26" src="../../assets/wave1.png"/>
          </kinesis-element>
        </kinesis-element>
    </kinesis-container>
  </div>
  <kinesis-container>
    <kinesis-element :strength="10" type="depth">
      <div>
        <kinesis-container class="tw-flex tw-justify-center tw-items-end tw-pb-4 tw-space-x-2">
          <kinesis-element :strength="10" type="depth">
            <img class="tw-m-auto tw-text-center tw-w-6" src="../../assets/h-char.png"/>
          </kinesis-element>
          <kinesis-element :strength="7" type="depth_inv">
            <img class="tw-m-auto tw-text-center tw-w-6" src="../../assets/e-char.png"/>
          </kinesis-element>
          <kinesis-element :strength="6" type="depth">
            <img class="tw-m-auto tw-text-center tw-w-6" src="../../assets/y-char.png"/>
          </kinesis-element>
          <kinesis-element :strength="9" type="depth">
            <img class="tw-m-auto tw-text-center tw-w-6" src="../../assets/d-char.png"/>
          </kinesis-element>
          <kinesis-element :strength="15" type="depth_inv">
            <img class="tw-m-auto tw-text-center tw-w-8" src="../../assets/a-char.png"/>
          </kinesis-element>
          <kinesis-element :strength="9" type="depth">
            <img class="tw-m-auto tw-text-center tw-w-6" src="../../assets/y-char.png"/>
          </kinesis-element>
        </kinesis-container>
      </div>
      <div class="tw-flex tw-justify-center tw-space-x-8">
        <kinesis-container>
          <kinesis-element :strength="20" type="depth">
            <a href="https://fb.com/heydaysea">
              <img class="tw-m-auto tw-text-center tw-w-26" src="../../assets/social.png"/>
            </a>
          </kinesis-element>
        </kinesis-container>
        <kinesis-container>
          <kinesis-element :strength="20" type="depth_inv">
            <a href="https://instagram.com/heyday.le">
              <img class="tw-m-auto tw-text-center tw-w-26" src="../../assets/instagram.png"/>
            </a>
          </kinesis-element>
        </kinesis-container>
        <kinesis-container>
          <kinesis-element :strength="20" type="depth">
            <a href="https://linkedin.com/in/thinh-le-profile">
              <img class="tw-m-auto tw-text-center tw-w-26" src="../../assets/linkedin.png"/>
            </a>
          </kinesis-element>
        </kinesis-container>
        <kinesis-container>
          <kinesis-element :strength="20" type="depth_inv">
            <a href="https://github.com/heydayle">
              <img class="tw-m-auto tw-text-center tw-w-26" src="../../assets/github.png"/>
            </a>
          </kinesis-element>
        </kinesis-container>
      </div>
    </kinesis-element>
  </kinesis-container>
</div>
  
</template>

<script>
import { KinesisContainer, KinesisElement, } from "vue-kinesis";
export default {
  components: {
    KinesisContainer,
    KinesisElement,
  },
  data() {
    return {
      audio:
        "https://open.spotify.com/track/5hgX8pSZSOcKhsvzldsgWy?si=0a153b813aca41be",
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss">
  img {
    position: relative;
  }
  .shape-h {
    bottom: 5.625rem;
    left: 9.6875rem
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
