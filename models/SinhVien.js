function SinhVien() {
    this.maSinhVien = '';
    this.tenSinhVien = '';
    this.email = '';
    this.soDienThoai = '';
    this.loaiSinhVien = '';
    this.diemRenLuyen = 0;
    this.diemToan = 0;
    this.diemLy = 0;
    this.diemHoa = 0;
    this.tinhDiemTrungBinh = function() {
        var dtb = (this.diemToan + this.diemLy + this.diemHoa)/3;
        return dtb; 
    }
}