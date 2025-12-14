import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session'; // 使用 sessionStorage
import commentsReducer from './slices/commentsSlice';

// 配置持久化
const persistConfig = {
  key: 'root',
  storage, // 使用 sessionStorage，关闭标签页后数据会清除
};

// 只持久化 comments reducer
const commentsPersistConfig = {
  key: 'comments',
  storage,
};

const persistedCommentsReducer = persistReducer(commentsPersistConfig, commentsReducer);

export const store = configureStore({
  reducer: {
    comments: persistedCommentsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);

