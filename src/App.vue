<template>
  <div class="main">
    <div class="header">
      <h1>Rasmus Svanbergs' Portfolio</h1>
      <NavBar/>
    </div>

    <router-view class="body__content"/>

    <span class="footer">
      <b>
        Version:
      </b>
      <p>
        {{ this.version }}
      </p>
    </span>
  </div>
</template>

<script>

import NavBar from '@/views/NavBar.vue'
import Package from '@/../package.json';

  export default{
    components: {
      NavBar,
    },
    data() {
      return {
          version: '',
          Package,
      }
    },
    methods: {
        getVersion() { 
            return  Package.version; 
        }
    },
    created() {
        this.version = this.getVersion();
    },
  }
</script>


<style>

@import 'Styles/index.css';


/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
