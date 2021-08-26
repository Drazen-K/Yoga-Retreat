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





// form data storing on LG screen

const form = document.querySelector('#formXl');

form.addEventListener('submit', e=>{

    e.preventDefault();
    
    const formData = {
        salutation:form.prefixXl.value,
        firstName:form.firstNameXl.value,
        lastName:form.lastNameXl.value,
        email:form.emailXl.value,
        phoneNumber:form.phoneNumberXl.value,
        startingDate:form.dateXl.value,
        roomType:form.roomTypeXl.value,
        comments:form.commentsXl.value
    };

    db.collection('Yoga retreat').add(formData).then(()=>{
        console.log('Data form added');}).catch(err=>{
            console.log(err);
        });

        alert('Thank you ' + form.firstNameXl.value + '. Your retreat is booked successfully!')
})

// form data storing on mobile screen

const formSm = document.querySelector('#formSm');

formSm.addEventListener('submit', e=>{

    e.preventDefault();
    
    const formDataSm = {
        salutation:formSm.prefixSm.value,
        firstName:formSm.firstNameSm.value,
        lastName:formSm.lastNameSm.value,
        email:formSm.emailSm.value,
        phoneNumber:formSm.phoneNumberSm.value,
        startingDate:formSm.dateSm.value,
        roomType:formSm.roomTypeSm.value,
        comments:formSm.commentsSm.value
    };

    db.collection('Yoga retreat').add(formDataSm).then(()=>{
        console.log('Data form added');}).catch(err=>{
            console.log(err);
    });

        alert('Thank you ' + formSm.firstNameSm.value + '. Your retreat is booked successfully!')
})


// Live form Names validation

let firstNamePattern = /^[a-zA-Z \-]{3,20}$/;

form.firstName.addEventListener('keyup', (e)=>{
    if(firstNamePattern.test(form.firstName.value)){
        //console.log('success');
       form.firstName.style.backgroundColor = 'rgb(33, 172, 33)';
       form.firstName.style.color = 'white';
    }
    else {
        form.firstName.style.backgroundColor = 'rgb(212, 55, 55)';
        form.firstName.style.color = 'white';
    }
})

form.Last_name.addEventListener('keyup', (e)=>{
    if(firstNamePattern.test(form.Last_name.value)){
        //console.log('success');
       form.Last_name.style.backgroundColor = 'rgb(33, 172, 33)';
       form.Last_name.style.color = 'white';
    }
    else {
        form.Last_name.style.backgroundColor = 'rgb(212, 55, 55)';
        form.Last_name.style.color = 'white';
    }
})

//  Email validation

let emailPattern = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,7})$/

form.Email.addEventListener('keyup', (e)=>{
    if(emailPattern.test(form.Email.value)){
        //console.log('success');
       form.Email.style.backgroundColor = 'rgb(33, 172, 33)';
       form.Email.style.color = 'white';
    }
    else {
        form.Email.style.backgroundColor = 'rgb(212, 55, 55)';
        form.Email.style.color = 'white';
    }
})

//   Phone validation

let mobilePattern = /^[0-9\+]{10,13}$/

form.Phone_number.addEventListener('keyup', (e)=>{
    if(mobilePattern.test(form.Phone_number.value)){
        //console.log('success');
       form.Phone_number.style.backgroundColor = 'rgb(33, 172, 33)';
       form.Phone_number.style.color = 'white';
    }
    else {
        form.Phone_number.style.backgroundColor = 'rgb(212, 55, 55)';
        form.Phone_number.style.color = 'white';
    }
})


//     Validation for names on Sm screen


formSm.First_name.addEventListener('keyup', (e)=>{
    if(firstNamePattern.test(formSm.First_name.value)){
        //console.log('success');
       formSm.First_name.style.backgroundColor = 'rgb(33, 172, 33)';
       formSm.First_name.style.color = 'white';
    }
    else {
        formSm.First_name.style.backgroundColor = 'rgb(212, 55, 55)';
        formSm.First_name.style.color = 'white';
    }
})

formSm.Last_name.addEventListener('keyup', (e)=>{
    if(firstNamePattern.test(formSm.Last_name.value)){
        //console.log('success');
       formSm.Last_name.style.backgroundColor = 'rgb(33, 172, 33)';
       formSm.Last_name.style.color = 'white';
    }
    else {
        formSm.Last_name.style.backgroundColor = 'rgb(212, 55, 55)';
        formSm.Last_name.style.color = 'white';
    }
})


//   Email validation on Sm screen

formSm.Email.addEventListener('keyup', (e)=>{
    if(emailPattern.test(formSm.Email.value)){
        //console.log('success');
       formSm.Email.style.backgroundColor = 'rgb(33, 172, 33)';
       formSm.Email.style.color = 'white';
    }
    else {
        formSm.Email.style.backgroundColor = 'rgb(212, 55, 55)';
        formSm.Email.style.color = 'white';
    }
})

// Phone validation on Sm screen

formSm.Phone_numberSm.addEventListener('keyup', (e)=>{
    if(mobilePattern.test(formSm.Phone_numberSm.value)){
        //console.log('success');
       formSm.Phone_numberSm.style.backgroundColor = 'rgb(33, 172, 33)';
       formSm.Phone_numberSm.style.color = 'white';
    }
    else {
        formSm.Phone_numberSm.style.backgroundColor = 'rgb(212, 55, 55)';
        formSm.Phone_numberSm.style.color = 'white';
    }
})