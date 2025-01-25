import AllNotes from "@/components/AllNotes";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1">
      <Topbar title='All Notes' />
      <AllNotes />
      </div>
    </div>
  );
}
