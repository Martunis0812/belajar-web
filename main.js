let tempat_gambar1 = document.querySelector('.tempat_gambar1')
let tempat_gambar2 = document.querySelector('.tempat_gambar2')
let tempat_gambar3 = document.querySelector('.tempat_gambar3')
let div2 = document.querySelector('.div2')
let tulisan_bawah = document.querySelector('.tulisan_bawah')
let bot = document.querySelector('.bot')
let bot_level = document.querySelector('.bot_level')
let h11 = document.querySelector('.h11')
let div3 = document.querySelector('.div3')
let gambar_lawan = document.querySelector('.gambar_lawan')
let batu = document.querySelector('.batu')
let gunting = document.querySelector('.gunting')
let kertas = document.querySelector('.kertas')
let batu_kosong = document.querySelector('.batu_kosong')
let h1_1 = document.querySelector('.h1_1')
let h1_0 = document.querySelector('.h1_0')

let acak = (Math.random() * 3 | 0) + 1;
let arah;

div3.style.display = 'none'
gambar_lawan.style.display = 'none'
batu_kosong.style.width = '120px'
h1_1.style.display = 'none'
h1_0.style.display = 'none'



function mouseKeluar() {
    tempat_gambar1.style.transition = '1s ease-in-out'
    tempat_gambar2.style.transition = '1s ease-in-out'
    tempat_gambar3.style.transition = '1s ease-in-out'
}
function pemula() {
    bot.src = "img/robot1-removebg-preview.png"
    tempat_gambar1.style.display = 'none'
    tempat_gambar2.style.display = 'none'
    tempat_gambar3.style.display = 'none'
    tulisan_bawah.style.display = 'none'
    div3.style.display = 'block'
    div3.style.display = 'flex'
    div3.style.justifyContent = 'center'
    div3.style.alignItems = 'center'
    h11.textContent = 'Ayo Pilih!'
    batu_kosong.style.display = 'none'
    h1_1.style.display = 'block'
   



    arah = 1;
}

function ahli() {
    bot.src = "img/robot2-removebg-preview.png"
    tempat_gambar1.style.display = 'none'
    tempat_gambar2.style.display = 'none'
    tempat_gambar3.style.display = 'none'
    tulisan_bawah.style.display = 'none'
    div3.style.display = 'block'
    div3.style.display = 'flex'
    div3.style.justifyContent = 'center'
    div3.style.alignItems = 'center'
    h11.textContent = 'Ayo Pilih!'
    batu_kosong.style.display = 'none'
    h1_1.style.display = 'block'
    


    arah = 2;
}
function master() {
    bot.src = "img/robot3-removebg-preview.png"
    tempat_gambar1.style.display = 'none'
    tempat_gambar2.style.display = 'none'
    tempat_gambar3.style.display = 'none'
    tulisan_bawah.style.display = 'none'
    div3.style.display = 'block'
    div3.style.display = 'flex'
    div3.style.justifyContent = 'center'
    div3.style.alignItems = 'center'
    h11.textContent = 'Ayo Pilih!'
    batu_kosong.style.display = 'none'
    h1_1.style.display = 'block'
    

    arah = 3;
}

