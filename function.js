let productArray = [];
let kodeIncrement = 1;

function saveproduct() {
    const KodeProduk = document.getElementById("KodeProduk").value;
    const NamaProduk = document.getElementById("NamaProduk").value;
    const HargaProduk = document.getElementById("HargaProduk").value;
    const Gelas = document.getElementById("Gelas").value;
    const kategori = document.getElementById("kategori").value;
    const StockAwal = document.getElementById("StockAwal").value;
    const UrlGambar = document.getElementById("UrlGambar").value;
    const editIndex = document.getElementById("editIndex").value;

    if (editIndex === "-1") {
        const kodeproduk = "MD-" + String(kodeIncrement).padStart(3, "0");
        productArray.push({
        KodeProduk,
        NamaProduk,
        HargaProduk,
        Gelas,
        kategori,
        StockAwal,
        UrlGambar,
    });

    kodeIncrement++;
    } else {
        productArray[editIndex] ={
            ...productArray[editIndex],
            KodeProduk,
            NamaProduk,
            HargaProduk,
            Gelas,
            kategori,
            StockAwal,
            UrlGambar,
        };
    }
    


    

    renderTable();
    resetForm();
    
    document.getElementById("KodeProduk").value = "MD-" + String(kodeIncrement).padStart(3, "0");
    document.getElementById("NamaProduk").value;
    document.getElementById("HargaProduk").value;
    document.getElementById("Gelas").value;
    document.getElementById("kategori").value;
    document.getElementById("StockAwal").value;
    document.getElementById("UrlGambar").value;
  


}
function renderTable() {
    const tableBody = document
    .getElementById("ProductTable")
        .getElementsByTagName("tbody")[0];
    tableBody.innerHTML = "";

    productArray.forEach((product, index) => {
        const row = tableBody.insertRow();

        validate_Stock = product.StockAwal < 5 ? "color-stock" : "color-stock-false";
    


        row.innerHTML = `<td>${index + 1}</td>
        <td>${product . KodeProduk }</td>
        <td>${product . NamaProduk }</td>
        <td>${product . HargaProduk }</td>
        <td>${product . Gelas }</td>
        <td>${product . kategori }</td>
        <td class="${validate_Stock}">${product.StockAwal}</td>
        <td><img src="${product . UrlGambar }" style="width : 50px; height: 50px;"></td>
        <td>
            <button onclick="editproduk(${index})">Modify</button>
            <button onclick="deleteproduk(${index})">Delete</button>
        </td>`;
        
    });
}

function deleteproduk(index) {
    if (confirm("Delete?")) {
        productArray.splice(index, 1);
        renderTable();
    }
}

function editproduk(index) {
    const product = productArray[index];
    document.getElementById("KodeProduk").value = product.KodeProduk;
    document.getElementById("NamaProduk").value = product.NamaProduk;
    document.getElementById("HargaProduk").value = product.HargaProduk;
    document.getElementById("Gelas").value = product.Gelas;
    document.getElementById("kategori").value = product.kategori;
    document.getElementById("StockAwal").value = product.StockAwal;
    document.getElementById("UrlGambar").value = product.UrlGambar;

    document.getElementById("editIndex").value = index;
}

function resetForm() {
    document.getElementById("KodeProduk").value = "";
    document.getElementById("NamaProduk").value = "";
    document.getElementById("HargaProduk").value = "";
    document.getElementById("Gelas").value = "";
    document.getElementById("kategori").value = "";
    document.getElementById("StockAwal").value = "";
    document.getElementById("UrlGambar").value = "";
    document.getElementById("editIndex").value = "-1";
}
