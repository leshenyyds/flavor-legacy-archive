import banner1 from './assets/image/Banner1.jpg';
import banner2 from './assets/image/Banner2.jpg';
import banner3 from './assets/image/Banner3.jpg';
import luosifenImg from './assets/image/螺蛳粉.jpg';
import kaoyaImg from './assets/image/北京烤鸭.jpg';
import chaofanImg from './assets/image/扬州炒饭.jpg';
import zongziImg from './assets/image/粽子.jpg';
import guangdongzaochaImg from './assets/image/广东早茶.jpg';
import pixiandoubanImg from './assets/image/郫县豆瓣.jpg';
import goushifuImg from './assets/image/狗师傅.jpg';
import shushifuImg from './assets/image/鼠师傅.jpg';

// 默认图片路径（全局使用）
export const DEFAULT_IMAGE = '/logo512.png';

export const NAV_LINKS = [
  { name: '首页', path: '/', icon: 'Home' },
  { name: '非遗名录', path: '/archive', icon: 'Book' },
  { name: '技艺解密', path: '/techniques', icon: 'Hammer' },
  { name: '民俗故事', path: '/stories', icon: 'Scroll' },
  { name: '传承人说', path: '/inheritors', icon: 'User' },
  { name: '美食地图', path: '/map', icon: 'Map' },
  { name: '互动专区', path: '/interactive', icon: 'MessageCircle' },
  { name: '保护发展', path: '/protection', icon: 'Shield' },
  { name: '关于我们', path: '/about', icon: 'Info' },
];

export const BANNERS = [
  { 
    title: '北京烤鸭技艺', 
    img: banner1,
    overlayTitle: '一口非遗，一味传承',
    overlaySubtitle: '解锁舌尖上的文化密码',
    linkTo: '/archive',
    buttonText: '探索美味'
  },
  { 
    title: '四川火锅调制', 
    img: banner2,
    overlayTitle: '一口非遗，一味传承',
    overlaySubtitle: '解锁舌尖上的文化密码',
    linkTo: '/archive',
    buttonText: '探索美味'
  },
  { 
    title: '广东早茶制作', 
    img: banner3,
    overlayTitle: '一口非遗，一味传承',
    overlaySubtitle: '解锁舌尖上的文化密码',
    linkTo: '/archive',
    buttonText: '探索美味'
  },
];

