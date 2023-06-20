function volume_sphere(event) {
	event.preventDefault();
    let radref = document.getElementById('radius')
    let rad= radref.value
    let volref= document.getElementById("volume")
    volref.value=((4/3)*(Math.pi)*(rad*rad*rad)).toFixed(4)
} 

window.onload = function() {
document.getElementById('MyForm').addEventListener('submit', volume_sphere);
};
