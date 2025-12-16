import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session'; // 使用 sessionStorage
import commentsReducer from './slices/commentsSlice';
import voteReducer from './slices/voteSlice';

// 持久化 comments reducer
const commentsPersistConfig = {
  key: 'comments',
  storage,
};

// 持久化 vote reducer
const votePersistConfig = {
  key: 'vote',
  storage,
};

const persistedCommentsReducer = persistReducer(commentsPersistConfig, commentsReducer);
const persistedVoteReducer = persistReducer(votePersistConfig, voteReducer);

export const store = configureStore({
  reducer: {
    comments: persistedCommentsReducer,
    vote: persistedVoteReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);

