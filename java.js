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
var bt = document.getElementsByClassName("ghost-button");
    function addGhostButton()
    {
        document.querySelector(".bg-modal").style.display="flex";
    };

    for (i = 0; i < bt.length; i++) {
        bt[i].addEventListener("click", addGhostButton);
    }
    
