import { useState, useEffect } from "react";
import NoteCard from "../../cards/NoteCard";
import NavBar from "../../components/NavBar/NavBar";
import EditNote from "./EditNote";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import AddNote from "./AddNote";
export default function Home() {
  const [openEditNote, setOpenEditNote] = useState(false);
  const [openCreateNote, setOpenCreateNote] = useState(false);
  const [notes, setNotes] = useState([]);
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const { isLoggedIn } = useContext(AuthContext);

  const onEditNote = (id) => {
    setOpenEditNote(true);
    console.log(id);
  };
  const onDeleteNote = (id) => {
    console.log(id);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!isLoggedIn || !token) {
      navigate("/");
      return;
    }

    axios
      .get("/api/auth", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status == 200) {
          setUser(res.data.user);
        }
      })
      .catch((err) => {
        console.log(err);
        navigate("/");
      });
  }, [navigate, isLoggedIn]);

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div>
        <div class="mx-auto container py-20 px-6">
          <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {notes.length > 0 &&
              notes.map((note) => {
                return (
                  <NoteCard
                    key={note.id}
                    title={note.title}
                    date={note.date}
                    content={note.content}
                    tags={note.tags}
                    onEdit={onEditNote}
                    onDelete={onDeleteNote}
                  />
                );
              })}
          </div>
        </div>
      </div>
      <button
        className="absolute bottom-10 right-10"
        onClick={() => setOpenCreateNote(true)}
      >
        +
      </button>
      {openCreateNote && <AddNote open={() => setOpenCreateNote(false)} />}
      {openEditNote && <EditNote id={1} open={() => setOpenEditNote(false)} />}
    </>
  );
}
