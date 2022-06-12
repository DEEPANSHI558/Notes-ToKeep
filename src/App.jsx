import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "./notes";
import CreateArea from "./CreateArea";
function App() {
  const [notes, setItems] = useState([]);
  function addItems(note) {
    setItems((prevValue) => {
      return [...prevValue, note];
    });
  }
  function deleteItems(id) {
    setItems((prevValues) => {
      return prevValues.filter((note, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header></Header>
      <CreateArea onAdd={addItems}></CreateArea>
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          Onclick={deleteItems}
        />
      ))}
      <Footer></Footer>
    </div>
  );
}
export default App;
