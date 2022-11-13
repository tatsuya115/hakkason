fetch('http://127.0.0.1:3000/api/v1/facilities')
.then(response =>  {
    return response.json();
}).then( res => {
console.log(res);
}).catch(error => {
    console.log(error);
});


$(document).ready(function () {
    $('#myTable').DataTable({
        // 日本語表示
        "language": {
            "url": "https://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Japanese.json"
        },
        data: res,
        columns: [
            {data: "id"},
            {data: "name" }
        ],    
        displayLength: 20,
        // 件数切替機能 無効
        lengthChange: false,
        // 検索機能 無効
        searching: false,
        // ソート機能 無効
        ordering: false,
        // 情報表示 無効
        info: false,
    });
});