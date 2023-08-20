import {defineStore} from 'pinia';

export const useSubjectSelection = defineStore({
  id: 'subjectSelection',
  state: () => ({
    subject: null,
    topic: null,
  }),
  
  actions: {
    setSubject(subject, topic) {
      this.subject = subject;
      this.topic = topic;
    }
  },

  getters: {
    getSubject() {
      return this.subject;
    },
    getTopic() {
      return this.topic;
    }
  }});