document.addEventListener('DOMContentLoaded',function(){
    const sidebar=document.getElementById('sidebarElements');
    const togglebutton=document.getElementById('sidebartoggle');
    const toggleicon=document.getElementById('toggleicon');

    togglebutton.addEventListener('click',function(){
        if(sidebar.style.width==='0px'||sidebar.style.width===''){
            sidebar.style.width='400px';
        }
        else{
            sidebar.style.width='0px';
        }

        togglebutton.classList.toggle('change');
        
    })
})