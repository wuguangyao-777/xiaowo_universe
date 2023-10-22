import { ref } from 'vue';

export const tab = ref('/pages/Square/Square');

export function updateTab(newTab) {
  tab.value = newTab;
}