function pogramPemula() {
     acak = (Math.random() * 3 | 0) + 1;
    if (arah == 1) {
        console.log(acak)
        if (acak == 1) {
            gambar_lawan.style.display = 'block'
            // h11.style.display = 'none'
            gambar_lawan.src = "img/batu_balik.png"
            batu.style.display = 'none'
            gunting.style.display = 'none'
            kertas.style.display = 'none'
            batu_kosong.style.display = 'block'
        } else if (acak == 2) {
            gambar_lawan.style.display = 'block'
            // h11.style.display = 'none'
            gambar_lawan.src = "img/gunting_balik.png"
            batu.style.display = 'none'
            gunting.style.display = 'none'
            kertas.style.display = 'none'
            batu_kosong.style.display = 'block'
        } else if (acak == 3) {
            gambar_lawan.style.display = 'block'
            // h11.style.display = 'none'
            gambar_lawan.src = "img/kertas_balik.png"
            batu.style.display = 'none'
            gunting.style.display = 'none'
            kertas.style.display = 'none'
            batu_kosong.style.display = 'block'

        }
    }
}
function pogramAhli() {
     acak = (Math.random() * 3 | 0) + 1;
    if (arah == 2) {
        console.log(acak)
        if (acak == 1) {
            gambar_lawan.style.display = 'block'
            // h11.style.display = 'none'
            gambar_lawan.src = "img/batu_balik.png"
            batu.style.display = 'none'
            gunting.style.display = 'none'
            kertas.style.display = 'none'
            batu_kosong.style.display = 'block'
        } else if (acak == 2) {
            gambar_lawan.style.display = 'block'
            // h11.style.display = 'none'
            gambar_lawan.src = "img/gunting_balik.png"
            batu.style.display = 'none'
            gunting.style.display = 'none'
            kertas.style.display = 'none'
            batu_kosong.style.display = 'block'
        } else if (acak == 3) {
            gambar_lawan.style.display = 'block'
            // h11.style.display = 'none'
            gambar_lawan.src = "img/kertas_balik.png"
            batu.style.display = 'none'
            gunting.style.display = 'none'
            kertas.style.display = 'none'
            batu_kosong.style.display = 'block'

        }
    }
}
function pogramMaster() {
    acak = (Math.random() * 3 | 0) + 1;
    if (arah == 3) {
        console.log('pogramMaster')
        gambar_lawan.style.display = 'block'
        // h11.style.display = 'none'
        batu.style.display = 'none'
        gunting.style.display = 'none'
        kertas.style.display = 'none'
        batu_kosong.style.display = 'block'
    }
}
function pilihBatu() {
    batu_kosong.src = "img/batu.png"
    h1_0.style.display = 'block'
    

    if (arah == 3) {
        gambar_lawan.style.display = 'block'
        gambar_lawan.src = "img/kertas_balik.png"
    }

    if (gambar_lawan.src.includes("kertas_balik.png")) {
        // h11.style.display = 'block'
        h11.textContent = 'Anda kalah!,Mau coba lagi?'
    } else if (gambar_lawan.src.includes("gunting_balik.png")) {
        // h11.style.display = 'block'
        h11.textContent = 'Anda menang!,Mau coba lagi?'
    } else {
        h11.textContent = 'kita seri!,Mau coba lagi?'
    }

}
function pilihGunting() {
    batu_kosong.src = "img/gunting.png"
    h1_0.style.display = 'block'
    

    if (arah == 3) {
        gambar_lawan.style.display = 'block'
        gambar_lawan.src = "img/batu_balik.png"
    }

    if (gambar_lawan.src.includes("kertas_balik.png")) {
        // h11.style.display = 'block'
        h11.textContent = 'Anda menang!,Mau coba lagi?'
    } else if (gambar_lawan.src.includes("batu_balik.png")) {
        // h11.style.display = 'block'
        h11.textContent = 'Anda kalah!,Mau coba lagi?'
    } else {
        h11.textContent = 'kita seri!,Mau coba lagi?'
    }
}
function pilihKertas() {
    batu_kosong.src = "img/kertas.png"
    h1_0.style.display = 'block'
    

    if (arah == 3) {
        gambar_lawan.style.display = 'block'
        gambar_lawan.src = "img/gunting_balik.png"
    }


    if (gambar_lawan.src.includes("batu_balik.png")) {
        // h11.style.display = 'block'
        h11.textContent = 'Anda menang!,Mau coba lagi?'
    } else if (gambar_lawan.src.includes("gunting_balik.png")) {
        // h11.style.display = 'block'
        h11.textContent = 'Anda kalah!,Mau coba lagi?'
    } else {
        h11.textContent = 'kita seri!,Mau coba lagi?'
    }
}
function klickHome() {
    location.reload()
}
function mainLagi() {
    acak = (Math.random() * 3 | 0) + 1;
    
    h11.textContent = 'Ayo Pilih!';
    h1_0.style.display = 'none';
    gambar_lawan.style.display = 'none';
    batu_kosong.style.display = 'none';
    batu.style.display = 'block';
    gunting.style.display = 'block';
    kertas.style.display = 'block';
    

}
