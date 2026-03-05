<script setup>
import { ref, computed } from 'vue';
import { questsData } from '../../data/content.js';

const selectedQuestId = ref(1);

const currentQuest = computed(() => {
  return questsData.find(q => q.id === selectedQuestId.value);
});
</script>

<template>
  <div class="h-full flex flex-col md:flex-row gap-4">
    
    <div class="flex-none w-full md:w-1/3 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0 border-b md:border-b-0 md:border-r border-white/20 pr-0 md:pr-4 no-scrollbar">
      
      <button v-for="quest in questsData" :key="quest.id"
              @click="selectedQuestId = quest.id"
              class="shrink-0 px-4 py-2 md:p-3 text-xs font-mono border transition-all relative overflow-hidden group active:scale-95 whitespace-nowrap rounded-full md:rounded-none"
              :class="selectedQuestId === quest.id ? 'bg-white text-blue-900 border-white' : 'bg-blue-900/40 border-gray-600 text-gray-300'">
        <span v-if="selectedQuestId === quest.id" class="hidden md:block absolute left-0 top-0 bottom-0 w-1 bg-yellow-400"></span>
        {{ quest.title }}
      </button>

    </div>

    <div class="flex-1 min-h-0 overflow-y-auto custom-scroll animate-enter-up" :key="selectedQuestId">
      <div class="flex flex-col gap-4 pb-20 md:pb-0"> <div class="border-2 md:border-4 border-gray-600 bg-black h-40 md:h-48 relative group overflow-hidden rounded md:rounded-none shrink-0">
          <img :src="currentQuest.image" alt="Project" class="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition duration-500">
          <div class="absolute bottom-0 left-0 right-0 bg-black/80 p-1 text-center text-[9px] md:text-[10px] text-green-400 font-mono">
             STATUS: {{ currentQuest.status }}
          </div>
        </div>

        <div>
          <h2 class="text-lg md:text-2xl text-yellow-300 pixel-font mb-2">{{ currentQuest.title }}</h2>
          <div class="flex flex-wrap gap-2 mb-3">
             <span v-for="t in currentQuest.tech" :key="t" 
                   class="text-[9px] md:text-[10px] border border-cyan-500/50 bg-cyan-900/20 text-cyan-200 px-2 py-1 rounded-full">
               {{ t }}
             </span>
          </div>
          <p class="text-xs md:text-sm font-mono text-gray-300 leading-relaxed" dir="ltr">
            {{ currentQuest.desc }}
          </p>
        </div>

        <a :href="currentQuest.link" target="_blank" 
           class="w-full text-center bg-blue-600 hover:bg-blue-500 text-white py-3 md:py-3 font-pixel text-xs border-2 border-white/50 shadow-lg active:scale-95 transition-all rounded md:rounded-none">
          LAUNCH APP 🚀
        </a>

      </div>
    </div>

  </div>
</template>

<style scoped>
/* إخفاء سكرول البار الأفقي للأزرار في الموبايل لجمالية أكثر */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>