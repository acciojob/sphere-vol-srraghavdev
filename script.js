function volume_sphere() {
    let radref = document.getElementById('radius')
    let rad= radref.value
    let volref= document.getElementById("volume")
    volref.value=((4/3)*(22/7)*(rad*rad*rad))
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
