<script setup>
const techList = [
  'C# / .NET',
  'Vue.js',
  'TypeScript',
  'SQL Server',
  'Python',
  'PHP'
]
</script>

<template>
  <section id="about" class="min-h-screen flex flex-col justify-center max-w-5xl mx-auto px-6 pt-24 pb-16">
    <div class="space-y-4">
      <p class="font-mono text-emerald-400 text-sm tracking-wide">
        Hi, my name is
      </p>
      
      <h1 class="text-5xl sm:text-7xl font-bold tracking-tight text-slate-100">
        Brian Zalewski.
      </h1>
      
      <h2 class="text-4xl sm:text-5xl font-bold tracking-tight text-slate-400">
        I engineer backend systems & modern web applications.
      </h2>
      
      <p class="max-w-2xl text-slate-400 text-base sm:text-lg leading-relaxed pt-2">
        I am a software engineer focused on building resilient data infrastructure, 
        monitoring systems, and performant web interfaces. Experienced in .NET architectures, 
        clean REST APIs, and component-driven frontends.
      </p>

      <!-- Active Core Tech Badges -->
      <div class="pt-4">
        <p class="text-xs font-mono text-slate-500 mb-3">Technologies I work with frequently:</p>
        <ul class="flex flex-wrap gap-2 max-w-lg">
          <li 
            v-for="tech in techList" 
            :key="tech"
            class="rounded bg-slate-900 border border-slate-800 px-2.5 py-1 text-xs font-mono text-emerald-300"
          >
            {{ tech }}
          </li>
        </ul>
      </div>

      <div class="pt-6 flex gap-4">
        <a 
          href="#projects" 
          class="rounded bg-emerald-400/10 border border-emerald-400 text-emerald-400 px-6 py-3 text-sm font-mono hover:bg-emerald-400/20 transition-colors"
        >
          Check out my work
        </a>
        <a 
          href="#contact" 
          class="rounded border border-slate-700 text-slate-300 px-6 py-3 text-sm font-mono hover:border-slate-500 hover:text-white transition-colors"
        >
          Get in touch
        </a>
      </div>
    </div>
  </section>
</template>