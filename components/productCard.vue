<template>
<div class="card text-center">
    <img :src="`${ product.image }`" class="max-h-[120px] max-w-[70%] m-0" />
    <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
    <NuxtLink :to="`/products/${product.id}`">
        <p class="btn my-4 ">View details</p>
    </NuxtLink>
</div>


</template>

<script setup>
const {product} = defineProps(['product'])

</script>
