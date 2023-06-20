function volume_sphere() {
    let radref = document.getElementById('radius')
    let rad= radref.value
    let volref= document.getElementById("volume")
    volref.value=((4/3)*(3.1415926535898)*(rad*rad*rad)).toFixed(4)
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere();
