<script setup>
import { ref } from 'vue';
import { socialData } from '../../data/content.js';

const contactForm = ref({
  name: '',
  email: '',
  message: ''
});

const sendMessage = () => {
  alert(`✨ TRANSMISSION SENT! \nTarget: mohammedqasim20040609@gmail.com \nSystem will reply to: ${contactForm.value.email}`);
  contactForm.value = { name: '', email: '', message: '' };
};
</script>

<template>
  <div class="h-full flex flex-col">
    <h3 class="pixel-font text-lg md:text-xl border-b-2 border-white pb-3 mb-4 text-green-400 shrink-0">
      TRANSMISSION HUB
    </h3>

    <div class="flex-1 min-h-0 overflow-y-auto custom-scroll">
      <div class="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 pb-24 md:pb-0">
        
        <div class="space-y-3">
           <p class="font-mono text-xs text-gray-500 mb-2">> SELECT FREQUENCY:</p>
           
           <a v-for="social in socialData" :key="social.name" 
              :href="social.url" 
              target="_blank"
              class="flex items-center gap-4 bg-white/5 border border-white/20 p-3 md:p-4 hover:bg-white/10 hover:border-yellow-400 transition-all active:scale-95 group rounded-lg md:rounded-none">
             
             <span class="text-xl md:text-2xl group-hover:scale-110 transition-transform">{{ social.icon }}</span>
             
             <div class="flex-1">
               <h4 class="pixel-font text-xs" :class="social.color">{{ social.name }}</h4>
               <p class="font-mono text-[9px] md:text-[10px] text-gray-400 truncate">{{ social.desc }}</p>
             </div>
             
             <span class="text-yellow-400 opacity-50 group-hover:opacity-100 transition-opacity">➔</span>
           </a>
        </div>

        <div class="bg-black/40 p-4 md:p-6 border border-white/10 relative rounded-lg md:rounded-none">
          
          <div class="absolute top-0 right-0 bg-green-900/50 text-green-400 text-[9px] px-2 py-1 border-b border-l border-green-500/30 rounded-tr-lg md:rounded-none">
            SYSTEM: ONLINE
          </div>
          
          <form @submit.prevent="sendMessage" class="space-y-4 mt-2">
            <div>
              <label class="block font-mono text-[10px] text-gray-400 mb-1">AGENT NAME</label>
              <input v-model="contactForm.name" type="text" required 
                     class="w-full bg-black/50 border border-white/30 p-3 text-sm text-white focus:border-yellow-400 focus:outline-none font-mono rounded transition-colors placeholder-gray-700"
                     placeholder="Enter Name...">
            </div>
            <div>
              <label class="block font-mono text-[10px] text-gray-400 mb-1">RETURN FREQUENCY (EMAIL)</label>
              <input v-model="contactForm.email" type="email" required 
                     class="w-full bg-black/50 border border-white/30 p-3 text-sm text-white focus:border-yellow-400 focus:outline-none font-mono rounded transition-colors placeholder-gray-700"
                     placeholder="name@example.com">
            </div>
            <div>
              <label class="block font-mono text-[10px] text-gray-400 mb-1">DATA PACKET (MESSAGE)</label>
              <textarea v-model="contactForm.message" rows="4" required 
                        class="w-full bg-black/50 border border-white/30 p-3 text-sm text-white focus:border-yellow-400 focus:outline-none font-mono rounded resize-none transition-colors placeholder-gray-700"
                        placeholder="Type your message..."></textarea>
            </div>
            
            <button type="submit" class="w-full bg-green-700 hover:bg-green-600 text-white py-3 md:py-3 font-pixel text-xs border border-white/50 shadow-lg hover:shadow-green-500/20 transition-all flex justify-center items-center gap-2 active:scale-95 rounded">
              <span>📡</span> SEND TRANSMISSION
            </button>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>