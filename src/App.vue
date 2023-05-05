<template>
  <div id="app">
    <b-navbar type="dark" variant="dark">
    <b-navbar-nav>

        <b-nav-item  ><router-link to="/Profile">Profile</router-link></b-nav-item>
        <b-nav-item  ><router-link to="/Contact">Contact</router-link></b-nav-item>
        <b-nav-item ><router-link to="/Project">Project</router-link></b-nav-item> 

    </b-navbar-nav>
    
  </b-navbar>

    


    <router-view />
  </div>
</template>

<script>
export default {
   name: 'App',

   data: () => ({
      //
   })
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.b-nav-item{
  color: red;
}
.router-link-exact-active {
  color: white;
}

</style>