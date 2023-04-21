import { Link } from "react-router-dom";

const flatList = [
  {
    id: "876567",
    title: "apprt paname",
    cover: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
  },
  {
    id: "876567",
    title: "apprt paname",
    cover: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
  },
  {
    id: "876567",
    title: "apprt paname",
    cover: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
  },
  {
    id: "876567",
    title: "apprt paname",
    cover: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
  },
]

function Card() {
  return (
    {flatList.map((appart, index) => (
      <div className="card" key={`${title.title}-${flatList.id}`}>
        <img src={appart.cover} alt="appart à paname" />
      </div>
    ))}
  )
}
