export default class WorkList{
    constructor(System){
        this.work_list = [];
        this.today_work_list = document.querySelector("#today_work_list");
        this.system = System;
    }

    addWorkTemplet(){

    }

    openAddWork(){
        let title = "할일 추가";
        let status = "";
        let content = ``;
        this.system.MakePopup(title,status,content);
    }
}