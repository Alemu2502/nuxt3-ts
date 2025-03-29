<template>
<div>
    <productDetails :product="product"/>
</div>


</template>

<script setup>
const {id} = useRoute().params;
const uri =  'https://fakestoreapi.com/products/' + id;

const {data: product}  = await useFetch(uri, {key: id});

if(!product.value){
   throw createError({statusCode: 404, statusMessage: "page not found"})
}

definePageMeta({
    layout: "products",
})


useHead({
    title: "Alex's Nuxt3 Portfolio",
    meta: [
        {name: "description", content: 'this is my nuxt3 portfolio'}
    ],
    link: [{ rel: 'canonical', href: 'https://alemumolla-nuxt3.netlify.app/' }],
 })
</script>