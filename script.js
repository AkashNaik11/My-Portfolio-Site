const resumeLists= document.querySelectorAll('.resume-list');
const resumeBoxes=document.querySelectorAll('.resume-box');
const portfolioLists= document.querySelectorAll('.portfolio-list');
const portfolioBoxes=document.querySelectorAll('.portfolio-box');



// ---------------Resume section selection for tab-list--------

resumeLists.forEach((list,idx)=>{
    list.addEventListener('click',()=>{
        document.querySelector('.resume-list.active').classList.remove('active');
        list.classList.add('active');

        document.querySelector('.resume-box.active').classList.remove('active');
        resumeBoxes[idx].classList.add('active');
    })
});

portfolioLists.forEach((list,idx)=>{
    list.addEventListener('click',()=>{
        document.querySelector('.portfolio-list.active').classList.remove('active');
        list.classList.add('active');

        document.querySelector('.portfolio-box.active').classList.remove('active');
        portfolioBoxes[idx].classList.add('active');
    })
});

