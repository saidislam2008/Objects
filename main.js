let users = [
    {
        id: 1,
        name: 'Abdulaziz',
        Image: 'https://phonoteka.org/uploads/posts/2022-09/1663294995_1-phonoteka-org-p-dzhiraiya-art-instagram-1.png',
        age: 16,
        developer_type: 'frontend',
    },
    {
        id: 2,
        name: 'Elburs',
        Image: 'https://citaty.info/files/styles/poster/public/portraits/screenshot_24_4.jpg?itok=cfLcDHFQ',
        age: 14,
        developer_type: 'backend',
    },
    {
        id: 3,
        name: 'Nurjigit',
        Image: 'https://pbs.twimg.com/media/Ev5RyZMWYAEnhIB?format=jpg&name=small',
        age: 13,
        developer_type: 'frontend',
    },
    {
        id: 4,
        name: 'Saidislam',
        Image: 'https://sportshub.cbsistatic.com/i/2021/03/18/8efc04dc-59f0-47c2-8653-4ea8d3b42da5/naruto-itachi-uchiha-anime-tribute-1239755.jpg?width=1200',
        age: 14,
        developer_type: 'fullstack',
    },
    {
        id: 5,
        name: 'Mairambek',
        Image: 'https://shikimori.one/system/characters/original/2006.jpg',
        age: 14,
        developer_type: 'IOS',
    },
    {
        id: 6,
        name: 'Ruslan',
        Image: 'https://n1s1.hsmedia.ru/27/8a/db/278adb945b95fee05d6c9518268aa4c4/728x370_1_4cf206165ed8283da0e5905e7709a45e@885x450_0xac120003_1724997491668014485.png',
        age: 14,
        developer_type: 'backend',
    },
    {
        id: 6,
        name: 'Bekjan',
        Image: 'https://nntheblog.com/wp-content/uploads/2022/03/Zetsu-1.jpg',
        age: 15,
        developer_type: 'frontend',
    },
    {
        id: 7,
        name: 'Daniel',
        Image: 'https://celes.club/uploads/posts/2022-05/1652778774_7-celes-club-p-naruto-obito-art-krasivo-7.png',
        age: 14,
        developer_type: 'android',
    },
    {
        id: 8,
        name: 'Nurgul',
        Image: 'https://images.squarespace-cdn.com/content/v1/5e3b1164feb39b444b58f15b/88be65d9-7ef6-4ced-85fd-bc7263ecc68a/naruto-g98192d3f2_1920.png',
        age: 14,
        developer_type: 'fullstack',
    }
]

let cont = document.querySelector('.container')
let allusers = users.map(i => 
    `<div class="block">
    <img width = "100px" height = "100px" src=${i.Image} alt="">
    <p>${i.name}</p>
    <p>${i.developer_type}</p>
    <p>${i.age}</p>
    </div>`    
)
cont.innerHTML = allusers



// front-end
let fill = users.filter(ff => ff.developer_type == 'frontend')


let cont1 = document.querySelector('.container1')
// fill = [{},{}]
let frontend = fill.map(i =>
    `<div class="block">
    <img width = "100px" height = "100px" src=${i.Image} alt="">
    <p>${i.name}</p>
    <p>${i.developer_type}</p>
    <p>${i.age}</p>
    </div>`
)

cont1.innerHTML = frontend



// back-end
let fill1 = users.filter(all => all.developer_type == 'backend')


let cont2 = document.querySelector('.container-2')
let backend = fill1.map(i =>
    `<div class="block">
    <img width = "100px" height = "100px" src=${i.Image} alt="">
    <p>${i.name}</p>
    <p>${i.developer_type}</p>
    <p>${i.age}</p>
    </div>`
)

cont2.innerHTML = backend



// fullstack
let fill2 = users.filter(whole => whole.developer_type == 'fullstack')


let cont3 = document.querySelector('.container-3')
let fullstack = fill2.map(i => 
    `<div class="block">
    <img width = "100px" height = "100px" src=${i.Image} alt="">
    <p>${i.name}</p>
    <p>${i.developer_type}</p>
    <p>${i.age}</p>
    </div>`
)

cont3.innerHTML = fullstack



// IOS
let fill3 = users.filter(all => all.developer_type == 'IOS')
let cont4 = document.querySelector('.container-4')
let IOS = (
    `<div class="block">
    <img width = "100px" height = "100px" src=${fill3[0].Image} alt="">
    <p>${fill3[0].name}</p>
    <p>${fill3[0].developer_type}</p>
    <p>${fill3[0].age}</p>
    </div>`
)

cont4.innerHTML = IOS



let fill4 = users.filter(all => all.developer_type == 'android')
let cont5 = document.querySelector('.container-5')
let android = (
    `<div class="block">
    <img width = "100px" height = "100px" src=${fill4[0].Image} alt="">
    <p>${fill4[0].name}</p>
    <p>${fill4[0].developer_type}</p>
    <p>${fill4[0].age}</p>
    </div>`
)

cont5.innerHTML = android