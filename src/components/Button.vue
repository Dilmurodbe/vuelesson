
<script>
export default {
  name: "ButtonComponent",
  props: {
    name: {
      default: "Submit Button",
      type: String,
    },
  },
};
</script>

<template>
  <button class="loginbtn">{{ name }}</button>
</template>

<style></style>

<!-- <script setup>
import {ref} from "vue";
const count = ref (0);

</script>
<template>
<h1>hi is counter</h1>
{{ count }}
<button @click="count++">+</button>
</template> -->