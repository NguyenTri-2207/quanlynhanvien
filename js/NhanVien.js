function NhanVien(ho, ten, ma, ngayLam, chucVu){
    this.Ho = ho; 
    this.Ten = ten;
    this.Ma = ma; 
    this.NgayLam = ngayLam; 
    this.ChucVu = chucVu;
    this.LuongCB = 10000000;

    this.TongLuong = function (){
        if(this.ChucVu == "Sếp"){
            return this.LuongCB * 3;
        }
        else if(this.ChucVu == "Trưởng phòng"){
            return this.LuongCB * 2;
        }
        else if(this.ChucVu == "Nhân viên"){
            return this.LuongCB * 1;
        }
    }
}

