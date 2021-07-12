<template>
  <div class="page__content__default">
    <h1>
        This is me
    </h1>
    <img src="../../../public/images/avatar.jpg" alt="Me" id="avatar">
    <p>
      Hi, my name is Rasmus Svanberg.
      <br>
      I am a software developer currently employed by ROL Ergo AB in Jönköping, Sweden, where I have worked since June of 2021.
      Here, I have been a fullstack developer, though mainly focusing on front-end.
      <br><br>
      I studied computer science at the School of Engineering at Jönköping University, where I graduated in June of 2021.
      Currently I am located in Nässjö, Sweden, where I live with my girlfriend Kajsa, and our dog Zuko, who is a mittelspitz.
      <br><br>
      At my spare time, I like to play games, visit my family and ofcourse, to program!
      <br>
      Currently, I enjoy webdevelopment quite a lot, as well as creating games and prototypes in the game engine Unity.
      As of yet I have not created anything particularily interesting in Unity, as I have the last couple of months
      spent my time learning the engine. I did however do my bachelor thesis in Unity! 
      <br>
      You can find and download this project <router-link id="link" to="/projects">here</router-link> (not yet added).
    </p>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

#avatar {
    height: 40%;
    width: 40%;
    float: left;
    border-radius: 5%;
    padding-right: 40px;
    filter: drop-shadow(-10px 5px 10px var(--bg-dark-color));
    border-left: 5px solid var(--black);
}

p {
    text-align: left;
    line-height: 25px;
}

#link {
  color: var(--link-active-color);
  font-style: italic;
}

</style>