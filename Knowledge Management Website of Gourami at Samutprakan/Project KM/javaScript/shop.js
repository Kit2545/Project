/*var shop = [{
    img:'https://lh5.googleusercontent.com/p/AF1QipNQx83wUd8XK1xFdYVDaGKTRDFIYr-Dzu51j5CE=w408-h612-k-no',
    name:'โจรสลิด บางบ่อ ปลาสลิด',
    description:'537 ตำบล ท้ายบ้านใหม่ อำเภอเมืองสมุทรปราการ สมุทรปราการ 10280',
    map:'https://maps.app.goo.gl/pJjDgE3JRpNYmiMC8'
},{
    img:'https://lh5.googleusercontent.com/p/AF1QipPQmr8M7GDY9CsBLLacvco1U_c1iCJ2K9Pkn-Ed=w408-h408-k-no',
    name:'เจ๊เล็กปลาสลิด',
    description:'55 ซอย รัตนธานี 21 อำเภอบางพลี สมุทรปราการ 10540',
    map:'https://maps.app.goo.gl/bGZNgSJxGMAe7ZSJ9'
},{
    img:'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=N0MxP4GMt7mapYhmLSOr6Q&cb_client=search.gws-prod.gps&w=408&h=240&yaw=170.35419&pitch=0&thumbfov=100',
    name:'ปลาสลิดเเดดเดียว',
    description:'ตำบลบางเสาธง อำเภอบางเสาธง สมุทรปราการ 10540',
    map:'https://maps.app.goo.gl/ndw8KSRroN52dmna8'
},{
    img:'https://lh5.googleusercontent.com/p/AF1QipNmRJyBp6Ms7Z6LonSMP8NNhPgIOZ-YbqSJBtBs=w408-h544-k-no',
    name:'ปลาสลิดบางบ่อ  เเม่อำนวย',
    description:'246 ตำบล คลองด่าน อำเภอบางบ่อ สมุทรปราการ 10550',
    map:'https://maps.app.goo.gl/wwiKpDNKH2s8dwBT8'
},{
    img:'https://lh5.googleusercontent.com/p/AF1QipOPkKJPKZVw_Zug3NjloLS5R1ddKbV8C0CHYH3v=w426-h240-k-no',
    name:'ปลาสลิดป้ากบ',
    description:'15 17 ตำบล บางแก้ว อำเภอบางพลี สมุทรปราการ 10540',
    map:'https://maps.app.goo.gl/9S3cTfoGxrT8i21r7'
},];*/

var shop;

$(document).ready(()=>{

    $.ajax({
        method: 'get',
        url: './api/getshop.php',
        success: function (response) {
            console.log(response)
            if (response.RespCode == 201) {

                shop = response.Result;

                var html = '';
                for (let i = 0; i < shop.length; i++) {
                    html += `<div class="map">
                                <img src="./photo/${shop[i].img}" class="imgmap">
                                <h1 style="font-size: 1.3vw;font-family: 'Prompt', sans-serif;">${shop[i].name}</h1>
                                <p style="font-size: 1vw;font-family: 'Prompt', sans-serif;padding-bottom: .5vw;">${shop[i].description}</p>
                                <a href="${shop[i].map}" class="amap"><i class="fa-solid fa-location-crosshairs" style="font-size: 1.5vw;"> <span class="iconmap">รายละเอียด</span></i></a>
                            </div>`;
                }
                $('#mapping').html(html);
            }
        }, error: function (err) {
            console.log(err)
        }
    })
})

function search(text) {
    var value = $('#'+text.id).val();
    console.log(value);

    var html = '';
    for(let i=0;i<shop.length;i++) {
        if(shop[i].name.includes(value)){
            html += `<div class="map">
        <img src="./photo/${shop[i].img}" class="imgmap">
        <h1 style="font-size: 1.3vw;font-family: 'Prompt', sans-serif;">${shop[i].name}</h1>
        <p style="font-size: 1vw;font-family: 'Prompt', sans-serif;padding-bottom: .5vw;">${shop[i].description}</p>
        <a href="${shop[i].map}" class="amap"><i class="fa-solid fa-location-crosshairs" style="font-size: 1.5vw;"> <span class="iconmap">รายละเอียด</span></i></a>
    </div>`;
        }
    }
    $('#mapping').html(html);
}