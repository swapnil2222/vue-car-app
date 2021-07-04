<template>
  <div class="w-96 mx-auto my-8">
    <div
      class="shadow hover:shadow-lg transition duration-300 ease-in-out xl:mb-0 lg:mb-0 md:mb-0 mb-6 cursor-pointer group"
    >
      <div class="overflow-hidden relative">
        <img
          class="w-full transition duration-700 ease-in-out group-hover:opacity-60"
          :src="item.thumbnail"
          alt="image"
        />
      </div>
      <div class="px-4 py-3 bg-white">
        <div class="flex py-2">
          <h1 class="text-lg font-bold">{{ item.name }}</h1>
        </div>
        <div class="flex py-2">
          <span class="font-bold">Model: </span>
          <span class="mx-1">{{ item.model }}</span>
        </div>
        <div class="flex">
          <span class="font-bold">Year: </span>
          <span class="mx-1">{{ item.year }}</span>
        </div>
        <div class="flex py-6">
          <button
            @click="back()"
            class="bg-gray-400 text-white w-full px-auto
                     py-2 rounded-lg"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ItemDetails',
  data() {
    return {
      item: {},
    };
  },
  mounted() {
    if (this.$route.params.items) {
      this.item = this.$route.params.items;
    } else {
      this.back();
    }
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>