export const HERITAGE_ITEMS = [
  {
    id: 'luosifen',
    name: '柳州螺蛳粉制作技艺',
    level: '国家级',
    region: '华南',
    year: '2021',
    category: '特色小吃',
    image: luosifenImg,
    description: '闻着臭，吃着香，酸辣爽口，灵魂在于酸笋。',
    inheritorId: '2', 
    details: {
      history: '从街头小吃到非遗，螺蛳粉经历了40年的蜕变。它起源于上世纪70-80年代的柳州夜市。',
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
    name: '北京烤鸭（挂炉技艺）',
    level: '国家级',
    region: '华北',
    year: '2008',
    category: '烹饪技艺',
    image: kaoyaImg,
    description: '色泽红润，肉质肥而不腻，外脆里嫩。',
    inheritorId: '1',
    details: {
      history: '从宫廷菜到民间名吃，全聚德、便宜坊等老字号见证了其百年历史。',
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
    name: '扬州炒饭制作技艺',
    level: '省级',
    region: '华东',
    year: '2015',
    category: '烹饪技艺',
    image: chaofanImg,
    description: '方寸炒饭，藏淮扬风味，颗粒分明。',
    inheritorId: '1', 
    details: {
      history: '源于隋朝越国公杨素爱吃的碎金饭。',
      technique: ['选米：籼米', '配料：海参、干贝、虾仁等8种', '火候：武火快炒'],
      culture: '淮扬菜精细做工的代表。'
    }
  },
  {
    id: 'douban',
    name: '郫县豆瓣酿制技艺',
    level: '国家级',
    region: '西南',
    year: '2008',
    category: '酱料制作',
    image: pixiandoubanImg,
    description: '川菜之魂，辣而不燥，醇厚甘甜。',
    inheritorId: '1', 
    details: {
      history: '三百余年历史，川菜味型的基石。',
      technique: ['翻、晒、露：日晒夜露', '发酵周期：长达一年以上'],
      culture: '体现了四川人对滋味的极致追求。'
    }
  }
];

export const INHERITORS = [
  {
    id: '1',
    name: '狗师傅',
    age: 58,
    project: '山西刀削面制作技艺',
    region: '华北',
    tag: '刀削面非遗大师',
    image: goushifuImg,
    description: '40年一刀一面，守护山西面食灵魂。',
    story: '15岁学削面，练到手腕肿，3年才出师。',
    skills: '蒙眼削面，根根粗细均匀，薄如柳叶。',
    plans: '已收12名徒弟，每周去小学教孩子削面基础。',
    quote: '非遗不是老古董，是要有人做，有人吃，才能活。'
  },
  {
    id: '2',
    name: '鼠师傅',
    age: 65,
    project: '柳州螺蛳粉制作技艺',
    region: '华南',
    tag: '螺蛳粉第三代传承人',
    image: shushifuImg,
    description: '坚守传统工艺，拒绝工业化速成汤底。',
    story: '为了寻找最适合的酸笋，走遍了柳州周边的山村。',
    skills: '闻香识料，一口汤能尝出30种香料的配比。',
    plans: '正在整理螺蛳粉制作口诀，准备出版书籍。',
    quote: '这一碗粉，不仅是味道，更是乡愁。'
  }
];

export const STORIES = [
  {
    id: 'zongzi',
    title: '粽子的由来：从纪念屈原到各地非遗粽艺',
    category: '节日食俗',
    content: '端午食粽，最初是为了投江喂鱼祭奠屈原，后演变为各地的美食狂欢。嘉兴肉粽、肇庆裹蒸粽，每一地都有不同的非遗技法。',
    image: zongziImg
  },
  {
    id: 'zaocha',
    title: '广东早茶与岭南生活方式',
    category: '地域食俗',
    content: '"一盅两件"，不仅是吃，更是一种社交。虾饺、烧卖的制作技艺精细入微，体现了岭南人对生活的讲究。',
    image: guangdongzaochaImg
  }
];

export const NEWS = [
  { id: 1, title: '柳州螺蛳粉技艺走进北京高校', date: '2023-10-15' },
  { id: 2, title: '张师傅荣获"大国工匠"年度人物提名', date: '2023-10-12' },
  { id: 3, title: '非遗美食数字博物馆正式上线', date: '2023-10-01' },
];

export const TRIVIAS = [
  {
    title: '为何端午要吃粽子？',
    image: zongziImg,
    description: '除了纪念屈原，在非遗食俗中，粽叶的清香象征驱邪，糯米象征丰收。',
    linkTo: '/stories',
    linkText: '阅读更多'
  }
];

export const TECHNIQUES = [
  { 
    title: '火工技艺', 
    desc: '烤、炖、蒸、炸', 
    examples: '烤鸭挂炉火控、佛跳墙慢炖' 
  },
  { 
    title: '调味技艺', 
    desc: '酱料、汤料、腌制', 
    examples: '郫县豆瓣酿制、潮汕牛肉火锅汤底' 
  },
  { 
    title: '塑形技艺', 
    desc: '面点捏塑、米粉压制', 
    examples: '山西刀削面、广东虾饺捏制' 
  },
  { 
    title: '发酵技艺', 
    desc: '酒、醋、酱、泡菜', 
    examples: '绍兴黄酒酿造、四川泡菜发酵' 
  },
];

export const TECHNIQUE_COMPARISON = [
  {
    name: '过桥米线',
    material: '干浆/酸浆',
    technique: '两次蒸煮，挤压成型'
  },
  {
    name: '桂林米粉',
    material: '早籼米',
    technique: '发酵磨浆，揣粉团'
  },
  {
    name: '云南饵丝',
    material: '优质大米',
    technique: '蒸熟后舂制成块，切丝'
  }
];

export const CRAFTSMAN_QUOTES = [
  '做面要揉够18遍，差一遍都不行',
  '火候不到，味道就差之千里',
  '心静，手才稳，味才正'
];

