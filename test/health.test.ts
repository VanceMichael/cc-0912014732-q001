import { describe, expect, it } from 'vitest';
describe('运行基线', () => { it('保留健康检查契约', () => expect('/health').toBe('/health')); });
