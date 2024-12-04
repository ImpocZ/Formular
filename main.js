


let trojclenka = {
    x: 0,
    y: 0,
    z: 0,
    g: 0,
    typ: '',

    alfa: function(x = this.x || 0, y = this.y || 0, z = this.z || 0, g = this.g || 0, typ = this.typ)
    {
        if (x === 0 && y!=0 && z!=0 && g!=0){
            return typ === 'přímá'? z/g*y : g/z*y;
        } else if (y === 0 && x!=0 && z!=0 && g!=0){
            return typ === 'přímá'? g*x/z : z/x*g;
        } else if (z === 0 && y!=0 && x!=0 && g!=0){
            return typ === 'přímá'? g/y*x : y/g*x;
        } else if (g === 0 && y!=0 && z!=0 && x!=0){
            return typ === 'přímá'? z/x*y : x/z*y;
        } else return "Invalid input, check your input and make sure there are not any mistakes.";
        
    }
}



document.getElementById('calculator').addEventListener('click', function() {
    trojclenka.typ = document.getElementById('přímá').checked ? 'přímá' : 'nepřímá';
    trojclenka.x = parseFloat(document.getElementById('X').value);
    trojclenka.y = parseFloat(document.getElementById('Y').value);
    trojclenka.z = parseFloat(document.getElementById('Z').value);
    trojclenka.g = parseFloat(document.getElementById('G').value);

    console.log("Typ:", trojclenka.typ);
    console.log("X:", trojclenka.x);
    console.log("Y:", trojclenka.y);
    console.log("Z:", trojclenka.z);
    console.log("G:", trojclenka.g);
    console.log("Result:", trojclenka.alfa());

    document.getElementById('alfaResult').innerHTML = `${trojclenka.alfa()}`;
});

