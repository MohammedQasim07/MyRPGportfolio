<script setup>
import { skillsData } from '../../data/content.js';
</script>

<template>
  <div class="h-full flex flex-col">
    <h3 class="pixel-font text-lg md:text-xl border-b-2 border-white pb-3 mb-4 text-purple-300 shrink-0">
      SPELL BOOK (Skills)
    </h3>
    
    <div class="flex-1 min-h-0 overflow-y-auto custom-scroll">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 pb-24 md:pb-0">
        
        <div v-for="spell in skillsData" :key="spell.name" 
             class="bg-blue-900/20 border border-blue-500/30 p-3 md:p-4 hover:bg-blue-900/40 transition-all duration-200 hover:border-yellow-400 group active:scale-[0.98]">
          
          <div class="flex justify-between items-center mb-2">
            <span class="font-bold text-cyan-300 group-hover:text-white transition-colors text-sm md:text-base">
              {{ spell.name }}
            </span>
            <span class="text-[10px] text-yellow-500 bg-yellow-900/30 px-2 py-1 rounded border border-yellow-500/20 whitespace-nowrap">
              {{ spell.cost }}
            </span>
          </div>
          
          <p class="text-xs text-gray-400 font-mono leading-relaxed">
            {{ spell.desc }}
          </p>
        </div>

      </div>
    </div>
  </div>
</template>