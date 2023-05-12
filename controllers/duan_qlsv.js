var arrSinhVien = [];

document.querySelector('#frmSinhVien').onsubmit = function(event) {
    event.preventDefault();
    var sv = new SinhVien();
    sv.maSinhVien = document.querySelector('#maSinhVien').value;
    sv.tenSinhVien = document.querySelector('#tenSinhVien').value;
    sv.email = document.querySelector('#email').value;
    sv.soDienThoai = document.querySelector('#soDienThoai').value;
    sv.loaiSinhVien = document.querySelector('#loaiSinhVien').value;
    sv.diemRenLuyen = +document.querySelector('#diemRenLuyen').value;
    sv.diemToan = +document.querySelector('#diemToan').value;
    sv.diemLy = +document.querySelector('#diemLy').value;
    sv.diemHoa = +document.querySelector('#diemHoa').value;
    console.log(sv);
 
    arrSinhVien.push(sv);

    renderSinhVien(arrSinhVien);


    console.log('arrSinhVien', arrSinhVien);
}



function renderSinhVien(arrSV) {
    let htmlContent = '';
    for (var index = 0; index < arrSV.length; index++) {
        var sv = arrSV[index]; // {maSinhVien:1,tenSinhVien:'A',...}
        htmlContent += `
            <tr>
                <td>${sv.maSinhVien}</td>
                <td>${sv.tenSinhVien}</td>
                <td>${sv.email}</td>
                <td>${sv.soDienThoai}</td>
                <td>${sv.tinhDiemTrungBinh()}</td>
                <td><button class="btn btn-danger" onclick="xoaSinhVien(${index})">Xoá</button></td>
            </tr>
        `
    }
    document.querySelector('#tblSinhVien').innerHTML = htmlContent;
}


function xoaSinhVien(indexXoa){
    console.log(indexXoa);
    arrSinhVien.splice(indexXoa, 1);
    renderSinhVien(arrSinhVien);
}