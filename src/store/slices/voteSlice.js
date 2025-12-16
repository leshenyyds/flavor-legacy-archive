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
  },
});

export const { vote} = voteSlice.actions;
// const vote = (optionId) => ({
//   type: 'vote/vote',
//   payload: optionId
// });
export default voteSlice.reducer;

