import SearchInput from "./SearchInput"


const Topbar = () => {
  return (
    <header className="bg-green-500 py-6 px-4">
        <div className="flex items-center justify-between">
            <h4 className="font-bold text-xl max-lg:flex hidden">NOTE TAKER</h4>
            <SearchInput />
        </div>
    </header>
  )
}

export default Topbar