import { defineNuxtConfig } from 'nuxt/config';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

export default defineNuxtConfig({
  ssr: true,
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sitemap'],
  css: ['./assets/css/tailwind.css'],
  app: {
    head: {
      title: "Alex's Nuxt3 Portfolio",
      meta: [
        { name: 'description', content: 'my nuxt3 portfolio' },
        { name: 'google-site-verification', content: 'lJ22SY9sdhR0jXq29GbZQgp88UyvnawYTvgkyJatsxI' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
      ]
    }
  },
  sitemap: {
    siteUrl: 'https://alemumolla-nuxt3.netlify.app',
    generate: true, 
    async routes() {
      const { data: products }: { data: Product[] } = await fetch('https://fakestoreapi.com/products')
        .then((res) => res.json());
      return products.map((product: Product) => `/products/${product.id}`);
    },
  },
});
