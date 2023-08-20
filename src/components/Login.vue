<template>
  <div class="container">
    <h2>Login</h2>
    <div class="input-container">
        <label for="nome">Nome:</label>
        <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Digite seu nome"
        />
    </div>
    <div class="input-container">
        <label for="email">Email:</label>
        <input
            type="text"
            id="email"
            name="email"
            placeholder="Digite seu email"
        />
    </div>
    <button id="entrarBtn">Entrar</button>
  </div>
</template>

<script>
  export default {
    name: 'TeacherLogin',
    data() {
      return {
        name: '',
        email: '',
      };
    },
    methods: {
      handleLogin() {
        console.log('Login');
      },
    },
  }
</script>

<style>
.container {
  margin: auto;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px 40px 20px 20px;
  width: 400px;
}

.input-container {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input[type="text"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
}
</style>