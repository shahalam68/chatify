import express from 'express';
const router = express.Router();

router.get('/send', (req, res) => {
    res.send('send endpoint');
});
// router.get('/getById', (req, res) => {
//     res.send('getById endpoint');
// });
// router.post('/create', (req, res) => {
//     res.send('create endpoint');
// });
// router.post('/update', (req, res) => {
//     res.send('update endpoint');
// });
// router.post('/delete', (req, res) => {
//     res.send('delete endpoint');
// });
export default router;