import express from 'express';
export const app = express();
app.listen(8000, () => { console.log('server started'); });
