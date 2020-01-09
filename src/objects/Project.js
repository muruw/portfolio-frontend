export default class Project{
    /*
        stack - String type, description of technologies used in a project(i.e java, vue.js)
        description - String type, description of the project
        link - String type, github link to the project repo 
    */
    constructor(id, name, stack, description, link){
        this.id = id;
        this.name = name;
        this.stack = stack;
        this.description = description;
        this.link = link;
        
    }

}