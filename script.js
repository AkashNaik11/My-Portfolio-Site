const resumeLists= document.querySelectorAll('.resume-list');
const resumeBoxes=document.querySelectorAll('.resume-box')



// ---------------Resume section selection for tab-list--------

resumeLists.forEach((list,idx)=>{
    list.addEventListener('click',()=>{
        document.querySelector('.resume-list.active').classList.remove('active');
        list.classList.add('active');

        document.querySelector('.resume-box.active').classList.remove('active');
        resumeBoxes[idx].classList.add('active');
    })
});

