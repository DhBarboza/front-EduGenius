import axios from 'axios';

const host = 'http://localhost:3000';

class EduGeniusApi {
  constructor() {}

  async getContentsBySubjectId(subjectId) {
    return axios.get(`${host}/list_contents/${subjectId}`)
  }

  async getSubjects() {
    axios.get(`${host}/list_subjects`)
  }

  async registerTeacher(name, email) {
    console.log({name, email})
    axios.post(`${host}/register_teacher`, {
      name,
      email,
    })
  }
}

export default new EduGeniusApi();
