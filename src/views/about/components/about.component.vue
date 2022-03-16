<template>
  <div class="page__content__default">
    <h1>
      This is
    </h1>
    <h1 id="me">
      &nbsp;me
    </h1>
    <img src="/images/avatar.jpg" alt="Me" id="avatar">
    <p>
      Hi, my name is Rasmus Svanberg.
      <br>
      I am a software developer currently employed by ROL Ergo AB in Jönköping, Sweden, where I have worked since June of 2021.
      At ROL I am a fullstack developer, though at the moment mainly focusing on front-end.
      <br><br>
      I studied computer science at the School of Engineering at Jönköping University, where I graduated in June of 2021.
      Currently I am located in Nässjö, Sweden, where I live with my girlfriend Kajsa, and our dog Zuko, who is a mittelspitz.
      <br><br>
      At my spare time, I like to play games, visit my family and, of  course, to program!
      <br>
      Currently, I enjoy webdevelopment quite a lot, as well as creating games and prototypes in the game engine Unity.
      As of yet I have not created anything particularily interesting in Unity, as I have the last couple of months
      spent my time learning the engine. I did however do my bachelor thesis in Unity! 
      <router-link id="link" to="/projects">Download</router-link> (not yet added).
      <font-awesome-icon icon="fa-spinner" />
    </p>
  </div>
</template>

<script>

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

export default {
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      faSpinner
    }
  }
}
</script>

<style scoped>

h1 {
  display: inline-flex;
}

#me {
  color: var(--main-color);
}

#avatar {
    height: 40%;
    width: 40%;
    float: left;
    border-radius: 2%;
    /* padding-right: 40px; */
    /* filter: drop-shadow(-10px 5px 10px var(--bg-dark-color)); */
    border: 2px solid var(--main-color);
    margin: 0 40px 0 0;
}

p {
    text-align: left;
}

#link {
  color: var(--link-active-color);
  /* font-style: italic; */
}

</style>