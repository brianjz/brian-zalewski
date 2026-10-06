<script setup lang="ts">
import { ref } from 'vue'
import jobsData from '../data/jobs.json'
import type { Job } from '../data/types'

const jobs = ref<Job[]>(
  jobsData.map(job => ({
    ...job,
    startDate: new Date(job.startDate),
    endDate: job.endDate ? new Date(job.endDate) : null
  }))
);
const activeIndex = ref(0)
</script>

<template>
  <section id="jobs" class="max-w-6xl mx-auto px-6 py-24">
    <!-- Section Heading -->
    <div class="flex items-center gap-4 mb-10">
      <h2 class="text-2xl font-bold text-slate-100 flex items-center gap-2">
        <span class="font-mono text-emerald-400 text-lg">02.</span> Where I've Worked
      </h2>
      <div class="h-[1px] bg-slate-800 flex-grow max-w-xs"></div>
    </div>

    <!-- Mobile Dropdown Selector (Visible below md) -->
    <div class="block md:hidden mb-6">
      <label for="job-select" class="sr-only">Select Company</label>
      <select
        id="job-select"
        v-model="activeIndex"
        class="w-full rounded-md border border-slate-700 bg-slate-900 px-4 py-3 font-mono text-sm text-emerald-400 focus:border-emerald-400 focus:outline-none"
      >
        <option v-for="(job, idx) in jobs" :key="job.company" :value="idx">
          {{ job.company }}
        </option>
      </select>
    </div>

    <div class="flex flex-col md:flex-row gap-8">
      <!-- Desktop Vertical Tabs (Hidden on mobile) -->
      <div class="hidden md:flex md:flex-col border-l border-slate-800 shrink-0">
        <button
          v-for="(job, idx) in jobs"
          :key="job.company"
          type="button"
          @click="activeIndex = idx"
          :class="[
            'px-5 py-3 text-left font-mono text-xs transition-all whitespace-nowrap -ml-[2px] cursor-pointer',
            activeIndex === idx
              ? 'text-emerald-400 border-l-2 border-emerald-400 bg-slate-900/60 font-semibold'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/30'
          ]"
        >
          {{ job.company }}
        </button>
      </div>

      <!-- Active Job Content Panel -->
      <div v-if="jobs[activeIndex]" class="flex-grow min-h-[280px]">
        <h3 class="text-xl font-medium text-slate-200">
          <span>{{ jobs[activeIndex].title }}</span>
          <span class="text-emerald-400 ml-1">
            @
            <a
              v-if="jobs[activeIndex].url"
              :href="jobs[activeIndex].url"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:underline transition-all"
            >
              {{ jobs[activeIndex].company }}
            </a>
            <span v-else>{{ jobs[activeIndex].company }}</span>
          </span>
        </h3>

        <p class="font-mono text-xs text-slate-400 mt-1 mb-6">
          {{ jobs[activeIndex].startDate.getFullYear() }} - {{ jobs[activeIndex].endDate ? jobs[activeIndex].endDate?.getFullYear() : 'Present' }} | {{ jobs[activeIndex].location }}
        </p>

        <!-- Responsibilities List -->
        <ul class="space-y-3">
          <li
            v-for="(duty, i) in jobs[activeIndex].duties"
            :key="i"
            class="flex items-start text-sm text-slate-400 leading-relaxed"
          >
            <span class="text-emerald-400 mr-3 select-none leading-5">▹</span>
            <span>{{ duty }}</span>
          </li>
        </ul>

        <div v-if="jobs[activeIndex].note">
            <hr class="my-4 border-slate-800" />
            <p class="ms-5 mt-4 text-xs font-mono text-slate-400">
                <span class="text-blue-400 mr-3 select-none leading-5">▹</span> 
                More Info: <a :href="jobs[activeIndex].noteurl" target="_blank" rel="noopener noreferrer" class="text-slate-200 hover:underline transition-all">
                    {{ jobs[activeIndex].note }}
                </a>
            </p>
        </div>
      </div>
    </div>
  </section>
</template>