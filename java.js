document.getElementById("button").addEventListener("click",
            function()
            {
                document.querySelector(".bg-modal").style.display="flex";
            }
            );
document.getElementById("active").addEventListener("click",
            function()
            {
                document.querySelector(".bg-modal").style.display="flex";
            }
            );
    
document.querySelector(".close").addEventListener("click",
    function(){
        document.querySelector(".bg-modal").style.display="none";
    }
    );