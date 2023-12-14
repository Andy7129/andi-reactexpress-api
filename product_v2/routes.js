const router = require ('express').Router();
const product = require ('./model');
const multer = require ('multer');
const upload = require ({dest : 'uploads'});
const path = require('path');
const fs = require('fs');

router.post ('/product', upload.single('image'), async(req, res) =>  {
    const {users_id, name, price, stock, status} = req.body;
    const image = req.file;
    if(image) {
        const target = path.join(__dirname, '../uploads', image.originalname);
        fs.renameSync(image.path, target);
    
    }
    try{
    await product.sync ();
    const result = await Product.create({users_id, name, price, stock, status, image_url:  `http://localhost:3000/public/${image.originalname}`});
    res.send(result);    
    } catch(e) {
        res.send(e);
    }
});

module.export = router;