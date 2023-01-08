// const express=require('express');
// //const { reset } = require('nodemon');
// const mongoose=require('mongoose');
// const Article=require('./models/article');

// const articleRouter=require('./routes/articles')
// const methodOverride=require('method-override')
// const app=express();

//  mongoose.set('strictQuery', true);
// mongoose.connect('mongodb+srv://lakhwinder:a6DFdYeitEviQyQt@cluster0.4sn7fai.mongodb.net/?retryWrites=true&w=majority',{
//     useNewUrlParser:true,useUnifiedTopology:true
// })

// app.set('view engine','ejs')
// app.use(express.urlencoded({extended:false }))
// app.use(methodOverride('_method'))

// app.get('/',async (req,res)=>{
//     const articles= await Article.find().sort({createdAt:'desc'})
//     res.render('articles/index',{articles:articles})
// })

// //mongodb+srv://lakhwinder:<password>@cluster0.4sn7fai.mongodb.net/?retryWrites=true&w=majority


// app.use('/articles',articleRouter)
// app.listen(3000);



const express = require('express')
const mongoose = require('mongoose')
const Article = require('./models/article')
const articleRouter = require('./routes/articles')
const methodOverride = require('method-override')
const app = express()
mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://lakhwinder:a6DFdYeitEviQyQt@cluster0.4sn7fai.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true, useUnifiedTopology: true
})

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

app.get('/', async (req, res) => {
  const articles = await Article.find().sort({ createdAt: 'desc' })
  res.render('articles/index', { articles: articles })
})

app.use('/articles', articleRouter)

app.listen(3000);
