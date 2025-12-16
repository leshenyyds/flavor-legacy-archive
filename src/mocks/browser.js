import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

// 开发环境启动 MSW worker
export const worker = setupWorker(...handlers);

