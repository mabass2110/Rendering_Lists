// use of "props" to set data
function NavBar(props) {
  //clicks state
  const [clicks, setClicks] = React.useState([]);
  console.log(`clicks: ${clicks}`);
  alert(`Rendering NavBar`);

  
  const list = props.menuitems;

  //Destructuring Button from ReactBootstrap
  const { Button } = ReactBootstrap;


  //onClick handler
  // each item should have an unique key
  const handleClick = e => {
    console.log(`clicked on: ${e.target.innerHTML}`);
    setClicks([...clicks, e.target.innerHTML]);
  };

  //latest version of the list
  const updatedList = list.map((listItems, index) => {
    return (
      <Button onClick={handleClick} key={index}>
        {listItems}
      </Button>
    );
  });
  
  // note that React needs to have a single Parent
  return <ul>{updatedList}</ul>;
}
//array that will be passed as a value of menuItems props
const menuItems = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NavBar menuitems={menuItems} />,
  document.getElementById("root")
);
