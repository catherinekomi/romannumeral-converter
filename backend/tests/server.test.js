import { describe, test, expect } from 'vitest';
import request from 'supertest';
import { app } from '../server.js';

describe('Roman Numeral API', () => {
  test('GET /romannumeral?query=1987 should return MCMLXXXVII', async () => {
    const response = await request(app).get('/romannumeral?query=1987');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ input: '1987', output: 'MCMLXXXVII' });
  });

  test('GET /romannumeral?query=0 should return error', async () => {
    const response = await request(app).get('/romannumeral?query=0');
    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      error: 'Invalid input',
    });
  });

  test('GET /romannumeral?query=abc should return error', async () => {
    const response = await request(app).get('/romannumeral?query=abc');
    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      error: 'Invalid input',
    });
  });
});
