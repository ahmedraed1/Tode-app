import { useState } from "react";
import NoteCard from "../../cards/NoteCard";
import NavBar from "../../components/NavBar/NavBar";
import EditNote from "./EditNote";
export default function Home() {
  const [openEditNote, setOpenEditNote] = useState(false);

  const onEditNote = (id) => {
    setOpenEditNote(true);
    console.log(id);
  };
  const onDeleteNote = (id) => {
    console.log(id);
  };
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div>
        <div class="mx-auto container py-20 px-6">
          <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <NoteCard onEdit={onEditNote} onDelete={onDeleteNote} />
          </div>
        </div>
      </div>
      <button className="absolute bottom-10 right-10">+</button>
      {openEditNote && <EditNote id={1} open={() => setOpenEditNote(false)} />}
    </>
  );
}
