export default class System{
    constructor(){

    }

    MakePopup(title,status,content){
        let div = document.createElement("div");
        div.innerHTML = `<div id="popup_bc">
                            <div id="popup">
                                <div id="popup_header">
                                    <h5 id="popup_title">${title}</h5>
                                    <p id="popup_status">${status}</p>
                                </div>
                                <div id="popup_content">
                                    ${content}
                                </div>
                            </div>
                        </div>`;
        div.querySelector("#popup_bc").addEventListener("click",this.RemovePopup);
        document.querySelector("#wrap").appendChild(div.firstChild);
    }

    RemovePopup(){
        document.querySelector("#wrap").removeChild(document.querySelector("#popup_bc"));
    }
}