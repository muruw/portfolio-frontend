<template>
  <div class="about-card">
    <div class="card-title">
      <div class="title-text-content">
        <p>About me</p>
        <h2>Marcus Murumäe</h2>
      </div>
    </div>
    <div class="card-content">
      <p>
        Hello there! 
        <br>
        My name is Marcus Murumäe and I am an aspiring software engineer studying at the University of Tartu.
        <br>
        <br>
        One of the most asked question people ask me is where the name muruw comes from. Ha, good question! Basically, I really needed
        one short nickname when I was playing video games. I just used the first five letters from my last name and turned the last 'm' upside down.
        Ever since then, I have used that nickname everywhere. It is just something that has stuck with me.
      </p>
      <table width="100%">
        <tr>
          <th>Skill</th>
          <th>Language/Framework</th>
        </tr>
        <tr>
          <td>Front end</td>
          <td>Vue.js, Javascript, HTML, CSS, SaSS</td>
        </tr>
        <tr>
          <td>Back end</td>
          <td>Spring Boot, JavaFX, Hibernate, Node.js, Express.js</td>
        </tr>
        <tr>
          <td>Other</td>
          <td>C#, Unity3d, Git</td>
        </tr>
      </table>

      <p>
        I like to use some of my free time exploring various topics related to computer science.
        My main interests are creating full stack applications, attending hackathons and developing games in Unity3D.
        I have tried to reflect my intrests in my projects and they can be found below.
      </p>
    </div>
    <div class="project-gallery-wrap">
      <div class="project-tile"
      :key="index" v-for="(item, index) in projects">
        <div class="project-text">
          <h1>{{item.name}}</h1>
          <h2 class="animate-text">{{item.stack}}</h2>
          <p class="animate-text">{{item.description}}</p>
          <div class="dots" @click="openWebsite(item.link)">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>  
    </div>
  </div>
</template>

<script>
  import ProjectDataService from '../services/ProjectDataService';

export default {

  data: () => {
    return {
      projectIndex: null
    }
  },

  props: {
    projects: Array
  },

  methods: {
    refreshProjects(){
      ProjectDataService.retriveAllProjects().then(response => {
        this.projects = response.data;
      });
    },

    selectIndex(index){
      this.projectIndex = index;
    },

    openWebsite(url){
      window.open(url, "_blank");
    }
  },

  created(){
    /*this.refreshProjects();
      this will be added once the back end has been deployed    
    */
  }

}
</script>

<style lang="sass" scoped>

.about-card
  background: #333
  padding: 3em
  border-radius: 10px
  color: white
  .card-title
    display: flex
    align-items: center
    background: #222
    border-radius: 10px
    .avatar
      border: 1px solid rgba(255, 255, 255, 0.4)
      border-radius: 50%
      margin: 0 30px
    .title-text-content
      p
        margin-bottom: 0
        margin-left: 15px
        color: rgb(210, 210, 210)
      h2
        margin-top: 0
        margin-left: 15px

    
.card-content p 
  line-height: 1.5
  margin: 30px auto

table
  border-spacing: 0px
  margin: 50px auto
  tr th, tr td
    border: 1px solid white
    border-top: none
    padding: 10px
    text-align: center
    &:first-of-type
      border-left: none
    &:nth-of-type(2)
      border-right: none


.project-gallery-wrap
  margin: 50px auto 0 auto 0
  width: 100%
  display: flex
  flex-wrap: wrap
  flex-shrink: 0
  align-items: space-evenly
  justify-content: center

.project-tile
  max-width: 350px;
  height: 400px;
  margin: 30px;
  background-color: #F65C5C;
  display: inline-block
  background-size: cover
  position: relative
  cursor: pointer
  transition: all 0.4s ease-out
  box-shadow: 0px 35px 77px -17px rgba(0, 0, 0, 0.44)
  overflow: hidden
  color: white
  project-text
    position: absolute
    padding: 30px
    height: calc(100% - 60px)
  h1
    font-weight: 300
    margin: 5px
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3)
  h2
    font-weight: 80
    margin: 5px
    font-style: italic
    transform: translateX(200px)
  p
    font-weight: 300
    margin: 5px
    line-height: 25px
    transform: translateX(-350px)
    transition-delay: 0.2s
  .animate-text
    opacity: 0
    transition: all 0.4s ease-in-out
  &:hover
    box-shadow: 0px 35px 77px -17px rgba(0, 0, 0, 0.64)
    transform: scale(1.05)
    img
      opacity: 0.2
    .animate-text
      transform: translateX(0)
      opacity: 1
    .dots
      transform: translateY(-50px)
      span
        opacity: 1
  .dots
    position: absolute
    bottom: 20px
    right: 30px
    margin: 0 auto
    width: 30px
    height: 30px
    color: currentColor
    display: flex
    flex-direction: column
    align-items: center
    justify-content: space-around
    span
      width: 5px
      height: 5px
      background-color: currentColor
      border-radius: 50%
      display: block
      opacity: 0
      transition: transform 0.4s ease-out, opacity 0.5 ease
      transform: translateY(50px)  
  
@media screen and (max-width: 1096px)
  .project-gallery-wrap
    flex-direction: column
    align-items: center


</style>
