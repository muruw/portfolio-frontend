<template>
  <section class="nav">
    <div class="nav-logo">
        <img height="160px" src="../assets/logo_transparent.png" alt="logo">
    </div>
    <div class="nav-menu">
        <ul class="nav-menu-list">
            <li class="nav-list-item">About me</li>
            <li class="nav-list-item" v-on:click="openWebsite(github)">Github</li>
            <li class="nav-list-item" v-on:click ="openWebsite(resume)">Resume</li>
        </ul>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    github: String,
    resume: String
  },
  methods: {
    openWebsite(url){
      window.open(url, "_blank");
    }
  }
}
</script>

<style lang="sass" scoped>
  .nav
    background: #333
    display: flex
    flex-direction: column
    justify-content: space-around
    align-items: center
    .nav-logo
      margin: 10px auto
    .nav-menu
      width: 100%

  .nav-menu-list
    list-style: none
    padding: 0
    display: flex
    margin: 0
    color: white
    li
      width: 50%
      text-align: center
      background: #555
      padding: 10px 0
      cursor: pointer
      transition: background 300ms ease-in-out
      &:hover
        background: #333
      &:first-of-type
        border-bottom: 5px solid #222
    



</style>