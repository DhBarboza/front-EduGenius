<template>
    <div class="select">
      <select class="select-element" v-model="selectedMateria">
        <option v-for="(subject, index) in subjects" :key="subject.id" :value="index">{{ subject.name }}</option>
      </select>

      <select v-if="selectedMateria !== undefined" class="select-element" v-model="selectedTopic">
        <option v-for="(subject, index) in subjects[selectedMateria].children" :key="index" :value="subject">{{ subject.name }}</option>
      </select>
    </div>
    
    <button v-if="selectedMateria !== undefined" @click="handleContentClick">Ver conteúdo</button>
 
    <div v-if="showContent" class="content-boxes">
      <div :key="contents.originalContent.id" class="content-box">
        <h3>Padrão</h3>
        <p>{{ contents.originalContent.content }}</p>
      </div>

      <div v-for="content in contents.contentsResults" :key="content.id" class="content-box">
        <h3>{{ content.level }}</h3>
        <p>{{ content.content }}</p>
      </div>
    </div>
  
</template>

<script>
  import axios from 'axios';

export default {
  data() {
    return {
      subjects: null,
      showContent: false,
      selectedMateria: undefined,
      selectedTopic: '',
      texto: '',
      contents: [
        {
          id: 1,
          title: 'Conteúdo 1',
          description: 'Descrição do conteúdo 1.',
        },
        {
          id: 2,
          title: 'Conteúdo 2',
          description: 'Descrição do conteúdo 2.',
        },
        {
          id: 3,
          title: 'Conteúdo 3',
          description: 'Descrição do conteúdo 3.',
        },
      ],
    };
  },
  methods: {
    setSubjects(subjects) {
      this.subjects = subjects;
    },

    setContents(contents) {
      this.contents = contents;
    },

    handleContentClick() {
      axios
        .get(`http://localhost:3000/get_contents_by_subject/${this.selectedTopic.id}`)
        .then(response => {
          console.log(response.data)
          this.setContents(response.data)
          this.showContent = true;

        })
        .catch(e => {
          console.log(e)
        })
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

.content-boxes {
  display: flex;
  justify-content: space-between;
}

.content-box {
  flex: 1;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 0 10px;
  background-color: #f5f5f5;
}
</style>
