import luosifenImg from '../image/螺蛳粉.jpg';
import luosifenImg1 from '../image/螺蛳粉-1.png';
import luosifenImg2 from '../image/螺蛳粉-2.png';
import luosifenImg3 from '../image/螺蛳粉-3.png';
import kaoyaImg1 from '../image/北京烤鸭-1.png';
import kaoyaImg2 from '../image/北京烤鸭-2.png';
import kaoyaImg3 from '../image/北京烤鸭-3.png';
import kaoyaImg from '../image/北京烤鸭.jpg';
import chaofanImg from '../image/扬州炒饭.jpg';
import chaofanImg1 from '../image/扬州炒饭-1.png';
import chaofanImg2 from '../image/扬州炒饭-2.png';
import pixiandoubanImg from '../image/郫县豆瓣.jpg';
import pixiandoubanImg1 from '../image/郫县豆瓣-1.png';
import pixiandoubanImg2 from '../image/郫县豆瓣-2.png';
import pixiandoubanImg3 from '../image/郫县豆瓣-3.png';
export const HERITAGE_ITEMS = [
  {
    id: 'luosifen',
    name: '柳州螺蛳粉',
    level: '国家级',
    region: '华南',
    year: '2021',
    category: '特色小吃',
    image: luosifenImg,
    description: '闻着臭，吃着香，酸辣爽口，灵魂在于酸笋。',
    inheritorId: '2', 
    details: {
      history: '从街头小吃到非遗，螺蛳粉经历了40年的蜕变。它起源于上世纪70-80年代的柳州夜市。',
      historyImages: [luosifenImg1, luosifenImg2, luosifenImg3],
      videoUrl: 'https://www.bilibili.com/video/BV1vV411a7YC/',
      technique: [
        '螺蛳汤熬制：12 小时慢炖，30 余种香料配比',
        '米粉制作：选米 - 磨浆 - 蒸煮 - 榨粉',
        '酸笋发酵：选用大头甜笋，山泉水浸泡'
      ],
      culture: '柳州人的早餐：一碗螺蛳粉的仪式感。它与柳州工业文化深深交融。'
    }
  },
  {
    id: 'kaoya',
    name: '北京烤鸭',
    level: '国家级',
    region: '华北',
    year: '2008',
    category: '烹饪技艺',
    image: kaoyaImg,
    description: '色泽红润，肉质肥而不腻，外脆里嫩。',
    inheritorId: '1',
    details: {
      history: '从宫廷菜到民间名吃，全聚德、便宜坊等老字号见证了其百年历史。',
      historyImages: [kaoyaImg1, kaoyaImg2, kaoyaImg3],
      videoUrl: 'https://www.bilibili.com/video/BV1EY4y1B7Mc/',
      technique: [
        '果木选材：必须使用枣木或梨木',
        '鸭坯处理：打气 - 烫皮 - 挂色 - 晾坯',
        '挂炉烤制：严格的火候控制',
        '片鸭技巧：108片，片片连皮带肉'
      ],
      culture: '烤鸭是北京饮食文化的代表，全鸭宴更是宴席文化的精髓。'
    }
  },
  {
    id: 'chaofan',
    name: '扬州炒饭',
    level: '省级',
    region: '华东',
    year: '2015',
    category: '烹饪技艺',
    image: chaofanImg,
    description: '方寸炒饭，藏淮扬风味，颗粒分明。',
    inheritorId: '1', 
    details: {
      history: '源于隋朝越国公杨素爱吃的碎金饭。',
      historyImages: [chaofanImg1, chaofanImg2],
      videoUrl: 'https://www.bilibili.com/video/BV1To4y1u7M2/',
      technique: ['选米：籼米', '配料：海参、干贝、虾仁等8种', '火候：武火快炒'],
      culture: '淮扬菜精细做工的代表。'
    }
  },
  {
    id: 'douban',
    name: '郫县豆瓣',
    level: '国家级',
    region: '西南',
    year: '2008',
    category: '酱料制作',
    image: pixiandoubanImg,
    description: '川菜之魂，辣而不燥，醇厚甘甜。',
    inheritorId: '1', 
    details: {
      history: '三百余年历史，川菜味型的基石。',
      historyImages: [pixiandoubanImg1, pixiandoubanImg2, pixiandoubanImg3],
      videoUrl: 'https://www.bilibili.com/video/BV1VtnRzLEAc/',
      technique: ['翻、晒、露：日晒夜露', '发酵周期：长达一年以上'],
      culture: '体现了四川人对滋味的极致追求。'
    }
  }
];

