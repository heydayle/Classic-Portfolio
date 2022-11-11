<template>
  <v-card flat color="transparent" class="tw-py-4 tw-m-auto tw-text-center">
    <div class="tw-text-4xl tw-mb-2">HEYDAY</div>
    <div class="tw-mb-2 tw-space-x-2">
      <v-btn
          v-for="(item, index) in info.social"
          :href="item.href"
          :key="index"
          target="_blank"
          icon
      >
        <v-icon>
          {{ item.iconUrl }}
        </v-icon>
      </v-btn>
    </div>
    <div class="tw-flex tw-flex-col">
      <template v-for="(route, index) in routes">
        <v-hover v-slot="{ hover }" :key="index">
          <v-btn
              plain
              @click="$router.push(route.path)"
          >
            {{ route.name }}
            <div class="tw-w-1.5">
              <v-icon v-if="hover" class="tw-animate-bounceHorizontal">
                mdi-arrow-right
              </v-icon>
            </div>

          </v-btn>
        </v-hover>
      </template>
    </div>
  </v-card>
</template>

<script>
import info from "../../enums/infomation";
export default {
  data() {
    return {
      info,
      routes: [
        {
          path: '/portfolio',
          name: 'portfolio'
        },
        {
          path: '/blog',
          name: 'blog'
        },
      ]
    }
  }
}
</script>
