<template>
<div>
  <div class="tw-overflow-hidden p-4 tw-flex tw-items-center tw-justify-center" style="height: 85vh">
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
      <kinesis-element :strength="20" type="depth">
        <a href="https://fb.com/heydaysea">
          <img class="tw-m-auto tw-text-center tw-w-26" src="../../assets/social.png"/>
        </a>
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
    bottom: 90px;
    left: 155px
  }
  .shape-y {
    top: 105px;
    right: 125px;
  }
  @for $i from 0 to 3 {
    .shape-wave-right-#{$i} {
      @if $i == 0 {
        top: 87px;
        right: 115px;
      }
      @if $i == 1 {
        top: 110px;
        right: 204px;
      }
      @if $i == 2 {
        top: 133px;
        right: 294px;
      }
    }
  }
  @for $i from 0 to 3 {
    .shape-wave-left-#{$i} {
      @if $i == 0 {
        top: 132px;
        left: 290px;
      }
      @if $i == 1 {
        top: 110px;
        left: 247px;
      }
      @if $i == 2 {
        top: 88px;
        left: 205px;  
      }
    }
  }
  
</style>
