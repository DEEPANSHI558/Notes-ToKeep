import React, {useState} from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
function CreateArea(props) {
  const [fulldata, setData] = useState({
    title: "",
    content: "",
  });
  function handleChange(event) {
    const {value, name} = event.target;
    setData((prevValues) => {
      return {
        ...prevValues,
        [name]: value,
      };
    });
  }
  function handleClick(event) {
    props.onAdd(fulldata); //after we have successfully added the data
    setData({title: "", content: ""});
    event.preventDefault();
  }
  const [isclicked, setisClicked] = useState(false);
  function clicked() {
    setisClicked((prevValues) => {
      return !prevValues;
    });
  }
  return (
    <div>
      <form className="create-note">
        {isclicked && (
          <input
            onChange={handleChange}
            name="title"
            value={fulldata.title}
            placeholder="Title"
          />
        )}
        <textarea
          onChange={handleChange}
          name="content"
          value={fulldata.content}
          placeholder="Take a note..."
          rows={isclicked ? 3 : 1}
          onClick={clicked}
        />
        <Zoom in={isclicked}>
          <Fab onClick={handleClick}>
            <AddIcon onClick={clicked} />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
