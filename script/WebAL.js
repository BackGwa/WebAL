
function TrackingMouse(divname){
    const div = document.getElementById(divname);

    document.addEventListener("mousemove", function(event) {
        var rect = div.getBoundingClientRect();
        var angleX = -(event.clientY - rect.top - rect.height / 2) / rect.height * Math.PI;
        var angleY = (event.clientX - rect.left - rect.width / 2) / rect.width * Math.PI;
        
        div.style.transform = "rotateX(" + angleX + "rad) rotateY(" + angleY + "rad)";
      });
}