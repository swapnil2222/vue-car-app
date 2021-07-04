<template>
  <div class="text-gray-700 m-auto my-4 text-center">
    <div>
      <h1 class="text-4xl">Available Cars</h1>
    </div>
    <!-- show cars list using card -->
    <div
      v-if="carsList.length > 0"
      class="flex flex-row justify-center flex-wrap bg-gray-50"
    >
      <div v-for="(item, idx) in carsList" :key="idx" class="flex mx-5 my-3">
        <div class="flex ">
          <div>
            <div class="w-72">
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
                      @click="viewDetails(item)"
                      class="bg-gray-400 text-white w-full px-auto
                     py-2 rounded-lg"
                    >
                      More Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="my-10" v-else>
      <span class="text-2 xl">No data found for selected filters.</span>
    </div>
  </div>
</template>

<script>
import mockData from '@/mock/data.js';
export default {
  name: 'CarList',
  data() {
    return {
      carsList: [],
    };
  },
  mounted() {
    // initialize cars list using mock data
    this.carsList = mockData;
    // listen for filter state change
    this.$root.$on('onFilterChange', this.handleFilterChange);
    // initialize infinite scroll
    this.getMoreData();
  },
  methods: {
    handleFilterChange(filterObj) {
      // filter cars data based on filter state.
      // if model value is all then get all models with the specified year and name
      this.carsList = mockData.filter(
        (car) =>
          (filterObj.model === 'All' || car.model === filterObj.model) &&
          (filterObj.year === '' || car.year === filterObj.year) &&
          car.name.toLowerCase().includes(filterObj.name),
      );
    },
    viewDetails(items) {
      // go to details page of specific car
      this.$router.push({ name: 'ItemDetails', params: { items } });
    },
    getMoreData() {
      // on scroll check if bottom of page is  reached,
      // on success append mock data to existing car data
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;
        let vm = this;
        if (bottomOfWindow) {
          // append after 5s
          setTimeout(() => vm.carsList.push(...mockData), 500);
        }
      };
    },
  },
};
</script>

<style></style>
