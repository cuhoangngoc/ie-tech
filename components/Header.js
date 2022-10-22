import Image from "next/image"
import githubImg from "../asset/github.png"

function Header() {
  return (
    <header>
      <h1>Welcome to IE Solution</h1>
      <Image src={githubImg} width={200} height={100} />

      <a href="#" className="group block max-w-xs mx-auto rounded-lg p-6 bg-white space-y-3 hover:bg-sky-500">
        <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">New project</h3>
        <p className="text-slate-500 group-hover:text-white text-sm">Create a new project from a variety of starting templates.</p>
      </a>
    </header>
  )
}

export default Header