import express  from "express";
const app = express();
const port = process.env.PORT || '3000'
 //Routing
//  app.get('/',(req,res)=>{
//      res.send("Get method")
//  })
//  app.all('/sabkuch',(req,res)=>{
//      res.send("Get all method")
//  })
// app.all('*',(req,res)=>{
//     res.send('page is not found')
// })
// app.all('/api/*',(req,res)=>{
//     res.send('Api page')
// })

//string pattern
// app.get('/ab?cd',(req,res)=>{
//     res.send('this route path will match acd and  abcd')
// })

//regular expression path we will put th quote 
// app.get(/a/,(req,res)=>{
//     res.send('this is a')
// })
//one callback
// app.get('/cbexample1',(req,res)=>{
//     res.send('one callback example')
// })


//more then one callback example 
// app.get('/cbexample2',(req,res,next)=>{
//     console.log('one callback example')
//     next()
// },(req,res)=>{
//         console.log('second callback example')
//         res.send('more than callback example')
// })

//an array of callback
// const cb1 = (req,res,next)=>{
//     console.log('first callback')
//     next()
// }
// const cb2 = (req,res,next)=>{
//     console.log("second callback")
//     next()
// }
// const cb3 = (req,res)=>{
//     console.log('third  callback ')
//     res.send("An array of callback Example")
// }
// app.get('/cbexample3',[cb1,cb2,cb3])
//combination of function and array of callback

// const cb1 = (req,res,next)=>{
//     console.log('first callback')
//     next()
// }
// const cb2 = (req,res,next)=>{
//     console.log('second callback')
//     next()
// }
// app.get('/cbexample4',[cb1,cb2],(req,res,next)=>{
//     console.log('third callback')   
//     next()
// },(req,res)=>{
//     console.log('fourth callback')
//     res.send('combination of independent function and array of function')
// })

//chained  Route callback 
// app.route('/student')
// .get((req,res)=>{
//     res.send('all student')
// })
// .post((req,res)=>{
//     res.send('add new student')
// })
// .put((req,res)=>{
//     res.send('update student')
// })

//chainde route callback
// app.route('/student')
// .all((req,res,next)=>{
//     console.log('fast run and this is for all http method')
//     next()
// })
// .get((req,res)=>{
//     console.log('get method')
//     res.send('all student')
// })
// .post((req,res)=>{
//     console.log('post method')
//     res.send('add new student')
// })
// .put((req,res)=>{
//     console.log('put method')
//     res.send('update student')
// })
//messy code
//All Student Routes
app.get('/student/all',(req,res)=>{
    res.send("all student")
})
app.post('/student/create',(req,res)=>{
    res.send("new student created")
})
app.put('/student/update',(req,res)=>{
    res.send("update student")
})
app.delete('/student/delted',(req,res)=>{
    res.send("student deleted")
})

//All Teacher Routes
app.get('/teacher/all',(req,res)=>{
    res.send("all teacher")
})
app.post('/teacher/create',(req,res)=>{
    res.send("new teacher created")
})
app.put('/teacher/update',(req,res)=>{
    res.send("update teacher")
})
app.delete('/teacher',(req,res)=>{
    res.send("teacher deleted")
})
app.listen(port,()=>{
     console.log(`server is listening at http://localhost:${3000}`)
 })