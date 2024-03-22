var motivos = [
    " Eles são perfeitos",
    "eles sao a fanfic de um sonho",
    "eles sao a meta para o futuro",
    "e quase impossivel de isso acontecer em sua vida",
      "e eles sao tao fofos que nao ha motivos para nao se apaixonar"
  ];
  
  var imagens = [ "https://i.pinimg.com/736x/1a/f1/c9/1af1c9daa0e1c9a82dc7d8cf84b8d4d1.jpg",
    "https://noticiasdatv.uol.com.br/media/_versions/artigos/noah-centineo-lana-condor-para-todos-os-garotos-3-foto-katie-yu-netflix_fixed_large.jpg",
    "https://popseries.com.br/wp-content/uploads/2023/12/minha-culpa.png","https://i.pinimg.com/736x/d5/05/a3/d505a3ea5750640607af759fc13b9538.jpg","https://decider.com/wp-content/uploads/2022/11/enola-holmes-2-louis-partridge.jpg?quality=75&strip=all"
                 
  ];
  
  var i = 0;
  function proximo() {  document.getElementById("album").src = imagens[i];
      document.getElementById("texto").innerHTML = motivos[i];
      
      i++;  
     if(i>4){
       i=0;
     }
  }
  