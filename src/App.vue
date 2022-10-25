<template>
  <v-app>
    <v-main>
      <div class="tw-p-4 tw-text-white">
        <router-view :key="$route.fullPath" />
        <!--region @Footer-->
        <div
            class="tw-fixed tw-flex tw-justify-between tw-w-full tw-bottom-0 tw-text-xs tw-py-2 tw-px-6"
        >
          <v-btn icon class="tw-ml-auto" @click="changeMode">
            <template v-if="!mode">
              <svg
                  width="16"
                  height="16"
                  viewBox="0 0 512 512"
                  class="tw-animate-fadeInTop100"
              >
                <path
                    fill="white"
                    d="M152.62 126.77c0-33 4.85-66.35 17.23-94.77C87.54 67.83 32 151.89 32 247.38C32 375.85 136.15 480 264.62 480c95.49 0 179.55-55.54 215.38-137.85c-28.42 12.38-61.8 17.23-94.77 17.23c-128.47 0-232.61-104.14-232.61-232.61Z"
                />
              </svg>
            </template>
            <template v-else>
              <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  class="tw-animate-tiktokIn"
              >
                <path
                    fill="black"
                    d="M11 5V1h2v4Zm6.65 2.75l-1.375-1.375l2.8-2.875l1.4 1.425ZM19 13v-2h4v2Zm-8 10v-4h2v4ZM6.35 7.7L3.5 4.925l1.425-1.4L7.75 6.35Zm12.7 12.8l-2.775-2.875l1.35-1.35l2.85 2.75ZM1 13v-2h4v2Zm3.925 7.5l-1.4-1.425l2.8-2.8l.725.675l.725.7ZM12 18q-2.5 0-4.25-1.75T6 12q0-2.5 1.75-4.25T12 6q2.5 0 4.25 1.75T18 12q0 2.5-1.75 4.25T12 18Z"
                />
              </svg>
            </template>
          </v-btn>
        </div>
        <!--endregion-->
      </div>
    </v-main>
  </v-app>
</template>
<script>
export default {
  created() {
    this.track()
  },
  computed: {
    mode() {
      return this.$store?.state?.common?.mode
    }
  },
  methods: {
    track () {
      this.$ga.page('/')
    },
    changeMode() {
      this.$store.dispatch(`common/CHANGE_MODE`, this.mode)
      this.$vuetify.theme.dark = !this.mode
    }
  }
};
</script>
<style lang="scss" scope>
  @import "./styles"
</style>
