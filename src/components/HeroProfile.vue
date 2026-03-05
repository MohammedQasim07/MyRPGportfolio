<script setup>
import { heroData } from '../data/content.js';

defineEmits(['change-tab']);
defineProps(['activeTab']);
</script>

<template>
  <div class="space-y-4 h-full">
    
    <div class="rpg-box p-4 md:p-6 flex flex-col items-center text-center">
      <div class="w-20 h-20 md:w-24 md:h-24 bg-black border-2 border-white rounded mb-4 breathing flex items-center justify-center overflow-hidden relative shadow-lg">
         <div class="absolute inset-0 bg-blue-900 opacity-50"></div>
         <span class="text-4xl md:text-5xl relative z-10">👨‍💻</span>
      </div>
      
      <h2 class="pixel-font text-yellow-400 text-xs md:text-sm mb-2">{{ heroData.name }}</h2>
      <span class="text-[10px] md:text-xs text-cyan-200 bg-blue-900/50 px-2 py-1 rounded border border-blue-500/30">
        {{ heroData.class }}
      </span>
      
      <div class="w-full mt-6 space-y-2 font-mono text-[10px] text-left">
        <div class="flex justify-between text-green-400"><span>HP</span> <span>100%</span></div>
        <div class="h-1.5 bg-gray-700 rounded-full overflow-hidden"><div class="h-full bg-green-500 w-full"></div></div>
        
        <div class="flex justify-between text-blue-400 mt-1"><span>MP</span> <span>FULL</span></div>
        <div class="h-1.5 bg-gray-700 rounded-full overflow-hidden"><div class="h-full bg-blue-500 w-full"></div></div>
      </div>
    </div>

    <div class="rpg-box p-4 flex-1">
      <ul class="space-y-2 font-mono text-sm">
        <li v-for="tab in ['STORY', 'SKILLS', 'QUESTS', 'CONTACT']" :key="tab"
            @click="$emit('change-tab', tab)" 
            class="cursor-pointer hover:bg-white/10 p-3 rounded transition-all flex items-center gap-3 group"
            :class="activeTab === tab ? 'text-yellow-300 border border-yellow-300/50 bg-yellow-900/10' : 'text-gray-400'">
          <span class="text-lg">{{ activeTab === tab ? '⚔️' : '🛡️' }}</span>
          <span class="group-hover:translate-x-1 transition-transform">{{ tab }}</span>
        </li>
      </ul>
    </div>

  </div>
</template>