<template>
  <div class="login-container">
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
          <button class="login-option__newAccountBtn">
            Créer un nouveau compte
          </button>
        </div>
        <p class="login-input__text">
          <a class="login-input__link" href="#">Créer une Page</a> pour une
          célébrité, une marque ou une entreprise.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
// Colors
$color-primary: rgb(57, 117, 234);
$color-secondary: rgb(101, 181, 67);

// Font style
$font-family: Helvetica, Arial, sans-serif;

// Components
.login-container {
  background-color: rgb(240, 242, 245);
}
.login-submit__container {
  width: 400px;
}
.login-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 145px 90px 300px;
  margin: auto;
  max-width: 1000px;
}
.login-text {
  width: 50%;
  padding-top: 70px;
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
    margin: 24px auto 0;
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
    font-size: 18px;
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
    font-size: 18px;
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
