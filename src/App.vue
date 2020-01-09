<template>
  <div id="app">
    <DesktopNav id="desktop-nav" :github="githubLink" :resume="resumeLink"/>
    <MobileNav id="mobile-nav" :github="githubLink" :resume="resumeLink"/>

    <div class="view-container">
      <router-view :projects="projects"/>
    </div>
    
  </div>
</template>

<script>
import DesktopNav from '@/components/DesktopNav'
import MobileNav from '@/components/MobileNav'
import Project from '@/objects/Project.js'

export default {
  components: {
    DesktopNav,
    MobileNav
  },
  data : () => {
    return{
      projects: [new Project("141443f8-722e-41a0-83c8-e81ae2cd2498", "Portfolio website front end", "Vue.js, SaSS",
                "This project has been developed during my spare time with a goal to give others an overview of my skills and how I spend my free time", "https://github.com/muruw/portfolio-frontend"),
                new Project("883d09a1-1090-45b6-a45a-67c11193477d", "Java online chat application", "Java, JavaFX, JDBC, H2 Database",
                "Full stack Application where users can create accounts and chat with other users all over the world. The server is created from scratch with Java. GUI is created with JavaFX. The project was done in collaboration with Karlipoiss and KristerL (@github)", "https://github.com/muruw/online-chat-api"),
                new Project("a9bc17d4-bd41-4f8b-9197-9a757bc8371d", "Portfolio website back end", "Spring Boot, PostgreSQL, Docker",
                "Back end for my portfolio website. It listens for API requests and returns information about projects from PostgreSQL server. The back end hasn't been deployed yet.", "https://github.com/muruw/portfolio-backend"),
                new Project("e6342306-e087-431a-b958-1429794d4773", "Far From Home", "C#, Unity3D, Gimp",
                "Submission for Ludum Dare 45. 2D platformer game with fully finished story. Everything was made from scratch. The project has been published to itch.io where it is possible to play the game in the web browser", "https://muruw.itch.io/far-from-home")],

      githubLink: 'http://github.com/muruw',
      resumeLink: 'https://docs.google.com/document/d/1uP_CF8YuABWbTG2nQ4u4UwwWK2MtQbbRFo8WKQbh0cA/edit?usp=sharing'
    }
  }
}
</script>
<style lang="sass" scoped>
  .view-container
    width: 79vw
    padding: 1.5em
    margin-left: 20vw
    box-sizing: border-box
    min-height: 100vh

  #mobile-nav
    display: none

  @media screen and (max-width: 1096px)
    .view-container
      width: 100%
      margin-left: 0
    
    #desktop-nav
      display: none
    
    #mobile-nav
      display: flex

</style>

