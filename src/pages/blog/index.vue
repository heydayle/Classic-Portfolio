<script setup>
import { ref, computed, defineExpose } from "vue"
import style from "../../enums/style";
import $store from '@/store';


const router = ref(null);

defineExpose({modeStyle, mode, router, goBack})
const modeStyle = ref(style)
const mode = () => computed(() => {
  $store.state.common.mode
})
const goBack = () => {
  router.value.go(-1)
}
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
}
</script>
<template>
  <div>
    <v-btn
      icon
      @click="goBack"
    >
      <v-icon>
        mdi-arrow-left
      </v-icon>
    </v-btn>
    <div
        class="tw-text-md tw-text-center tw-pl-4 tw-font-bold"
    >
      Blog
    </div>
  </div>
</template>
