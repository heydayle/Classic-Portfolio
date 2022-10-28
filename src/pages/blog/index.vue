<script setup>
import { ref, computed, defineExpose } from "vue";
import $store from "@/store";

const router = ref(null);

defineExpose({
  modeStyle,
  mode,
  postList,
  router,
  goBack,
});
//region [MODE]
const mode = computed(() => $store.state.common.mode);
const modeStyle = computed(() => $store.state.common.modeStyle);
//#endregion

//region [LIST]
const postList = [];

//#endregion

const goBack = () => {
  router.value.go(-1);
};
</script>
<script>
export default {
  watch: {
    $router: {
      handler(router) {
        this.router = router;
      },
      immediate: true,
    },
  },
};
</script>
<template>
  <v-card flat>
    <!--region @Navigator-->
    <v-card-title
        :class="`tw-bg-${mode ? 'black' : 'white'}`"
      class="tw-flex tw-items-center tw-p-2 tw-sticky tw-top-0 tw-z-10 tw-border tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-b-1"
    >
      <v-btn icon title="Go home" @click="goBack">
        <v-icon> mdi-arrow-left </v-icon>
      </v-btn>
      <div
        class="tw-flex-1 tw-text-md tw-text-center tw-pl-4 tw-font-bold"
        v-text="`BLOG`"
      >
      </div>
      <v-btn icon title="Go home" @click="goBack">
        <v-icon> mdi-arrow-right </v-icon>
      </v-btn>
    </v-card-title>
    <!--endregion-->
    <!--region @Main blog-->
    <div class="tw-p-4">
      <v-container>
        <v-row>
          <v-col cols="12" :sm="6" :md="4" :lg="3" v-for="(item, index) in 8" :key="index">
            <v-hover v-slot="{ hover }">
              <v-card
                class="tw-border tw-rounded tw-rounded-2xl tw-transition tw-transition-all tw-duration-100"
                border
                elevation="13"
              >
                <v-card-title>
                  <v-img
                    src="../../assets/heyday.png"
                    height="100"
                    class="tw-rounded-xl c-filter"
                    :class="{ 'tw-filter-none': hover }"
                  >
                    Post {{ item }}
                  </v-img>
                </v-card-title>
                <v-card-text>
                  <p class="tw-line-clamp-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Est necessitatibus quam voluptatem? Ad adipisci aliquid
                    autem consectetur et, ex facere, facilis hic iste molestiae
                    odio quae quia quos repellat ullam.
                  </p>
                </v-card-text>
                <v-card-actions>
                  <div class="tw-flex tw-flex-1">
                    <v-btn title="Share on Facebook" icon small>
                      <v-icon> mdi-facebook </v-icon>
                    </v-btn>
                    <div class="tw-flex tw-flex-1 tw-w-full tw-justify-end">
                      <v-expand-transition popout>
                        <v-btn
                          v-if="hover"
                          class="tw-animate-bounceHorizontal"
                          icon
                          small
                          title="Go to detail"
                        >
                          <v-icon> mdi-arrow-right </v-icon>
                        </v-btn>
                      </v-expand-transition>
                    </div>
                  </div>
                </v-card-actions>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!--endregion-->
  </v-card>
</template>
