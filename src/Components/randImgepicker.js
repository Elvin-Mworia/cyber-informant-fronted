
const pics=[
   "../../public/img3.png",
   "../../public/img4.png",
   "../../public/img7.png"

]

const picker=()=>{
    var a=Math.floor(Math.random()*pics.length);
    var image=pics[a];
    return image;
 }

 module.exports={
     picker
 }