/*
 *  - Tính tổng lương theo: 
 *      - lƯƠNG CB : 10000000.
 *      a.	NẾU CHỨC VỤ LÀ SẾP: TỔNG LƯƠNG = LƯƠNG CƠ BẢN * 3
 *      b.	NẾU CHỨC VỤ LÀ TRƯỞNG PHÒNG: TỔNG LƯƠNG = LƯƠNG CƠ BẢN * 2
 *      c.	NẾU CHỨC VỤ LÀ NHÂN VIÊN: TỔNG LƯƠNG = LƯƠNG CƠ BẢN * 1
 *  - Xuất toàn bộ thông tin nhân viên trong mảng nhân viên ra table.
 *  - Tìm kiếm nhân viên theo tên và code.
 *  - Xoá nhân viên theo code.
 *  - Edit nhân viên trong model khi bấm nút edit
 */

var DSNhanVien = new DanhSachNhanVien();

function createEle(tag) {
    return document.createElement(tag);
}

function themNhanVien() {
    let Ho = document.querySelector("input[name='ho']").value;
    let Ten = document.querySelector("input[name='ten']").value;
    let Ma = document.querySelector("input[name='msnv']").value;
    let NgayLam = document.querySelector("input[name='ngaylam']").value;
    let ChucVu = document.querySelector("#chucvu").value;

    var nhanVienMoi = new NhanVien(Ho, Ten, Ma, NgayLam, ChucVu);
    DSNhanVien.ThemNhanVien(nhanVienMoi);

    inNhanVien(DSNhanVien.mangNhanVien);

    document.getElementById('btnSearchByName').addEventListener('click', function () {
        let keyWord = document.querySelector("input[name='searchByName']").value;
        let DanhSachCanTim = [];
        for (let i = 0; i < DSNhanVien.mangNhanVien.length; i++) {
            if (((DSNhanVien.mangNhanVien[i].Ten).toLowerCase().trim()).indexOf(keyWord.toLowerCase().trim()) != -1) {
                DanhSachCanTim.push(DSNhanVien.mangNhanVien[i]);
            }
        }
        inNhanVien(DanhSachCanTim);
    })
}

function inNhanVien(mangDauVao) {
    let tbody = document.querySelector("#tbodyNhanVien");
    tbody.innerHTML = "";

    for (var i = 0; i < mangDauVao.length; i++) {
        let NV = mangDauVao[i];
        let trTag = createEle('tr');

        let tdSTT = createEle('td');
        let tdHo = createEle('td');
        let tTen = createEle('td');
        let tdMa = createEle('td');
        let tdNgayLam = createEle('td');
        let tdChucVu = createEle('td');
        let tdTongLuong = createEle('td');


        tdSTT.innerHTML = i + 1;
        tdHo.innerHTML = NV.Ho;
        tTen.innerHTML = NV.Ten;
        tdMa.innerHTML = NV.Ma;
        tdNgayLam.innerHTML = NV.NgayLam;
        tdChucVu.innerHTML = NV.ChucVu;
        tdTongLuong.innerHTML = NV.TongLuong();

        trTag.appendChild(tdSTT);
        trTag.appendChild(tdHo);
        trTag.appendChild(tTen);
        trTag.appendChild(tdMa);
        trTag.appendChild(tdNgayLam);
        trTag.appendChild(tdChucVu);
        trTag.appendChild(tdTongLuong);

        tbody.appendChild(trTag);
    }
}


var btnSubmit = document.getElementById("btnSubmit");
btnSubmit.addEventListener('click', themNhanVien);

