import { QUIZ_DATA } from '../../assets/data/quizData';

// 模拟网络延迟
const delay = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms));

// 获取题目数据
export const getQuizData = async () => {
  await delay(300);
  return {
    data: QUIZ_DATA,
    status: 200,
    message: 'success'
  };
};

