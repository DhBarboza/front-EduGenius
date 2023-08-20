import {defineStore} from 'pinia';

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 0,
  }),
  
  actions: {
    increment() {
      this.count++;
    }
  },

  getters: {
    showCount() {
      return this.count;
    }
  }});