import ProfileInfo from "../../cards/ProfileInfo";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
export default function NavBar() {
  const [searchText, setSearchText] = useState("");
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <>
      <nav class="bg-white shadow">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="relative flex h-16 items-center justify-between">
            <h2 className="text-3xl text-black">Notes</h2>
            {isLoggedIn && (
              <>
                <SearchBar
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
                <ProfileInfo />
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
