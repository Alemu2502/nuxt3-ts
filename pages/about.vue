<template>
  <div class="bg-gray-50 min-h-screen p-8">
    <div class="max-w-[800px] mx-auto space-y-8">
      <h1 class="text-4xl font-bold text-gray-800 text-center">About Alemu</h1>
      <p class="text-lg text-gray-700 leading-relaxed">
        Hello! I'm Alemu, a Full Stack Developer specializing in Nuxt 3. With a strong focus on delivering high-quality, scalable, and responsive web applications, I bring years of experience to the table. Whether it's backend optimization, frontend design, or state management with Pinia, I excel at crafting solutions that perform exceptionally well.
      </p>
      <div>
        <h2 class="text-2xl font-bold text-gray-800">Technical Skills</h2>
        <ul class="list-disc list-inside text-gray-700 mt-4">
          <li>Proficient in Vue.js, Nuxt 3, and TypeScript</li>
          <li>Expert in TailwindCSS for designing responsive UIs</li>
          <li>Strong knowledge of REST and GraphQL APIs</li>
          <li>State management with Pinia</li>
          <li>Experience in CI/CD pipelines and Docker</li>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-bold text-gray-800">Why Hire Me?</h2>
        <p class="text-lg text-gray-700 mt-4">
          My goal is to solve challenging problems and deliver reliable solutions. With my proactive approach, I'm always learning new technologies and improving my skills to keep up with industry best practices.
        </p>
      </div><div>
      <NuxtLink
        to="/"
        class="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
      >
        Back to Home
      </NuxtLink>
    </div>
    </div>
  </div>
</template>
