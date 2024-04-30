<script>
import mask from "@/mask/mask.js";

export default {
    name: "App",

    data() {
        return {
            phoneValue: "+375",
        };
    },

    mounted() {
        mask(this.$refs["phoneInput"]);
    },
};
</script>

<template>
    <h1>Country mask for phones</h1>
    <input
        v-model="phoneValue"
        ref="phoneInput"
        type="text"
        placeholder="Enter phone number"
    />
</template>
