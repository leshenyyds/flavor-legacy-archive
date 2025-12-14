import { createSlice } from '@reduxjs/toolkit';

// 初始评论数据（从 constants 中提取的示例数据）
const initialState = {
  comments: [
    {
      id: 1,
      username: 'User123',
      content: '我们这过年要吃"年糕"，寓意年年高。',
      timestamp: new Date().toISOString(),
    },
    {
      id: 2,
      username: 'Foodie',
      content: '立夏要吃蛋，挂蛋袋！',
      timestamp: new Date().toISOString(),
    },
  ],
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    addComment: (state, action) => {
      const newComment = {
        id: Date.now(),
        username: action.payload.username || '匿名用户',
        content: action.payload.content,
        timestamp: new Date().toISOString(),
      };
      state.comments.unshift(newComment); // 添加到数组开头
    },
    removeComment: (state, action) => {
      state.comments = state.comments.filter(
        (comment) => comment.id !== action.payload
      );
    },
  },
});

export const { addComment, removeComment } = commentsSlice.actions;
export default commentsSlice.reducer;

