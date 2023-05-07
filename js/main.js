// Section 2
const tabs = document.querySelectorAll('.tabs-title');
const contents = document.querySelectorAll('.tabs-content > li');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(tab => tab.classList.remove('active'));
    contents.forEach(content => content.style.display = 'none');
    
    tab.classList.add('active');
    const content = document.querySelector(`.tabs-content li[data-tab="${tab.dataset.tab}"]`);
    content.style.display = 'flex';
  });
});

// Section 5 Load photos
const imgGraphic = [
  './images/graphic-design/graphic-design5.jpg',
  './images/graphic-design/graphic-design6.jpg',
  './images/graphic-design/graphic-design7.jpg',
  './images/graphic-design/graphic-design8.jpg'
]
const imgLandingPage = [
  './images/landing-page/landing-page4.jpg',
  './images/landing-page/landing-page5.jpg',
  './images/landing-page/landing-page6.jpg',
  './images/landing-page/landing-page7.jpg'
]
const imgWebDesign = [
  './images/web-design/web-design3.jpg',
  './images/web-design/web-design4.jpg',
  './images/web-design/web-design5.jpg',
  './images/web-design/web-design6.jpg'
]

const imgWordpress = [
  './images/wordpress/wordpress4.jpg',
  './images/wordpress/wordpress5.jpg',
  './images/wordpress/wordpress6.jpg',
  './images/wordpress/wordpress7.jpg'
]

let btn = document.querySelector('.button-work');
function addImageNode(imageArray,attributeName) {
  imageArray.forEach((item)=>{
      const ul= document.querySelector('.list-work-image');
      const li = document.querySelector('.item-work-image');
      const liNode = li.cloneNode(true);
      const imageNode = liNode.querySelector('img');
      imageNode.src = item;
      liNode.setAttribute('data-id', attributeName);
      ul.append(liNode);
  })
}
btn.addEventListener('click',(event)=>{
  addImageNode(imgGraphic, 'graphic-design');
  addImageNode(imgLandingPage, 'landing-pages');
  addImageNode(imgWebDesign, 'web-design');
  addImageNode(imgWordpress, 'wordpress');
  btn.remove();
})

// Section 5 Filter photos
const workList = document.querySelector(".list-work");
workList.addEventListener("click", (event)=>{
    const workItems = document.querySelectorAll(".item-work-image");
    if (event.target.tagName === "UL"){
        return;
    }
    if (event.target.tagName === "LI") {
        let active = document.querySelector(".works-title-active");
        active.classList.remove("works-title-active");
        event.target.classList.add("works-title-active");
    }
    const test = event.target.getAttribute("data-id");

    workItems.forEach((item) => {
        let tabs2 = item.getAttribute("data-id");
        if (test !== 'all'){
            tabs2 !== test ? item.classList.add('hide'): item.classList.remove("hide");
        }
        else {
            item.classList.remove("hide");
        }
    });
});

