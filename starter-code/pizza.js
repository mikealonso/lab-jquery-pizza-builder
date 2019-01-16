// Write your Pizza Builder JavaScript in this file.
var pepButton = $('.btn-pepperonni')
var musButton = $('.btn-mushrooms')
var greButton = $('.btn-green-peppers')
var crustButton = $('.btn-crust')
var sauceButton = $ ('.btn-sauce')
var precioFinal = $('strong')

var pepPrecio =$('.price ul li:nth-child(1)')
var musPrecio =$('.price ul li:nth-child(2)')
var grePrecio =$('.price ul li:nth-child(3)')
var saucePrecio =$('.price ul li:nth-child(4)')
var crustPrecio =$('.price ul li:nth-child(5)')

var precio = 21

//complements
var pepperonis = $('.pep')
var mushrooms = $('.mushroom')
var peppers = $('.green-pepper')
var crusty =$('.crust')
var sauce=$('.sauce')

//logic
pepButton.click(function(){
    pepperonis.toggle()
    pepButton.toggleClass('active')
    if (pepPrecio.is(':visible')){
        pepPrecio.hide()
    }else{
        pepPrecio.show()
    }
    if(pepButton.hasClass('active')){
        precio=precio+1
    }else{
        precio=precio-1
    }
    precioFinal.text('$'+precio)
})

musButton.click(function(){
    mushrooms.toggle()
    musButton.toggleClass('active')
    if (musPrecio.is(':visible')){
        musPrecio.hide()
    }else{
        musPrecio.show()
    }
    if(musButton.hasClass('active')){
        precio=precio+1
    }else{
        precio=precio-1
    }
    
    precioFinal.text('$'+precio)
})

greButton.click(function(){
    peppers.toggle()
    greButton.toggleClass('active')
    if (grePrecio.is(':visible')){
        grePrecio.hide()
    }else{
        grePrecio.show()
    }
    if(greButton.hasClass('active')){
        precio=precio+1
    }else{
        precio=precio-1
    }
    precioFinal.text('$'+precio)
})

crustButton.click(function(){
    crusty.toggleClass('crust-gluten-free')
    crustButton.toggleClass('active')
    if (crustPrecio.is(':visible')){
        crustPrecio.hide()
    }else{
        crustPrecio.show()
    }
    if(crustButton.hasClass('active')){
        precio=precio+5
    }else{
        precio=precio-5
    }
    precioFinal.text('$'+precio)
})

sauceButton.click(function(){
    sauce.toggleClass('sauce-white')
    sauceButton.toggleClass('active')
    if (saucePrecio.is(':visible')){
        saucePrecio.hide()
    }else{
        saucePrecio.show()
    }
    if(sauceButton.hasClass('active')){
        precio=precio+3
    }else{
        precio=precio-3
    }
    precioFinal.text('$'+precio)
})
