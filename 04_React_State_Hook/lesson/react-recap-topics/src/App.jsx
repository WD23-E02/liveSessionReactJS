import "./App.css";
import Article from "./Article";
import Header from "./Header";

function App() {
  const data = [
    {
      image:
        "https://img.freepik.com/fotos-kostenlos/fallendes-herbstblatt-enthuellt-komplizierte-von-ki-erzeugte-blattadern_188544-9869.jpg",
      title: "React Components",
      text: "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.",
    },
    {
      image:
        "https://w.forfun.com/fetch/62/624e27fde335d49e2dd3c6b75c6027a3.jpeg",
      title: "Reusable Code",
      text: "Build encapsulated components that manage their own state, then compose them to make complex UIs.",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228_640.jpg",
      title: "Dynamic Data",
      text: "We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code."
    },
    {
      image:"https://wallpapers.com/images/hd/hd-country-life-at-night-vvxmbqzkr4uumuni.jpg",
      title:"React Awesome",
      text:"Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM."
    }
  ];
  return (
    <>
      <Header />
      <div style={{display:"flex"}}>
      {data.map(item=>(<Article image={item.image} title={item.title} text={item.text}  />))}
      </div>
    </>
  );
}

export default App;

/* function print(firstName){
  console.log(firstName)
}

print("Naqvi")
print("John")
print("Leon") */
