var marker = document.querySelector('#marker');
var items=document.querySelectorAll('.collapse li');
                    function indicator(e){
                    marker.style.left = e.offsetLeft+"px";
                    marker.style.width = e.offsetWidth+"px";
                    }

                    items.forEach((item)=>{
                    item.addEventListener('click',(e)=>{
                        indicator(e.target);
                    })
                    })