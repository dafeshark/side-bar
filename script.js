const menu = document.querySelector("#menu");
const container = document.querySelector(".container");
const paragraphs = document.querySelectorAll("#paragraphs");

const items = document.querySelectorAll(".items");
const infos = document.querySelectorAll(".button");

const house = document.querySelector(".house");
const about = document.querySelector(".about");
const message = document.querySelector(".message");
const photos = document.querySelector(".photos");
const settings = document.querySelector(".settings");

const houseParagraph = document.querySelector(".house_paragraph");
const aboutParagraph = document.querySelector(".about_paragraph");
const messageParagraph = document.querySelector(".messages_paragraph");
const photoParagraph = document.querySelector(".photos_paragraph");
const settingsParagraph = document.querySelector(".settings_paragraph ");

let menuOpen = false;
let itemOpen = false;


function menuEvent(){
        //first click}
        if(menuOpen === false){
            container.classList.remove("active_container_2");
            container.classList.add("active_container");
            setTimeout(()=>{
                paragraphs.forEach((paragraph)=>{
                    paragraph.classList.add("active-paragraph");
                })
            },500)
            menuOpen = true;
            return menuOpen
        } else{
            //second click
                container.classList.remove("active_container");
                container.classList.add("active_container_2");
                setTimeout(()=>{
                    paragraphs.forEach((paragraph)=>{
                        paragraph.classList.remove("active-paragraph");
                    })
                },500)
            }
            menuOpen = false;
}
menu.addEventListener("click", menuEvent);


items.forEach((item)=>{
    item.addEventListener("click", ()=>{
        //first click
        if(itemOpen ===false){
            item.classList.remove("active_buttons2");
            item.classList.add("active_buttons");
            switch(item.id){
                case "house":
                    house.classList.add("active_house");
                    houseParagraph.classList.add("activeParagraph_house");
                break;
                case "about":
                    about.classList.add("active_about");
                    aboutParagraph.classList.add("activeParagraph_about");
                break;
                case "message":
                    message.classList.add("active_message");
                    messageParagraph.classList.add("activeParagraph_message");
                    break;
                    case "photos":
                        photos.classList.add("active_photo");
                        photoParagraph.classList.add("activeParagraph_photo");
                        break;
                        case "settings":
                            settings.classList.add("active_settings");
                            settingsParagraph.classList.add("activeParagraph_settings");
                            break;
                        }
                        itemOpen = true;
                        return itemOpen
                    }else if(itemOpen === true){
        //second click
        switch(item.id){
            case "house":
                house.classList.remove("active_house");
                house.classList.add("house");
                houseParagraph.classList.remove("activeParagraph_house");
                houseParagraph.classList.add("house_paragraph");
                break;
                case "about":
                    about.classList.remove("active_about");
                    about.classList.add("about");
                    aboutParagraph.classList.remove("activeParagraph_about");
                    aboutParagraph.classList.add("about_paragraph");
                    break;
                    case "message":
                        message.classList.remove("active_message");
                        message.classList.add("message");
                        messageParagraph.classList.remove("activeParagraph_message");
                        messageParagraph.classList.add("message_paragraph");
                        break;
                        case "photos":
                            photos.classList.remove("active_photo");
                            photos.classList.add("photos");
                            photoParagraph.classList.remove("activeParagraph_photo");
                            photoParagraph.classList.add("photos_paragraph");
                            break;
            case "settings":
                settings.classList.remove("active_settings");
                settings.classList.add("settings");
                settingsParagraph.classList.remove("activeParagraph_settings");
                settingsParagraph.classList.add("settings_paragraph");
                break;
            }
            item.classList.add("active_buttons2");
            itemOpen = false;
        }
    });
});