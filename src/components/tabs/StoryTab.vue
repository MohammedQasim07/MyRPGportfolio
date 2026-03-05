<script setup>
import { bioText } from '../../data/content.js';
</script>

<template>
  <div class="h-full flex flex-col">
    <h3 class="pixel-font text-lg md:text-xl border-b-2 border-white pb-3 mb-4 text-yellow-300 shrink-0">
      HERO BACKGROUND
    </h3>
    
    <div class="flex-1 min-h-0 overflow-y-auto custom-scroll">
      <div class="bg-white/5 p-4 md:p-6 border border-white/20 rounded leading-loose font-mono text-sm md:text-lg text-gray-200 pb-24 md:pb-6" dir="ltr">
        
        <p class="mb-4 relative">
          <span class="text-3xl text-yellow-400 absolute -left-3 -top-2 opacity-50">"</span>
          <span class="relative z-10">{{ bioText }}</span>
        </p>
        
        <div class="mt-6 border-t border-gray-700 pt-4 text-xs md:text-sm text-gray-400 font-mono space-y-2">
          <p class="flex items-center gap-2">
            <span class="text-green-400">➤</span> CURRENT OBJECTIVE: Internship / Freelance.
          </p>
          <p class="flex items-center gap-2">
            <span class="text-green-400">➤</span> LOCATION: Baghdad, Iraq.
          </p>
        </div>

      </div>
    </div>
  </div>
</template>