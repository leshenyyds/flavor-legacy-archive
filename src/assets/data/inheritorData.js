import goushifuImg from '../image/狗师傅.jpg';
import shushifuImg from '../image/鼠师傅.jpg';

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
    skills: ['suxing'], // 塑形技艺
    plans: '已收12名徒弟，每周去小学教孩子削面基础。',
    quote: '非遗不是老古董，是要有人做，有人吃，才能活。'
  },
  {
    id: '2',//111
    name: '鼠师傅',
    age: 65,
    project: '柳州螺蛳粉制作技艺',
    region: '华南',
    tag: '螺蛳粉第三代传承人',
    image: shushifuImg,
    description: '坚守传统工艺，拒绝工业化速成汤底。',
    story: '为了寻找最适合的酸笋，走遍了柳州周边的山村。',
    skills: ['suxing','tiaowei'],
    plans: '正在整理螺蛳粉制作口诀，准备出版书籍。',
    quote: '这一碗粉，不仅是味道，更是乡愁。'
  }
];

