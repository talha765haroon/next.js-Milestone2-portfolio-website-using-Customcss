import React from 'react'
import Heading from './Heading'
import Cards from './Cards'

const data = [
    
  {
    id: 0,
    title: "Shareable and download pdf Resume",
    desc: "A Typescript based interactive resume built with  HTML, CSS,typscript, Node-JS",
    img: "/talha_cv.png",
    tags: ["HTML", "CSS", "Typescript","Node-JS"]

},
{
  id: 1,
  title: "Cli todo list",
  desc: "A Typescript Cli based todo-list built with  HTML,  Node-JS",
  img: "/todo_list.jpg",
  tags: ["HTML", "Typescript","Node-JS"]
  
},

{
  id: 2,
  title: "Cli currency converter list",
  desc: "A Typescript Cli based currency-converter list built with  HTML,Typscript,Node-JS",
  img: "/currency_converter.png",
  tags: ["HTML", "Typescript","Node-JS"]
  
},

  {
        id: 3,
        title: "Youtube Homepage Clone",
        desc: "A fullied responsive Youtube homepage clone built with HTML, CSS",
        img: "/Youtube_project-1.png",
        tags: ["HTML", "CSS", "Typescript"]
    },
    
    
]

function Project() {
  return (
    <div id='projects' className='container pt-32'>
    <Heading title ="My Projects"/>
    <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-2 place-items-center'>
        {data.map((el) => (<Cards
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
    </div>
    </div>
  )
}

export default Project