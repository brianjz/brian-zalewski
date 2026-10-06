<script setup lang="ts">
import { ref } from 'vue'
import projectsData from '../data/projects.json'
import { Project } from '../data/types'

const projects = ref<Project[]>(projectsData)
</script>

<template>
  <section id="projects" class="max-w-6xl mx-auto px-6 py-24">
    <div class="flex items-center gap-4 mb-12">
      <h2 class="text-2xl font-bold text-slate-100 flex items-center gap-2">
        <span class="font-mono text-emerald-400 text-lg">03.</span> Some Things I've Built
      </h2>
      <div class="h-[1px] bg-slate-800 flex-grow max-w-xs"></div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div 
        v-for="project in projects" 
        :key="project.title"
        class="group flex flex-col justify-between rounded-lg border border-slate-800 bg-slate-900/40 transition-all duration-200 hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-900/80"
      >
        <img :src="`/images/${project.title.replace(/\s+/g, '-')}.png`" :alt="project.title" class="w-full h-50 object-cover" />
        <div class="p-6">
          <!-- Header Icons / Source -->
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-3">
              <a 
                v-if="project.url.indexOf('github.com') !== -1" 
                :href="project.url" 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-slate-400 hover:text-emerald-400 transition-colors text-sm font-mono"
                title="View GitHub Repository"
              >
                GitHub &rarr;
              </a>
              <a 
                v-if="project.url && project.url.indexOf('github.com') === -1" 
                :href="project.url" 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-slate-400 hover:text-emerald-400 transition-colors text-sm font-mono"
                title="Open Live Preview"
              >
                Live &rarr;
              </a>
            </div>
          </div>

          <h3 class="text-lg font-semibold text-slate-100 group-hover:text-emerald-400 transition-colors">
            {{ project.title }}
          </h3>

          <p class="mt-3 text-sm text-slate-400 leading-relaxed">
            {{ project.description }}
          </p>
        </div>

        <!-- Tech Stack Badges -->
        <div class="mt-6 pt-4 p-6 border-t border-slate-800/60 flex flex-wrap gap-2">
          <span 
            v-for="tech in project.technologies" 
            :key="tech.name"
            class="text-xs font-mono text-slate-400 border-1 border-slate-800/60 rounded px-2 py-1"
          >
            {{ tech.name }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>