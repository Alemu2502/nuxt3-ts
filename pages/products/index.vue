<template>
<div class="grid grid-cols-4 gap-5">
    <div v-for='p in products'>
<productCard :product='p' />
    </div>
</div>


</template>

<script setup>
const {data: products} = await useFetch('https://fakestoreapi.com/products');

 definePageMeta({
    layout: "products",
 })

 useHead({
    title: "Alex's Nuxt3 Portfolio",
    meta: [
        {name: "description", content: 'this is my nuxt3 portfolio'}
    ]
 })

</script>