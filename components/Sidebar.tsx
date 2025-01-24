import Link from "next/link"

const Sidebar = () => {

    const link = [
        {
            id: 'link_1',
            title: "All Notes",
            href: '/'
        },
        {
            id: 'link_2',
            title: "Create Note",
            href: '/create'
        },
        {
            id: 'link_3',
            title: "Archived Notes",
            href: '/archive'
        },
        {
            id: 'link_4',
            title: "AI summarizer",
            href: '/summarizer'
        },
    ]
  return (
    <aside className="relative w-64 bg-white border-r-2 border- h-screen py-6 px-4 max-lg:hidden">
        <div className="flex items-center justify-start">
            <h4 className="font-bold text-xl">NOTE TAKER</h4>
        </div>
        <div className="h-[0.8px] w-full bg-[#E2E2E2] mt-12" />
        <div className="flex flex-col gap-10 mt-12 ">
            {link.map(({id, title, href})=>(
                <Link key={id} className="text-[18px] font-medium text-secondary" href={href}>{title}</Link>
            ))}
        </div>
    </aside>
  )
}

export default Sidebar