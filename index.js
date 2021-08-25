// host button

const host = document.querySelector('#btn-host');
const hostDiv = document.querySelector('#btn-host-div');

host.addEventListener('click',()=>{
    
    if(hostDiv.style.display==='block')
    {
        hostDiv.style.display = 'none';
        host.innerHTML='More about your host ...';
    }
    else{
        hostDiv.style.display='block';
        host.innerHTML='Close details';
    }  
    
})

// teacher button

const teacher = document.querySelector('#btn-teacher');
const teacherDiv = document.querySelector('#btn-teacher-div');

teacher.addEventListener('click',()=>
{
    if(teacherDiv.style.display==='block'){
        teacherDiv.style.display='none';
        teacher.innerHTML='More about your teacher ...';
    }
    else{
        teacherDiv.style.display='block';
        teacher.innerHTML='Close details';
    }
})

// host button LG screen

const hostLg = document.querySelector('#btn-host-lg');
const hostDivLg = document.querySelector('#btn-host-div-lg');

hostLg.addEventListener('click',()=>{
    
    if(hostDivLg.style.display==='block')
    {
        hostDivLg.style.display = 'none';
        hostLg.innerHTML='More about your host ...';
    }
    else{
        hostDivLg.style.display='block';
        hostLg.innerHTML='Close details';
    }  
    
})

// teacher button LG screen

const teacherLg = document.querySelector('#btn-teacher-lg');
const teacherDivLg = document.querySelector('#btn-teacher-div-lg');

teacherLg.addEventListener('click',()=>
{
    if(teacherDivLg.style.display==='block'){
        teacherDivLg.style.display='none';
        teacherLg.innerHTML='More about your teacher ...';
    }
    else{
        teacherDivLg.style.display='block';
        teacherLg.innerHTML='Close details';
    }
})

// host button SM screen

const hostSm = document.querySelector('#btn-host-sm');
const hostDivSm = document.querySelector('#btn-host-div-sm');

hostSm.addEventListener('click',()=>{
    
    if(hostDivSm.style.display==='block')
    {
        hostDivSm.style.display = 'none';
        hostSm.innerHTML='More about your host ...';
    }
    else{
        hostDivSm.style.display='block';
        hostSm.innerHTML='Close details';
    }  
    
})

// teacher button SM screen

const teacherSm = document.querySelector('#btn-teacher-sm');
const teacherDivSm = document.querySelector('#btn-teacher-div-sm');

teacherSm.addEventListener('click',()=>
{
    if(teacherDivSm.style.display==='block'){
        teacherDivSm.style.display='none';
        teacherSm.innerHTML='More about your teacher ...';
    }
    else{
        teacherDivSm.style.display='block';
        teacherSm.innerHTML='Close details';
    }
})