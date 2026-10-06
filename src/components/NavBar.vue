<script setup>
import { ref } from 'vue'

const isScrolled = ref(false)

if (typeof window !== 'undefined') {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 20
  })
}

const navLinks = [
  { name: 'About', href: '#about-me' },
  { name: 'Experience', href: '#jobs' },
  { name: 'Work', href: '#projects' },
  { name: 'Contact', href: '#contact' }
]
</script>

<template>
  <header 
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md',
      isScrolled ? 'bg-slate-950/90 border-b border-slate-800/80 py-3' : 'bg-transparent py-4 sm:py-6'
    ]"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
      <!-- Brand Logo (nowrap prevents <BZ / > from breaking onto two lines) -->
      <a 
        href="#" 
        class="font-mono text-emerald-400 font-bold text-base sm:text-lg tracking-wider whitespace-nowrap shrink-0 hover:opacity-80 transition-opacity"
      >
        &lt;BZ /&gt;
      </a>

      <!-- Navigation Links -->
      <nav class="flex items-center gap-3 sm:gap-6 md:gap-8">
        <ul class="flex items-center gap-2.5 sm:gap-5 md:gap-6">
          <li v-for="(link, idx) in navLinks" :key="link.name">
            <a 
              :href="link.href" 
              class="text-[11px] sm:text-xs font-mono text-slate-300 hover:text-emerald-400 transition-colors whitespace-nowrap"
            >
              <!-- Number prefix only visible on tablet/desktop -->
              <span class="hidden sm:inline text-emerald-400 mr-1">0{{ idx + 1 }}.</span>
              {{ link.name }}
            </a>
          </li>
        </ul>

        <!-- Resume Button: hidden on small phones to prevent edge crowding -->
        <!-- <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          class="hidden sm:inline-block rounded border border-emerald-400 px-3 py-1 text-xs font-mono text-emerald-400 hover:bg-emerald-400/10 transition-colors shrink-0"
        >
          Resume
        </a> -->
      </nav>
    </div>
  </header>
</template>