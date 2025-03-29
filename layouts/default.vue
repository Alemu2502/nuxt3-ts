<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold text-3xl">My Portfolio</NuxtLink>
        <ul class="flex gap-4">
          <li>
            <NuxtLink to="/" class="text-gray-500 hover:text-green-500" 
              :class="{ '!text-[#12b488]': $route.path === '/' }">
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class="text-gray-500 hover:text-green-500" 
              :class="{ '!text-[#12b488]': $route.path === '/about' }">
              About
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/products" class=" text-gray-500 hover:text-green-500" 
              :class="{ '!text-[#12b488]': $route.path === '/products' }">
              Products
            </NuxtLink>
          </li>
        </ul> 
      </nav>
    </header>
    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>
