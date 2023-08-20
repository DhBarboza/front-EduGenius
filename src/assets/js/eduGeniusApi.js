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
}

export default new EduGeniusApi();
