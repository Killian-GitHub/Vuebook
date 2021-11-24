<template>
  <div class="container">
    <h3>S'inscrire</h3>
    <p>C'est rapide et facile</p>
    <i @click="handleClick" class="fas fa-times close"></i>
    <div class="border" />
    <form class="form" action="submit" method="post">
      <input
        v-model="firstName"
        class="name input"
        type="text"
        placeholder="Prénom"
      />
      <input
        v-model="lastName"
        class="name input"
        type="text"
        placeholder="Nom de famille"
      />
      <input
        v-model="email"
        class="data input"
        type="email"
        placeholder="Adresse e-mail"
      />
      <input
        v-model="password"
        class="data input"
        type="password"
        placeholder="Nouveau mot de passe"
      />
      <p class="choice__text">Genre</p>
      <div class="choice">
        <input type="radio" id="man" name="form__choice" />
        <label for="man">Homme</label>
      </div>
      <div class="choice">
        <input type="radio" id="women" name="form__choice" />
        <label for="women">Femme</label>
      </div>
      <div class="choice">
        <input type="radio" id="other" disabled />
        <label for="other">Personnalisé</label>
      </div>
    </form>
    <p class="info">
      En cliquant sur S’inscrire, vous acceptez nos Conditions générales.
      <br />
      Découvrez comment nous recueillons, utilisons et partageons vos données en
      lisant notre Politique d’utilisation des données et comment nous utilisons
      les cookies et autres technologies similaires en consultant notre
      Politique d’utilisation des cookies. Vous recevrez peut-être des
      notifications par texto de notre part et vous pouvez à tout moment vous
      désabonner.
    </p>
    <button @click="submitClick" type="submit">S'inscrire</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Register',
  data() {
    return {
      registerStatus: false,
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    }
  },
  methods: {
    handleClick() {
      this.$emit('update-status', this.registerStatus)
    },
    submitClick(e) {
      e.preventDefault()

      const formData = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
      }

      axios({
        method: 'POST',
        url: 'http://localhost:3000/api/auth/signup',
        data: formData,
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(() => {
          alert('Votre compte a bien été créé')
          location.reload()
        })
        .catch((err) => {
          console.log(err)
          alert('Une érreur est survenue')
        })
    },
  },
}
</script>

<style lang="scss" scoped>
// Colors
$input-background: rgb(246, 246, 247);
$btn-color: rgb(101, 181, 67);

// Component
.container {
  background-color: #fefefe;
  position: absolute;
  width: 450px;
  top: 15vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  font-family: Helvetica, Arial, sans-serif;
  border-radius: 10px;
  box-shadow: 5px 1px 15px 3px #c4c4c4;
  h3 {
    font-size: 30px;
    margin: 15px 0 0 15px;
  }
  p {
    color: rgb(102, 108, 116);
    font-size: 15px;
    margin: 3px 0 0 15px;
  }
  .close {
    font-size: 22px;
    color: grey;
    cursor: pointer;
    position: absolute;
    top: 12px;
    right: 15px;
  }
  .border {
    border-bottom: solid 1px lightgray;
    margin: 15px 0;
  }
  .info {
    font-size: 12px;
    margin: 10px 15px;
    // text-decoration: line-through;
  }
  button {
    width: 50%;
    margin: 15px 25% 35px;
    color: white;
    background-color: $btn-color;
    font-weight: 700;
    font-size: 16px;
    border: none;
    border-radius: 6px;
    padding: 10px 0;
    &:hover {
      cursor: pointer;
      background-color: rgb(87, 162, 57);
    }
  }
}
.form {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 15px;
  .input {
    padding: 10px;
    border: solid 1px lightgray;
    border-radius: 5px;
    background-color: $input-background;
    font-size: 16px;
    &::placeholder {
      font-size: 16px;
    }
  }
  .name {
    width: 43%;
    margin-bottom: 12px;
  }
  .data {
    width: 100%;
    margin-bottom: 15px;
  }
  .choice {
    border: solid 1px lightgray;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    padding: 8px 2px;
    flex-direction: row-reverse;
    width: 30%;
    cursor: pointer;
    label {
      margin-left: 6px;
      cursor: pointer;
      width: 100%;
    }
  }
  .choice__text {
    font-size: 12px;
    width: 100%;
    margin: 2px 15px 5px 0;
  }
}
</style>
