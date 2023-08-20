<template>
  <div class="body">
    <div class="select">
      <svg class="select-svg">
        <path d="M0 0 L5 5 L10 0"></path>
      </svg>
      <select class="select-element" v-model="selectedMateria">
        <option v-for="(subject, index) in subjects" :key="subject.id" :value="index">{{ subject.name }}</option>
      </select>
      <select v-if="selectedMateria !== undefined" class="select-element" v-model="selectedTopic">
        <option v-for="(subject, index) in subjects[selectedMateria].children" :key="index" :value="subject">{{ subject.name }}</option>
      </select>

      <router-link to="/content" @click="handleContentClick">Content</router-link>
    </div>

    <div class="sprites"></div>
  </div>
</template>

<script>
  import axios from 'axios';
  import {useSubjectSelection} from '/src/stores/subjectSelectionStore.js';

export default {
  data() {
    return {
      subjects: null,
      selectedMateria: undefined,
      selectedTopic: '',
      texto: '',
    };
  },
  methods: {
    updateSelectedTopic() {
      const selectedSubject = useSubjectSelection();

      selectedSubject.setSubject(this.subjects[this.selectedMateria], this.selectedTopic);
    },
    setSubjects(subjects) {
      this.subjects = subjects;
    },

    handleContentClick() {
      this.updateSelectedTopic(this.selectedMateria, this.selectedTopic);
    },
  },
  mounted () {
      axios
        .get('http://localhost:3000/list_subjects')
        .then(response => {
          this.setSubjects(response.data)
        })
        .catch(e => {
          console.log(e)
        })
    }
};
</script>

<style>
.body {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
}

.select {
  position: relative;
  min-width: 200px;
}

.select-svg {
  position: absolute;
  right: 12px;
  top: calc(50% - 3px);
  width: 10px;
  height: 6px;
  stroke-width: 2px;
  stroke: #9098A9;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  pointer-events: none;
}

.select-element {
  -webkit-appearance: none;
  padding: 7px 40px 7px 12px;
  width: 100%;
  border: 1px solid #E8EAED;
  border-radius: 5px;
  background: white;
  box-shadow: 0 1px 3px -2px #9098A9;
  cursor: pointer;
  font-family: inherit;
  font-size: 16px;
  transition: all 150ms ease;
}

.select-element:required:invalid {
  color: #5A667F;
}

.select-element option {
  color: #223254;
}

.select-element option[value=""][disabled] {
  display: none;
}

.select-element:focus {
  outline: none;
  border-color: #0077FF;
  box-shadow: 0 0 0 2px rgba(0, 119, 255, 0.2);
}

.select-element:hover + .select-svg {
  stroke: #0077FF;
}

.sprites {
  position: absolute;
  width: 0;
  height: 0;
  pointer-events: none;
  user-select: none;
}
</style>
