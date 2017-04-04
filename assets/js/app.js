var array = [ { nombre : "Anais", apellido : "Araya",  promocion : "4ta. Promoción", sede : "Chile", grupo:"4-chile", src: "4-chile/anais-araya%20.jpg" }, { nombre : "Andrea", apellido : "Miranda",  promocion : "4ta. Promoción", sede : "Chile", grupo:"4-chile", src: "4-chile/andrea-miranda.jpg" }, { nombre : "Berenisse", apellido : "Ríos",  promocion : "4ta. Promoción", sede : "Chile", grupo:"4-chile", src: "4-chile/berenisse-r%C3%ADos.jpg"}, { nombre : "Caterina", apellido : "Da Silva",  promocion : "4ta. Promoción", sede : "Chile", grupo:"4-chile", src: "4-chile/caterina-da-silva.jpg"}, { nombre : "Daniela", apellido : "Sanchez",  promocion : "4ta. Promoción", sede : "Chile", grupo:"4-chile", src: "4-chile/daniela-sanchez.jpg"}, { nombre : "Francisca", apellido : "Ojeda",  promocion : "4ta. Promoción", sede : "Chile", grupo:"4-chile", src: "4-chile/francisca-ojeda.jpg"}, { nombre : "Katerine", apellido : "Sandoval",  promocion : "4ta. Promoción", sede : "Chile", grupo:"4-chile", src: "4-chile/katerine-sandoval.jpg"}, { nombre : "Andrea", apellido : "Cabrera",  promocion : "5ta. Promoción", sede : "Lima", grupo:"5-lima", src: "5-lima/andrea-cabrera.jpg"}, { nombre : "Ariadna", apellido : "Izaguirre",  promocion : "5ta. Promoción", sede : "Lima", grupo:"5-lima", src: "5-lima/ariadna-izaguirre.jpg"}, { nombre : "Carito", apellido : "Juarez",  promocion : "5ta. Promoción", sede : "Lima", grupo:"5-lima", src: "5-lima/carito-juarez.jpg"}, { nombre : "Cristy", apellido : "Castro",  promocion : "5ta. Promoción", sede : "Lima", grupo:"5-lima", src: "5-lima/cristy-castro.jpg"}, { nombre : "Karol", apellido : "Orrillo",  promocion : "5ta. Promoción", sede : "Lima", grupo:"5-lima", src: "5-lima/karol-orrillo.jpg"}, { nombre : "Paola", apellido : "Ortiz",  promocion : "5ta. Promoción", sede : "Lima", grupo:"5-lima", src: "5-lima/paola-ortiz.jpg"}, { nombre : "Teresa", apellido : "Lara",  promocion : "5ta. Promoción", sede : "Lima", grupo:"5-lima", src: "5-lima/teresa-lara.jpg"}, { nombre : "Arantza", apellido : "Burga",  promocion : "6ta. Promoción", sede : "Lima", grupo:"6-lima", src: "6-lima/arantza-burga.jpg"}, { nombre : "Daguiana", apellido : "Revoredo",  promocion : "6ta. Promoción", sede : "Lima", grupo:"6-lima", src: "6-lima/daguiana-revoredo.jpg"}, { nombre : "Elizabeth", apellido : "Condori",  promocion : "6ta. Promoción", sede : "Lima", grupo:"6-lima",  src: "6-lima/elizabeth-condori.jpg"}, { nombre : "Grecia", apellido : "Rayme",  promocion : "6ta. Promoción", sede : "Lima",  grupo:"6-lima", src: "6-lima/grecia-rayme.jpg"}, { nombre : "Janine", apellido : "Vega",  promocion : "6ta. Promoción", sede : "Lima",  grupo:"6-lima", src: "6-lima/janine-vega.jpg"}, { nombre : "Michelle", apellido : "More",  promocion : "6ta. Promoción", sede : "Lima", grupo:"6-lima",  src: "6-lima/michelle-more.jpg"}, { nombre : "Mishel", apellido : "Velasquez",  promocion : "6ta. Promoción", sede : "Lima", grupo:"6-lima",  src: "6-lima/mishel-velasquez.jpg"}, { nombre : "Rosario", apellido : "Felix",  promocion : "6ta. Promoción", sede : "Lima",  grupo:"6-lima", src: "6-lima/rosario-felix.jpg"} ];

var liCoder = document.getElementsByClassName("coder");
var select = document.getElementById("select");
var coders = document.getElementById('coders');  //parent

window.addEventListener('load', function(){
  array.forEach(function(e){
    var fragment = document.createDocumentFragment();
    elementoLi = document.createElement("li");
    elementoLi.setAttribute("class","coder all");
    elementoH4 = document.createElement("h4");
    elementoH4.innerHTML = e.nombre+" "+e.apellido;
    elementoDIV = document.createElement("div");
    elementoDIV.setAttribute("class","overlay");
    elementoIMG = document.createElement("img");
    elementoIMG.setAttribute("src","assets/img/" + e.src);
    elementoLi.appendChild(elementoH4);
    elementoLi.appendChild(elementoDIV);
    elementoLi.appendChild(elementoIMG);
    fragment.appendChild(elementoLi);
    coders.appendChild(fragment);
  });
});

select.onchange = function(){
  array.forEach(function(e,i){
    if(select.value==e.grupo)
    {
      // for(var j =i; j<img.length;j++){
      //     eliminar(img[j].classList);
      //     img[j].classList.add(e.grupo);
      // }
    }
  });
}
