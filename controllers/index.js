var sinhVien = {
    maSinhVien: '',
    tenSinhVien: '', 
    loaiSinhVien: '',
    diemToan: 0,
    diemVan: 0,
    tinhDiemTrungBinh: function() {
        var dtb = 0;
        dtb = (this.diemToan + this.diemVan)/2;
        return dtb;
    },
    xepLoaiSV: function() {
        var diemTB = this.tinhDiemTrungBinh();
        var xepLoai = '';
        if (diemTB >= 5) {
            xepLoai = 'Đậu';
        }
        else {
            xepLoai = 'Rớt';
        }
        return xepLoai;
    }
}

document.getElementById('btnHienThi').onclick = function() {
    sinhVien.maSinhVien = document.querySelector('#maSinhVien').value;
    sinhVien.tenSinhVien = document.querySelector('#tenSinhVien').value;
    sinhVien.loaiSinhVien = document.querySelector('#loaiSinhVien').value;
    sinhVien.diemToan = +document.querySelector('#diemToan').value;
    sinhVien.diemVan = +document.querySelector('#diemVan').value;
    console.log('sinhVien', sinhVien);

    document.querySelector('#txt_maSinhVien').innerHTML = sinhVien.maSinhVien;
    document.querySelector('#txt_tenSinhVien').innerHTML = sinhVien.tenSinhVien;
    document.querySelector('#txt_loaiSinhVien').innerHTML = sinhVien.loaiSinhVien;
    var diemTrungBinh = sinhVien.tinhDiemTrungBinh();
    document.querySelector('#txt_diemTrungBinh').innerHTML = diemTrungBinh;
    document.querySelector('#txt_xepLoai').innerHTML = sinhVien.xepLoaiSV();
}

