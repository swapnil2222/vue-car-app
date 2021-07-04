<template>
  <div class="flex flex-col justify-center align-center">
    <!-- filter component goes here -->
    <div class="flex flex-1 width-100">
      <FiltersList />
    </div>
    <!-- car list component goes here -->
    <div class="flex ">
      <List />
    </div>
  </div>
</template>
<script>
// add filter and car list components
import List from '@/components/cars/List.vue';
import FiltersList from '@/components/cars/FiltersList.vue';
export default {
  name: 'App',
  components: { List, FiltersList },
};
</script>
