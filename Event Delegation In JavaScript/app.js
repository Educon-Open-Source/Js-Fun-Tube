




document.querySelector('.btn').addEventListener('click',()=>{

   document.querySelector('.addextra').innerHTML=``;



   document.querySelector('.addextra').innerHTML=` <div class="rqform">
                                                        <form>
                                                                <label >Email address</label>
                                                                <input type="email">

                                                                <br>
                                                            
                                                                <label >Password</label>
                                                                <input type="password">

                                                                <br>

                                                            <button class="btn-sub">Submit</button>
                                                        </form>
                                                    </div>   `;
})


document.querySelector('.addextra').addEventListener('click',(e)=>{

    let target  =  e.target;

    if(target.classList.contains('btn-sub')){

        alert("btn 2 clicked")
    }



})