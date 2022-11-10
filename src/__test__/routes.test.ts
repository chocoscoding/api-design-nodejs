import app from '../server';
import request from 'supertest';

describe('GET /', () => {
    it('should send back data', async ()=>{
        const res = await request(app).get('/');
        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toEqual('hello');
    })
})