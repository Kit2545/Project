/*var info = [{
    img: './photo/images.jpg',
    topic: '“กามิน - แน็ก ชาลี” ทุบสถิติไลฟ์ขายน้ำพริกปลาสลิดนางงาม 1 ชม.ทำยอดกว่า 7 ล้าน!',
    description: 'ณวัฒน์ ได้ติดต่อเจ้าตัวและ แน็ก ชาลี ไตรรัตน์ ไลฟ์สดขายน้ำพริกปลาสลิดนางงาม ซึ่งก็ทำเอาว้าวหนักมาก เพราะสามารถทุบสถิติ ไลฟ์ขายน้ำพริก แค่เพียง 1 ชม. ทำยอดขายไปกว่า 7 ล้านบาท ขณะที่คนดูไลฟ์สดถึง 1.6 แสน ปังไม่ไหวเลยทีเดียว',
    new: 'https://mgronline.com/entertainment/detail/9670000025873'
},{
    img:'https://static.thairath.co.th/media/dFQROr7oWzulq5FZXUhGeNDjxRrKYd4GioWTjAEjbgCJSm41fg0eacLHu4qRqTFpmwl.webp',
    topic:'ไขเคล็ดลับ…ทำไม ปลาสลิด ต้องบางบ่อ จ.สมุทรปราการ',
    description:'ปลาสลิดบางบ่อ" มุ่งสร้างความเข้มแข็งเกษตรกร หนุนหาช่องทางการตลาดเพื่อจำหน่าย',
    new:'https://www.thairath.co.th/news/local/central/1364046'
},{
    img:'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa4VnOowKzWFCCygE346D1s4cyJfsUmBcDUrHCgYh2kor4MwTSb3Z.webp',
    topic:'หนุนปลาสลิดบางบ่อ สร้างแบรนด์ส่งออก สร้างรายได้ให้เกษตรกร',
    description:'ผนึกกำลังหนุนแปลงใหญ่อนุรักษ์ปลาสลิดและแปรรูป อ.บางบ่อ ลุยส่งออกตลาดเมืองจีน สู่การสร้างรายได้ให้เกษตรกร',
    new:'https://www.thairath.co.th/tags/%E0%B8%9B%E0%B8%A5%E0%B8%B2%E0%B8%AA%E0%B8%A5%E0%B8%B4%E0%B8%94%E0%B8%9A%E0%B8%B2%E0%B8%87%E0%B8%9A%E0%B9%88%E0%B8%AD'
},{
    img:'./photo/Screenshot (5).png',
    topic:'ผู้ค้าปลาสลิดสู้วิกฤต ปรับรูปแบบขายออนไลน์',
    description:'แม่ค้าปลาสลิด จ.สมุทรปราการ พลิกวิกฤตช่วง COVID-19 ทำปลาสลิด 3 แดด ขายส่งออนไลน์ รายได้ 6,000-7,000 บาท ต่อวัน',
    new:'https://www.thaipbs.or.th/news/content/291307'
},{
    img: './photo/new.jpg',
    topic: 'สตง.สอบศูนย์เรียนรู้ปลาสลิด25ล. สร้างเสร็จใช้เปิดงานก่อนทิ้งร้าง-อ่างล้างมือถูกขโมยแล้ว',
    description: 'สตง. สอบพบโครงการศูนย์เรียนรู้และแปรรูปปลาสลิดคลองด่าน ใช้งบ 25 ล้าน ไม่คุ้มค่า ก่อสร้างเสร็จใช้เปิดงานครั้งเดียว จากนั้นผ่านไป 1 ปี 6 ด. ถูกทิ้งร้างไม่ใช้ประโยชน์อีก  -สภาพชำรุดทรุดโทรมหนัก อ่างล้างมือถูกขโมยแล้ว จี้ อบต.เร่งพิจารณาหาแนวทางแก้ไขปัญหาด่วน',
    new: 'https://www.isranews.org/content-page/item/84903-news03-84903.html'
},{
    img: './photo/ks.jpg',
    topic: 'ปลาสลิดบางบ่อโกอินเตอร์ แปรรูปเป็นแดดเดียว ส่งขายจีน-ลาว-เมียนมา...',
    description: 'ปลาสลิด / สกสว. จับมือม.หัวเฉียวฯ ทำวิจัยช่องทางส่งออกปลาสลิดบางบ่อ ทั้งแดดเดียวและแปรรูป ส่งขายประเทศจีน พบ 3 ช่องทางส่งออกเตรียมปรับเปลี่ยนบรรจุภัณฑ์ให้สะดุดตา เผยนอกจากจีนแล้วยังมี ลาว-เมียนมา ก็ชอบกินปลาสลิดบางบ่อเช่นกัน...',
    new: 'https://www.khaosod.co.th/monitor-news/news_2962143'
}]*/

var info;

$(document).ready(() => {

    $.ajax({
        method: 'get',
        url: './api/getinfo.php',
        success: function (response) {
            console.log(response)
            if (response.RespCode == 201) {

                info = response.Result;

                var html = '';
                for (let i = 0; i < 1; i++) {
                    html += `<div class="topicNew">
                                <img src="./photo/${info[i].img}" class="imgNew">
                                <div class="topic">
                                    <h1 style="font-size: 2vw;">${info[i].topic}</h1><br>
                                    <H3 style="color: #000;font-size: 1.5vw;">${info[i].description}</H3>
                                    <a href="${info[i].new}" style="color: black;font-size: 1.5vw;">อ่านต่อที่นี่</a>
                                </div>
                            </div>`;
                }
                $('#topicnewjs').html(html);
            }
        }, error: function (err) {
            console.log(err)
        }
    })
})

$(document).ready(()=>{

    $.ajax({
        method: 'get',
        url: './api/getinfo.php',
        success: function (response) {
            console.log(response)
            if (response.RespCode == 201) {

                info = response.Result;

                var html = '';
                for (let i = 1; i < 4; i++) {
                    html += `<div class="sideInfo">
                                <img src="./photo/${info[i].img}" class="infoimg">
                                <div class="infoCon">
                                    <h1 style="font-size: 1.5vw;font-family: 'Prompt', sans-serif;">${info[i].topic}</h1>
                                    <h3 style="color: #000;font-size: 1.2vw;">"${info[i].description}</h3>
                                    <a href="${info[i].new}" style="font-family: 'Prompt', sans-serif;font-size: 1vw;">อ่านต่อได้ที่นี่<a>
                                </div>
                            </div>`;
                }
                $('#infojs').html(html);
            }
        }, error: function (err) {
            console.log(err)
        }
    })
})

$(document).ready(() => {

    $.ajax({
        method: 'get',
        url: './api/getinfo.php',
        success: function (response) {
            console.log(response)
            if (response.RespCode == 201) {

                info = response.Result;

                var html = '';
                for (let i = 4; i < info.length; i++) {
                    html += `<div class="addonnew-new">
                                <img src="./photo/${info[i].img}" class="addonnew-img">
                                <div class="addonnew-new-text">
                                    <h1 style="font-size: 2.5vw;">${info[i].topic}</h1>
                                    <p style="font-size: 1.3vw;">${info[i].description}</p>
                                    <a href="${info[i].new}"><p style="font-size: 1.5vw;">อ่านต่อที่นี่</p></a>
                                </div>
                            </div>`;
                }
                $('#add-newjs').html(html);
            }
        }, error: function (err) {
            console.log(err)
        }
    })
})
