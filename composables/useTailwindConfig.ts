// ~/composables/useTailwindConfig.ts
import { ref } from 'vue';

export default function useTailwindConfig() {
  const defaultTransition = ref<string>('transition-all duration-300 ease-in-out');
  return { defaultTransition };
}