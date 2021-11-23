<template>
  <section class="login-container">
    <div class="login-content">
      <div class="login-text">
        <h1 class="login-text__title">
          {{ msg }}
        </h1>
        <h2 class="login-text__message">
          Avec Vuebook, partagez et restez en contact avec votre entourage.
        </h2>
      </div>
      <div class="login-submit__container">
        <div class="login-option">
          <input
            class="login-option__input"
            type="text"
            name="email"
            id="email"
            placeholder="Adresse e-mail ou numéro de tél."
          />
          <input
            class="login-option__input"
            type="text"
            name="password"
            id="password"
            placeholder="Mot de passe"
          />
          <button
            class="login-option__sendToApiBtn"
            type="submit"
            @click="submitClick"
          >
            Se connecter
          </button>
          <a class="login-option__link" href="#">Mot de passe oublié ?</a>
          <div class="login-option__line"></div>
          <button
            @click="setRegister = true"
            class="login-option__newAccountBtn"
          >
            Créer un nouveau compte
          </button>
        </div>
        <p class="login-input__text">
          <a class="login-input__link" href="/">Créer une Page</a> pour une
          célébrité, une marque ou une entreprise.
        </p>
      </div>
    </div>
    <Register v-if="setRegister" @update-status="setRegister = $event" />
  </section>
</template>

<script>
import Register from './Register.vue'
export default {
  name: 'HelloWorld',
  components: {
    Register,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      setRegister: false,
    }
  },
}
</script>

<style scoped lang="scss">
// Colors
$color-primary: rgb(57, 117, 234);
$color-secondary: rgb(101, 181, 67);

// Font style
$font-family: Helvetica, Arial, sans-serif;

@mixin small {
  @media (max-width: 1020px) {
    @content;
  }
}

// Component
.login-container {
  background-color: rgb(240, 242, 245);
}
.login-submit__container {
  width: 400px;
  @include small {
    margin: 40px auto 0;
  }
}
.login-content {
  height: 100vh;
  display: flex;
  margin: auto;
  padding-top: 20vh;
  max-width: 1000px;
  @include small {
    padding-top: 5vh;
    flex-direction: column;
    justify-content: flex-start;
  }
}
.login-text {
  width: 60%;
  padding-top: 8%;
  @include small {
    width: 100%;
    padding-top: 35px;
    margin: 0 auto;
    text-align: center;
  }
  &__title {
    color: $color-primary;
    font-family: $font-family;
    font-size: 53px;
    margin: 0 0 10px;
  }
  &__message {
    font-family: $font-family;
    font-weight: 400;
    font-size: 28px;
    width: 480px;
    margin: 0;
    @include small {
      width: 360px;
      font-size: 24px;
      margin: 0 auto;
    }
  }
}
.login-input {
  &__container {
    display: flex;
    flex-direction: column;
    width: 40%;
  }
  &__text {
    font-family: $font-family;
    font-size: 14px;
    text-align: center;
    margin: 30px auto 0;
  }
  &__link {
    text-decoration: none;
    color: black;
    font-weight: bold;
  }
}
.login-option {
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 20px 15px;
  border-radius: 7px;
  box-shadow: 5px 1px 15px 3px #c4c4c4;
  &__input {
    font-size: 16px;
    padding: 15px 10px;
    border: 1px solid;
    border-radius: 3px;
    border-color: rgb(221, 223, 226);
    margin-bottom: 15px;
  }
  &__sendToApiBtn {
    color: white;
    background-color: $color-primary;
    font-size: 20px;
    font-weight: 700;
    border: none;
    border-radius: 6px;
    padding: 14px 0;
    &:hover {
      cursor: pointer;
      background-color: rgb(53, 110, 223);
    }
  }
  &__link {
    font-family: $font-family;
    font-size: 15px;
    text-decoration: none;
    color: $color-primary;
    margin: 18px auto 0;
  }
  &__line {
    border-bottom: 1px solid #dadde1;
    margin: 25px auto 25px;
    width: 98%;
  }
  &__newAccountBtn {
    color: white;
    background-color: $color-secondary;
    font-size: 16px;
    font-weight: 700;
    border: none;
    border-radius: 6px;
    padding: 14px 0;
    width: 62%;
    margin: 0 auto;
    &:hover {
      cursor: pointer;
      background-color: rgb(87, 162, 57);
    }
  }
}
</style>
