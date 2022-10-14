var data = [
  {
    id:1,
    name: "bitwin",
    price: "$200",
    category: "ROCKRIDER",
    imgSrc: "https://images.jdmagicbox.com/quickquotes/images_main/btwin-riverside-100-hybrid-cycle-m-211004007-2y9f3.jpg",
    for: 'old'
  },
  {
    id:2,
    name: "Trello",
    price: "200dt",
    category: "THE RED Firee",
    imgSrc: "https://media.lesechos.com/api/v1/images/view/60383cde8fe56f54bf7333d6/1280x720/061503957826-web-tete.jpg",
    for: 'New'
  },
  {
    id:3,
    name: " RODEO 6020",
    price: "250 dt",
    category: "Star wars",
    imgSrc: "https://www.selectronic.fr/wp-content/uploads/2020/02/angell-smartbike.jpg",
    for: 'New'
  },
  {
    id:4,
    name: "Evolution 26",
    price: "250dt",
    category: "star wars",
    imgSrc: "https://reine-bike.com/wp-content/uploads/2021/01/Reine_Velo_or-1.png",
    for: 'New'
  },
  {
    id:5,
    name: "Apache ",
    price: "300 dt",
    category: "ROCKSTAR",
    imgSrc: "https://m.media-amazon.com/images/I/71OyIeFwomL._AC_SX425_.jpg",
    for: 'New'
  },
  {
    id:6,
    name: "JOKER",
    price: "300 dt",
    category: "ROCKSTAR",
    imgSrc: "https://cdn.futura-sciences.com/cdn-cgi/image/width=1024,quality=60,format=auto/sources/images/2-Magic-Bike-decathlon_2.png",
    for: 'old'
  },
  {
    id:7,
    name: "MANTricycle Love",
    price: "400 dt",
    category: "Puk Rodeo T227",
    imgSrc: "https://www.zoom.com.tn/50616-thickbox_default/bicyclette-vtt-prado-double-suspension-bleu.jpg",
    for: 'old'
  },

];


function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function (element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function map(array, func) {
  var acc = [];
  each(array, function (element, i) {
    acc.push(func(element, i));
  });
  return acc;
}

function reduce(array, f, acc) {
  if (acc === undefined) {
    acc = array[0];
    array = array.slice(1);
  }
  each(array, function (element, i) {
    acc = f(acc, element, i);
  });
  return acc;
}

var data1 = [
  {
    id:1,
    name: "bitwin",
    price: "$200",
    category: "ROCKRIDER",
    imgSrc: "https://images.jdmagicbox.com/quickquotes/images_main/btwin-riverside-100-hybrid-cycle-m-211004007-2y9f3.jpg",
    for: 'old'
  },
 
  {
    id:6,
    name: "JOKER",
    price: "300 dt",
    category: "ROCKSTAR",
    imgSrc: "https://cdn.futura-sciences.com/cdn-cgi/image/width=1024,quality=60,format=auto/sources/images/2-Magic-Bike-decathlon_2.png",
    for: 'old'
  },
  {
    id:7,
    name: "MANTricycle Love",
    price: "400 dt",
    category: "Puk Rodeo T227",
    imgSrc: "https://www.zoom.com.tn/50616-thickbox_default/bicyclette-vtt-prado-double-suspension-bleu.jpg",
    for: 'old'
  },

];


var format
var counter = 200
var myEach = function (array) {
  return map(array, function (e,key) {
    format = $(`<div class="parent">
        <div class="div1"> 
        <div class="card" style="width: 18rem;">
              <img src=${e.imgSrc} class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${e.name}</h5>
                <p class="card-text">${e.category}</p>
                <hr>
                <h3>${e.price}
                <hr>
                <button  onclick="ss()" id="add" href="#" class="btn btn-primary">Add Card</button>
            </div>
            </div>
        </div>
      `)

    $(".container").append(format);
    var bob = document.getElementById('add')
    elem = e.price
  }
  )

}
function ss(){
   if(counter === 200){
     counter += 200
   }
  document.getElementById("count").innerHTML=  counter

}
$(document).ready(myEach(data))


/*$("#search").click(function () {
  $(".grid-item").remove();
  var filtred = [];
  filtred = filter(data, function (e, i) {
    return e <= e.price || e === e.category || e === e.name;
  });
  myEach(filtred);
});

$('.cart').on("click", function (e) {
  var price = $(e.target).siblings();
  Cart.push(parseInt(price[1].innerHTML.slice(1)) + 1)
  $('#prices').append($('<div class="cartItem"><p>' + price[1].innerHTML + '</p>'))
  var total = Cart.reduce(function (a, b) { return a + b }, 0)
  $("#total").text("total: $" + total)

});*/
myEach(data);
var obj  
var format1
var newbike = function (data1) {
  return filter(data1, function (elem) {
   //filter the new bikes
   if(elem.for === 'new'){
    obj = elem
   }
    console.log(obj)
    var ss =document.getElementsByClassName("container")
    $(ss).removeClass()
    format1 = $(`<div class="parent">
    <div class="div1"> 
    <div class="card" style="width: 18rem;">
          <img src=${obj.imgSrc} class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${obj.name}</h5>
            <p class="card-text">${obj.category}</p>
            <hr>
            <h3>${obj.price}
            <hr>
            <button  onclick="ss()" id="add" href="#" class="btn btn-primary">Add Card</button>
        </div>
        </div>
    </div>
  `)

$(".container1").append(format1);


    
  })
}