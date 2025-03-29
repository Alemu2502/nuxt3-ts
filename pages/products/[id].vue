<template>
<div>
<head>
    <Title>Alex's Nuxt3 Portfolio</Title>
    <Meta name="description" content='this is my nuxt3 portfolio' />
</head>

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
</script>