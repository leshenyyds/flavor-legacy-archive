import { createSlice } from '@reduxjs/toolkit';

// 初始投票数据
const initialState = {
  options: [
    { id: 'luosifen', name: '螺蛳粉制作', votes: 328 },
    { id: 'kaoya', name: '烤鸭片制', votes: 256 },
    { id: 'tanghua', name: '糖画绘制', votes: 150 },
  ],
};

const voteSlice = createSlice({
  name: 'vote',
  initialState,
  reducers: {
    vote: (state, action) => {
      const optionId = action.payload;
      const option = state.options.find(opt => opt.id === optionId);
      if (option) {
        option.votes += 1;
      }
    },
    resetVotes: (state) => {
      state.options = initialState.options.map(opt => ({ ...opt }));
    },
  },
});

export const { vote, resetVotes } = voteSlice.actions;
export default voteSlice.reducer;

