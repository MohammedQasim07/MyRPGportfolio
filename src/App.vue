<script setup>
import { ref } from 'vue';
import IntroScreen from './components/IntroScreen.vue';
import HeroProfile from './components/HeroProfile.vue';
import StoryTab from './components/tabs/StoryTab.vue';
import SkillsTab from './components/tabs/SkillsTab.vue';
import QuestsTab from './components/tabs/QuestsTab.vue';
import ContactTab from './components/tabs/ContactTab.vue';

// System State
const gameStarted = ref(false);
const activeTab = ref('STORY');

// Tabs Config (For Bottom Nav)
const tabs = [
  { id: 'STORY', icon: '📜', label: 'Story' },
  { id: 'SKILLS', icon: '⚡', label: 'Skills' },
  { id: 'QUESTS', icon: '💎', label: 'Quests' },
  { id: 'CONTACT', icon: '📡', label: 'Contact' },
];

const startGame = () => { gameStarted.value = true; };
const setTab = (tabName) => { activeTab.value = tabName; };
</script>

<template>
  <div class="h-[100dvh] w-full flex flex-col items-center justify-center relative font-sans overflow-hidden bg-black" dir="ltr">
    
    <div class="world-map-bg"></div>

    <transition name="fade">
      <IntroScreen v-if="!gameStarted" @start-game="startGame" />
    </transition>

    <div v-if="gameStarted" class="w-full h-full max-w-6xl flex flex-col md:grid md:grid-cols-12 md:gap-6 md:p-4 animate-enter-up">
      
      <div class="md:hidden w-full h-16 bg-blue-900/80 border-b-2 border-white flex items-center justify-between px-4 shrink-0 z-20 backdrop-blur-md">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 bg-black border border-white rounded flex items-center justify-center overflow-hidden">
             <span class="text-xl">👨‍💻</span>
          </div>
          <div>
            <h1 class="pixel-font text-yellow-400 text-xs">M. QASIM</h1>
            <p class="font-mono text-[10px] text-gray-300">LVL.21 Dev</p>
          </div>
        </div>
        <div class="w-20">
          <div class="flex justify-between text-[8px] text-green-400 mb-1"><span>HP</span><span>100%</span></div>
          <div class="h-1 bg-gray-700"><div class="h-full bg-green-500 w-full"></div></div>
        </div>
      </div>

      <div class="hidden md:block md:col-span-3 h-full">
        <HeroProfile :activeTab="activeTab" @change-tab="setTab" />
      </div>

      <div class="flex-1 md:col-span-9 flex flex-col min-h-0 w-full relative">
        <div class="rpg-box flex-1 active-window relative overflow-hidden flex flex-col m-2 md:m-0 border-none md:border-4">
          
          <div class="hidden md:block absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-white opacity-60"></div>
          <div class="hidden md:block absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-white opacity-60"></div>
          
          <div class="flex-1 overflow-hidden relative z-10 p-4 md:p-6">
            <transition name="fade" mode="out-in">
              <StoryTab v-if="activeTab === 'STORY'" />
              <SkillsTab v-else-if="activeTab === 'SKILLS'" />
              <QuestsTab v-else-if="activeTab === 'QUESTS'" />
              <ContactTab v-else-if="activeTab === 'CONTACT'" />
            </transition>
          </div>

        </div>
      </div>

      <div class="md:hidden w-full h-20 bg-blue-950 border-t-4 border-white shrink-0 z-30 pb-4">
        <div class="grid grid-cols-4 h-full">
          <button v-for="tab in tabs" :key="tab.id" 
                  @click="setTab(tab.id)"
                  class="flex flex-col items-center justify-center gap-1 active:scale-95 transition-transform"
                  :class="activeTab === tab.id ? 'text-yellow-400' : 'text-gray-400'">
            <span class="text-xl filter drop-shadow-md">{{ tab.icon }}</span>
            <span class="pixel-font text-[8px]">{{ tab.label }}</span>
            <span v-if="activeTab === tab.id" class="w-1 h-1 bg-yellow-400 rounded-full mt-1"></span>
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Cairo:wght@500;700;900&display=swap');

:root {
  --font-pixel: "Press Start 2P", cursive;
  --font-arabic: "Cairo", sans-serif;
  --rpg-blue-start: #2c2c96;
  --rpg-blue-end: #000044;
}

body {
  background-color: #000;
  color: white;
  margin: 0;
  overflow: hidden;
  height: 100%;
}

.pixel-font { font-family: var(--font-pixel); line-height: 1.5; }
.font-mono { font-family: 'Courier New', Courier, monospace; }

.world-map-bg {
  position: fixed;
  inset: 0;
  background-image: radial-gradient(#333 2px, transparent 2px);
  background-size: 30px 30px;
  background-color: #050510;
  animation: scrollMap 20s linear infinite;
  z-index: -1;
}

@keyframes scrollMap {
  from { background-position: 0 0; }
  to { background-position: -30px 30px; }
}

.rpg-box {
  background: linear-gradient(180deg, var(--rpg-blue-start) 0%, var(--rpg-blue-end) 100%);
  border: 4px solid white;
  border-radius: 6px;
  box-shadow: inset 0 0 0 2px #a1a1a1;
}

/* في الموبايل نزيل الحواف السميكة لزيادة المساحة */
@media (max-width: 768px) {
  .rpg-box {
    border: none;
    border-radius: 0;
    box-shadow: none;
    background: transparent;
  }
}

.active-window {
  /* box-shadow: 0 0 15px rgba(251, 191, 36, 0.4); */
}

.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.animate-enter-up { animation: enterUp 0.5s ease-out forwards; }
@keyframes enterUp {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.custom-scroll {
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch; 
  padding-right: 4px;
}
.custom-scroll::-webkit-scrollbar { width: 4px; }
.custom-scroll::-webkit-scrollbar-track { background: rgba(0,0,0,0.2); }
.custom-scroll::-webkit-scrollbar-thumb { background: #666; border-radius: 2px; }
</style>