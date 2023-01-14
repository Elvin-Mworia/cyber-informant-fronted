 const animeVar={
    initial:{
        opacity: 0,
        x:"-100vw",
        scale:0.8,
      
    },
in:{
    opacity: 1,
    x:0,
    scale:1
},
out:{
    opacity: 0,
    x:"100vw",
    scale:1.1
}

 }

 const transitions={
   type:"tween",
   ease: "anticipate",
   duration: .5
}
 module.exports={
     animeVar,
     transitions
 }