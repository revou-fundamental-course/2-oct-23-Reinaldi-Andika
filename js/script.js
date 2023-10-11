//Ambil data berdasarkan ID
let labelInput = document.getElementById('label-input')
let labelResult = document.getElementById('label-result')
let ambilInputan = document.getElementById('ambilInputan')
let hasilKonversi = document.getElementById('hasilKonversi')
let hasilKalkulasi = document.getElementById('hasilKalkulasi')
let explain = document.getElementById('explanations')
let valueConvertSelection = true


function hitungKonversi(value, text) {
    hasilKonversi.innerHTML = value
    hasilKalkulasi.innerHTML = text
}

function tombolKonversi() {
    let dataInputan = ambilInputan.value
    if (valueConvertSelection) {
        let rumusKonversi = (dataInputan * 9 / 5) + 32;
        let kalimatKonversi = dataInputan + "°C x (9/5) + 32 = " + rumusKonversi + "°F"
        console.log("Hasil perhitungan = " + rumusKonversi)
        //kirim 2 variabel diatas ke function hitungKonversi
        hitungKonversi(rumusKonversi, kalimatKonversi)
        
    } else {
        let rumusKonversi = (dataInputan - 32) * 5 / 9
        let kalimatKonversi = dataInputan + "°F - 32 * 5/9 = " + rumusKonversi + "°C"
        console.log("Hasil perhitungan = " + rumusKonversi)
         //kirim 2 variabel diatas ke function hitungKonversi
        hitungKonversi(rumusKonversi, kalimatKonversi)
    }
}

function reverse() {
    if (valueConvertSelection) {
        labelInput.textContent = "Fahrenheit (°F):"
        labelResult.textContent = "Celsius (°C):"
        explain.innerHTML = `<h1 class="explenation-heading">Cara Konversi Dari Fahrenheit (°F) ke Celcius (°C)</h1>
            <hr>
            <p>
                Suhu <span>S</span> dalam derajat Celsius (°C) sama dengan suhu <span>S</span> dalam derajat <br>
                Fahrenheit (°F) kurang 32 kali 5/9
            </p>
            <p><span>S</span><sub>(°C)</sub>&ensp;=&ensp;(<span>S</span><sub>(°F)</sub> -32) * 5/9</p>`
        valueConvertSelection = false
    } else {
        labelInput.textContent = "Celsius (°C):"
        labelResult.textContent = "Fahrenheit (°F):"
        explain.innerHTML = `<h1 class="explenation-heading">Cara Konversi Dari Celcius (°C) ke Fahrenheit (°F)</h1>
            <hr>
            <p>
                Suhu <span>S</span> dalam derajat Fahrenheit (°F) sama dengan suhu <span>S</span> dalam derajat <br>
                Celsius (°C) kali 9/5 tambah 32
            </p>
            <p><span>S</span><sub>(°F)</sub>&ensp;=&ensp;(<span>S</span><sub>(°C)</sub> x 9/5 + 32)</p>
            <p>atau</p>
            <p><span>S</span><sub>(°F)</sub>&ensp;=&ensp;(<span>S</span><sub>(°C)</sub> x 1.8 + 32)</p>`
        valueConvertSelection = true
    }
}

