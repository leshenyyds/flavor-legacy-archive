import { QUIZ_DATA } from '../../assets/data/quizData';

// 获取题目数据
export const getQuizData = () => {
  return {
    data: QUIZ_DATA,
    status: 200,
    message: 'success'
  };
};

