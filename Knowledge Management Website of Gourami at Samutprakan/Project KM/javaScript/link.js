/*var link = [{
    img:'https://scontent.fbkk12-2.fna.fbcdn.net/v/t39.30808-6/434177744_811993874294984_5135720263539086021_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6w7IkCPLyHcAb7plfys&_nc_ht=scontent.fbkk12-2.fna&oh=00_AfD938ZQU9UD6A_EqH6OFV0VPK8KZPkA-PIVyEtlWjC3ow&oe=66246A73',
    name:'Silpawattanatham',
    description:'ทำไม “ปลาสลิด” ถึงต้องเป็นปลาสลิด “บางบ่อ',
    web:'https://www.silpa-mag.com/culture/article_103816'
},{
    img:'https://scontent.fbkk12-2.fna.fbcdn.net/v/t39.30808-6/358112244_669786188509186_5079061466501480620_n.png?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BkKY5lAT8BkAb7lRZdR&_nc_ht=scontent.fbkk12-2.fna&oh=00_AfAd9XYlE5r8sXd_tVW877Zea3mKuE2bcM0c2LXjxAVm7A&oe=66246E0B',
    name:'Urban Creature',
    description:'ปลาสลิดบางบ่อ แม่อำนวย ของดีสมุทรปราการ',
    web:'https://urbancreature.co/maeumnoy-plasalid/'
},{
    img:'https://northsquareoyster.com/wp-content/uploads/2021/12/Food-Cravings.jpg',
    name:'Food Cravings',
    description:'ทำไมต้องปลาสลิดบางบ่อ จ.สมุทรปราการ',
    web:'https://northsquareoyster.com'
},{
    img:'./photo/mom.jpg',
    name:'TechnologyChaoban',
    description:'แม่อำนวย” ต้นตำรับปลาสลิดคุณภาพ ของอำเภอบางบ่อ',
    web:'https://www.technologychaoban.com/marketing/article_30736'
},{
    img:'https://scontent.fbkk12-1.fna.fbcdn.net/v/t39.30808-6/319927295_1740165283024965_4730172395155120201_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=jxQ8GjoKucAAb7cOdRl&_nc_ht=scontent.fbkk12-1.fna&oh=00_AfAQ-7KyhDJJfyUDsWKY26MouM_e479Ki89uoLnqKfwM2g&oe=66245E12',
    name:'KRUA.CO',
    description:'ไขข้อข้องใจ ทำไม ‘ปลาสลิดบางบ่อ’ ถึงอร่อย',
    web:'https://krua.co/food_story/plasalid_bang-bo-district'
},{
    img:'https://scontent.fbkk9-2.fna.fbcdn.net/v/t39.30808-6/356012083_729198232343359_7264652891491148190_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=v49AhblMCI4Ab73JN0A&_nc_ht=scontent.fbkk9-2.fna&oh=00_AfCD6feiabc9FaT_bYu8rX0xFeIJre7oSHOBQ7RlFtSXOg&oe=6624693C',
    name:'Zalidproducts',
    description:'ระบบฐานข้อมูลปลาสลิด By CS-HCU',
    web:'http://www.xn--72czsbb4da3b6a6bev9x.com/welcome'
}];*/

var link;

$(document).ready(()=>{

    $.ajax({
        method: 'get',
        url: './api/getlink.php',
        success: function (response) {
            console.log(response)
            if (response.RespCode == 201) {

                link = response.Result;

                var html = '';
                for (let i = 0; i < link.length; i++) {
                    html += `<div class="contentLink">
                                <a href="${link[i].web}"><img src="./photo/${link[i].img}" class="imgLink"></a>
                                <a href="${link[i].web}"><h1 style="font-size: 1.5vw;font-family: 'Tilt Neon', sans-serif;">${link[i].name}</h1></a>
                                <p style="font-size: 1.2vw;font-family: 'Prompt', sans-serif;">${link[i].description}</p>
                            </div>`;
                }
                $('#linkjs').html(html);
            }
        }, error: function (err) {
            console.log(err)
        }
    })
})