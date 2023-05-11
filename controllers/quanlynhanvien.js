var nhanVien = new NhanVien();
console.log(nhanVien);
var nhanVien2 = new NhanVien();
console.log(nhanVien2);


document.querySelector('#btnHienThi').onclick = function() {
    nhanVien.maNhanVien = document.querySelector('#maNhanVien').value;
    nhanVien.tenNhanVien = document.querySelector('#tenNhanVien').value;
    nhanVien.heSoLuong = document.querySelector('#chucVu').value; 
    nhanVien.luongCoBan = +document.querySelector('#luongCoBan').value;
    nhanVien.soGioLam = +document.querySelector('#soGioLam').value;
    console.log(nhanVien);

    var slChucVu = document.querySelector('#chucVu');
    var viTriOption = slChucVu.selectedIndex;
    nhanVien.chucVu = slChucVu[viTriOption].innerHTML;
    
    document.querySelector('#txt_maNhanVien').innerHTML = nhanVien['maNhanVien'];
    document.querySelector('#txt_tenNhanVien').innerHTML = nhanVien['tenNhanVien'];
    document.querySelector('#txt_heSoLuong').innerHTML = nhanVien['heSoLuong'];
    document.querySelector('#txt_chucVu').innerHTML = nhanVien['chucVu'];
    document.querySelector('#txt_tongLuong').innerHTML = nhanVien['tinhLuong']();
}