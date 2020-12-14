import WorkList from './WorkList.js'
import System from "./System.js";
class App{
    constructor(){
        this.EventList();
        this.System = new System();
        this.WorkList = new WorkList(this.System);
    }

    EventList(){
        document.querySelector("#work_add").addEventListener("click",()=>{this.WorkList.openAddWork()});
    }
}

window.addEventListener("load",()=>{
    let app = new App();
})