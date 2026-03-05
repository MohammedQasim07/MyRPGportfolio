<script setup>
defineEmits(['start-game']);
</script>

<template>
  <div class="absolute inset-0 z-50 bg-black flex flex-col items-center justify-center text-center p-4">
    
    <h1 class="text-3xl md:text-6xl text-yellow-400 mb-6 md:mb-8 pixel-font leading-relaxed shadow-lg select-none">
      MOHAMMED<br>
      <span class="text-white">QASIM</span>
    </h1>

    <p class="text-gray-400 font-mono text-xs md:text-sm mb-10 md:mb-12">
      Level 21 Frontend Developer
    </p>
    
    <button 
      @click="$emit('start-game')" 
      class="pixel-font text-white text-sm md:text-xl animate-pulse hover:text-yellow-300 transition cursor-pointer border-2 border-transparent hover:border-white p-4 active:scale-95"
    >
      ▶ PRESS START
    </button>

    <div class="absolute bottom-8 text-[8px] md:text-[10px] text-gray-600 font-mono">
      © 2025 UOITC SYSTEM | VER 2.1.0
    </div>

  </div>
</template>