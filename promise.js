let latihan = new Promise((resolve, reject) => {
    let sukses = true;  
    // kalo mau gagal ganti truenya jadi false

    if (sukses) {
        resolve("berhasil");
    } else {
        reject("gagal");
    }
});

latihan
    .then((result) => console.log(result))
    .catch((error) => console.log(error));