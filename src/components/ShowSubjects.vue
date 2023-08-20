<template>
  <div class="container">
    <h3> Subjects:</h3>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Materia Pai</th>
        </tr>
      </thead>
      
      <tbody>
        <tr v-for="subject in subjects" v-bind:key="subject.id"> 
          <th scope="row">{{subject.id}}</th>
          <td>{{subject.name}}</td>
          <td>{{subject.parent_id}}</td>
        </tr>
      </tbody>
    </table> 
  </div> 
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'ShowSubjects',
    data() {
      return {
        subjects: null
      }
    },
    methods:{
      setSubjects: function(subjects){
        this.subjects = subjects;
      }
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
  }
</script>

<style>
  h3 {
    margin-bottom: 5%;
  }
</style>