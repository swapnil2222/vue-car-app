<template>
  <div class="filter-container flex justify-center w-full h-auto">
    <div
      class="bg-white relative px-4 py-5 my-14 w-auto border-b border-gray-200 sm:px-6"
    >
      <div class="flex justify-center">
        <!-- Pick model -->
        <div class="flex px-4">
          <fieldset class=" bg-white">
            <legend class="block text-sm font-normal text-gray-500">
              Pick Model
            </legend>
            <div class="mt-1 rounded-md shadow-sm -space-y-px">
              <div>
                <label for="Model" class="sr-only">Model</label>
                <input
                  @input="onFilterChange()"
                  v-model="filter.model"
                  class="px-6 py-2 bg-white text-gray-700 border border-gray-300 outline-none rounded-lg"
                  type="text"
                  list="modelOptions"
                  name="modelOptions"
                />
                <datalist id="modelOptions">
                  <option
                    v-for="(opt, idx) in modelOptions"
                    :key="`${opt}-${idx}`"
                    :value="opt"
                  />
                </datalist>
              </div>
            </div>
          </fieldset>
        </div>
        <!-- Pick Year -->
        <div class="flex px-4">
          <fieldset class=" bg-white">
            <legend class="block text-sm font-normal text-gray-500">
              Pick year
            </legend>
            <div class="mt-1 rounded-md shadow-sm -space-y-px">
              <div>
                <label for="Year" class="sr-only">Year</label>
                <input
                  type="text"
                  @input="onFilterChange()"
                  list="yearOptions"
                  class="px-6 py-2 bg-white text-gray-700 border border-gray-300 outline-none rounded-lg"
                  v-model="filter.year"
                />
                <datalist id="yearOptions">
                  <option
                    v-for="(opt, idx) in yearOptions"
                    :key="`${opt}-${idx}`"
                    :value="opt"
                  />
                </datalist>
              </div>
            </div>
          </fieldset>
        </div>
        <!-- Search Car -->
        <div class="flex px-8">
          <fieldset class=" bg-white">
            <legend class="block text-sm font-normal text-gray-500">
              Search Car
            </legend>
            <div class="mt-1 rounded-md shadow-sm -space-y-px">
              <div>
                <label for="name" class="sr-only">Search By Name</label>
                <input
                  @input="onFilterChange()"
                  id="name"
                  type="text"
                  placeholder="Search car by name"
                  class="px-20 py-2 bg-white border text-gray-700 border-gray-300 outline-none rounded-lg"
                  v-model="filter.name"
                />
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// mock car data using js file
import mockData from '@/mock/data.js';
export default {
  name: 'CarFiltersList',
  data() {
    return {
      mockData: mockData,
      // object to store filter state
      filter: {
        model: '',
        year: '',
        name: '',
      },
    };
  },
  computed: {
    modelOptions() {
      // returns model options based on mock data
      const options = this.mockData.map((item) => item.model);
      return ['All', ...new Set(options)];
    },
    yearOptions() {
      // returns year options based on mock data
      const options = this.mockData.map((item) => item.year);
      return [...new Set(options)];
    },
  },
  mounted() {
    // set default value of filters
    if (this.modelOptions.length > 0) {
      this.filter.model = this.modelOptions[0];
    }
  },
  methods: {
    onFilterChange() {
      // when any filter state changes, trigger an event for the same
      this.$root.$emit('onFilterChange', this.filter);
    },
  },
};
</script>

<style>
.filter-container {
  background: #bdc3c7; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #2c3e50,
    #bdc3c7
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #2c3e50,
    #bdc3c7
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.h-30 {
  height: 30vh;
}
.w-full {
  width: 100vw;
}
</style>
