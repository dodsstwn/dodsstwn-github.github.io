function getDataPemesan() {
    let namaPemesan = document.getElementById("namaUser").value  
        console.log(namaPemesan)
    let hpPemesan = document.getElementById("hpUser").value
        console.log(hpPemesan)
    let pilihKain = document.getElementById("kain").value
        console.log(pilihKain)
    let pilihUkuran = document.getElementById("ukuran").value
        console.log(pilihUkuran)
    let pilihLengan = document.getElementById("lengan").value
        console.log(pilihLengan)

    let totalPrice = 0
    
    if (pilihKain === 'Combed 30s') {
        totalPrice += 25000
    } else if (pilihKain === 'Combed 24s') {
        totalPrice += 28000
    } else if (pilihKain === 'Cotton Bamboo') {
        totalPrice += 30000
    } else if (pilihKain === 'Cotton Modal') {
        totalPrice += 33000 
    }

    if (pilihUkuran === 'XL') {
        totalPrice += 3000
    }

    if (pilihLengan === 'long') {
        totalPrice += 5000
    } 

    alert(`Thank you ${namaPemesan}. Your detail ordered is a T-shirt with ${pilihKain} cloth, size ${pilihUkuran} ${pilihLengan} sleeve. The total price of your order is IDR${totalPrice}.`)
}

