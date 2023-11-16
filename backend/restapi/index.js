const express =require('express');
const app=express();

const blogPosts = [
  {
    id: 1,
    title: 'deatils of cats ',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxVTi-kbRIMBv2oZ07HJA97at-lTTgztxTzeVzYeaIxmHUg9NQQUNFc2blzepQ',
    content: "Cats are one of the most popular pets in the world, and for good reason. They're cute, cuddly, and independent. But did you know that cats can also be very helpful around the house? For example, cats can help to keep your home free of pests. They can also be trained to perform simple tasks, such as fetching or turning on lights..",
  },
  {
    id: 2,
    title: 'Hiking',
    img: 'https://img.freepik.com/premium-photo/small-group-people-team-building-hiking-walk-mountain_543270-1892.jpg?w=826',
    content: "Hiking is a great way to get exercise and enjoy the outdoors. It's also a relatively inexpensive activity, and it can be done by people of all ages and fitness levels. If you're new to hiking, be sure to start with a short, easy trail. And don't forget to bring plenty of water and sunscreen!",
  },
  {
    id: 3,
    title: 'cooking',
    img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTVTmvBeUwcNDIWqMogguYMvdW6N8_6LPymOzYnsOmXJIjBI_u7QlG7RUZQ_Zn6',
    content: "Cooking is a great way to relax and de-stress. It's also a fun way to experiment with different flavors and cuisines. If you're looking for a new recipe to try, check out our extensive collection of recipes from around the world.",
  },
  {
    id: 4,
    title: 'Spending',
    img: 'https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX34582105.jpg',
    content: "Spending time with friends is one of the best ways to relax and have fun. Whether you're going out on the town or just hanging out at home, spending time with friends can help to reduce stress and improve your overall well-being.",
  },
  {
    id: 5,
    title: 'Sunset',
    img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS1dC6rWFH5B436wViq1cBMRox17gNf30brUuieD6PduB2OeBRq2ZXZtP4PAsY1',
    content: " Sunsets are one of the most beautiful natural phenomena in the world. They're a great way to end a long day and reflect on all the good things that happened. If you're looking for a relaxing and peaceful activity, try watching the sunset tonight.",
  },
  {
    id: 6,
    title: 'Reading',
    img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT1QhnZ72whZnkaq54kyeSOzos_rZcr0M24QkAyCJDeskxGE9a1zB-paCO6MMtY',
    content: "Reading is a great way to relax and escape from the everyday world. It can also help to improve your vocabulary and comprehension skills. If you're looking for a new book to read, check out our list of the best books of 2023.",
  },
  {
    id: 7,
    title: 'Working',
    img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRW_W2_EhA5vFgg-QDzNRUZQ3JHUIvBBfYhOwWUwEFsUUU8FOd0NLF3KQyNrX0x',
    content: "Working out is a great way to stay healthy and fit. It can also help to improve your mood and energy levels. If you're looking for a new workout routine to try, check out our collection of workouts for all fitness levels.",
  },
  {
    id: 8,
    title: 'Traveling',
    img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSd5k8ZhNwlPAu53vZMWGM3Sou2eAVW2355DvCUedafAii4q4RghiIGbR9wnf6F',
    content: ": Traveling is a great way to experience new cultures and learn about different ways of life. It can also be a lot of fun! If you're planning a trip, be sure to do your research and book your flights and accommodation in advance.",
  },
  {
    id: 9,
    title: 'Meditations',
    img: 'https://thekimfoundation.org/wp-content/uploads/2019/02/shadow-of-person-meditating.jpg',
    content: "Meditation is a great way to relax and de-stress. It can also help to improve your focus and concentration. If you're new to meditation, there are many resources available to help you get started.",
  },
  {
    id: 10,
    title: 'Volunteering',
    img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRKBxuza_qRQa7D6WEFQvZce-X-KPAqrC1zYLF7mO4V32zEKDO6l6zgCWOAKYZl',
    content: " Volunteering is a great way to give back to your community and make a difference in the world. There are many different volunteer opportunities available, so you can find something that interests you and fits your schedule.",
  },
  {
    id: 11,
    title: 'Learing',
    img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQimjQDksCRz71smDet3SiDgAbzNCh-1SV5isMs8p29aJ8d92x1XhTb4tCuHm1b',
    content: "Learning a new skill is a great way to challenge yourself and expand your knowledge. It can also be a lot of fun! If you're interested in learning a new skill, there are many resources available to help you get started.",
  },
  {
    id: 12,
    title: 'entrepreneurship',
    img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTIgswPqRi_qOKSoVC9KvsWVcmT1nZYpJnut02r-MtFvSF2qtK89kVQ_y9-6_hm',
    content: " Starting your own business can be a great way to achieve your financial goals and be your own boss. If you're thinking about starting a business, be sure to do your research and create a business plan.",
  },
  {
    id: 13,
    title: 'Time is MOney',
    img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTM2gWhF5f7UM1AEPTI6H6INMOoqD1vo-iklYw2eFs6eanVzN0lBA4U-PJ1Ji4d',
    content: "Spending time with family is one of the most important things in life. Whether you're going on vacation or just having dinner together, spending time with family can help to create lasting memories.",
  },
  {
    id: 14,
    title: 'Creative Ideas',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRePl5-l8kDi-PIZinr6lhQYRg-qE0vxT_z-vV5chQX6Pdhd5Tj0qi9EB5pKdcH',
    content: "Creative projects are a great way to express yourself and have fun. They can also be a way to relax and de-stress. If you're looking for a new creative project to try, check out our list of ideas.",
  },
  {
      id: 15,
      title: 'Creative Ideas',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRePl5-l8kDi-PIZinr6lhQYRg-qE0vxT_z-vV5chQX6Pdhd5Tj0qi9EB5pKdcH',
      content: "Creative projects are a great way to express yourself and have fun. They can also be a way to relax and de-stress. If you're looking for a new creative project to try, check out our list of ideas.",
    },
  
  
];
app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
  next(); 
})
app.get('/api/blog-posts', (req, res) => {
  res.json({ blog_posts:blogPosts });
});

module.exports = app;