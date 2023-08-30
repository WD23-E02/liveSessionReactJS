import React, {useEffect} from "react";

function Child({isLogin, setIsLogin}) {
  useEffect(() => {
    console.log("child component added to dom");

    // the below function (cleanup function) runs before the component is destroyed or removed from the dom (unmounted)
    return () => {
      console.log("Child component removed from the dom");
      alert("I'm about to be removed from the DOM");
    };
  }, []);

  return (
    <>
      <div style={{backgroundColor: "aqua"}}>
        <h3>Please Login</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          porro voluptas sapiente molestiae, qui similique possimus quidem, nisi
          nesciunt harum laborum. At nemo quidem tenetur deserunt magnam enim
          expedita doloremque, ad animi dolores doloribus incidunt id. Ipsam
          optio saepe eius, deleniti, vel fugiat natus iusto molestiae dolor
          quod possimus tempore!
        </p>

        <button onClick={() => setIsLogin(!isLogin)}>Login</button>
      </div>
    </>
  );
}

export default Child;
