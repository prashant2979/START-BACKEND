require('dotenv').config()


const express = require('express')

const app = express()

const port = 4000

const githubdata = {
  username: "your-github-username",
  name: "Your Full Name",
  avatar: "https://avatars.githubusercontent.com/u/your_user_id?v=4", // your GitHub profile pic URL
  url: "https://github.com/your-github-username",
  bio: "Full Stack Developer | Open Source Contributor | DSA Enthusiast",
  repos: [
    {
      name: "portfolio",
      url: "https://github.com/your-github-username/portfolio",
      description: "My personal portfolio website built with React and TailwindCSS",
      language: "JavaScript",
      stars: 5,
      forks: 2
    },
    {
      name: "sorting-visualizer",
      url: "https://github.com/your-github-username/sorting-visualizer",
      description: "A React app to visualize sorting algorithms",
      language: "JavaScript",
      stars: 10,
      forks: 4
    },
    {
      name: "graph-route-finder",
      url: "https://github.com/your-github-username/graph-route-finder",
      description: "DSA-based route finding project like Google Maps",
      language: "C++",
      stars: 8,
      forks: 1
    }
  ]
};


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send('prashant choudhary')
})

app.get('/login',(req,res)=>{
    res.send('<h1>HELLO PRASHANT</h1>')
})

app.get('/githubdata',(req,res)=>{
    res.json(githubdata)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
