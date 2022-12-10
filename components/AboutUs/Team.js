import Avatar from '../../public/asset/avatar-svgrepo-com.svg'
import { BsReddit, BsFacebook, BsGithub } from "react-icons/bs";
const Team = () => {
  
  const Leader = [
    {
    name: 'Hoàng Ngọc Cư',
    role: 'Nhóm Trưởng',
    image: Avatar,
    redditLink: '#',
    facebookLink: '#',
    githubLink: '#',
  }
  ]

  const team = [
    {
      name: 'Nguyễn Gia Huy',
      role: 'Thành viên',
      image: Avatar,
      redditLink: '#',
      facebookLink: '#',
      githubLink: '#',
    },
    {
      name: 'Nguyễn Đức Duy',
      role: 'Thành viên',
      image: Avatar,
      redditLink: '#',
      facebookLink: '#',
      githubLink: '#',
    },
    {
      name: 'Võ Lục Thanh Trà',
      role: 'Thành viên',
      image: Avatar,
      redditLink: '#',
      facebookLink: '#',
      githubLink: '#',
    },
    {
      name: 'Vũ Tùng Lâm',
      role: 'Thành viên',
      image: Avatar,
      redditLink: '#',
      facebookLink: '#',
      githubLink: '#',
    },
    {
      name: 'Trần Tiến Đạt',
      role: 'Thành viên',
      image: Avatar,
      redditLink: '#',
      facebookLink: '#',
      githubLink: '#',
    },
    {
      name: 'Hoàng Anh Tuấn',
      role: 'Thành viên',
      image: Avatar,
      redditLink: '#',
      facebookLink: '#',
      githubLink: '#',
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 capitalize">Our Team:</h1>

        <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300 text-3xl">
          Đội Ngũ Phát Triển
        </p>

        <div>
          {
            // Team leader
            Leader.map((member, index) => (
              <div key={index} className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-gradient-to-r from-blue-400 to-purple-600 dark:border-gray-700 dark:hover:border-transparent">
                <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300 group-hover:scale-110 duration-300" src={member.image.src} alt=""></img>
                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
                  {member.name}
                </h1>

                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">{member.role}</p>

                <div className="flex mt-3 -mx-2">
                  <a href={member.redditLink} className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Reddit">
                    <BsReddit />
                  </a>

                  <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Facebook">
                    <BsFacebook />
                  </a>

                  <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
                    <BsGithub />
                  </a>
                </div>
              </div>
            ))
          }
        </div>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
          {
            // Team member
            team.map((member, index) => (
              <div key={index} className="group flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-gradient-to-r from-blue-400 to-purple-600 dark:border-gray-700 dark:hover:border-transparent">
                <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300 group-hover:scale-110 duration-300" src={member.image.src} alt=""></img>
                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
                  {member.name}
                </h1>

                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">{member.role}</p>

                <div className="flex mt-3 -mx-2">
                  <a href={member.redditLink} className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Reddit">
                    <BsReddit />
                  </a>

                  <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Facebook">
                    <BsFacebook />
                  </a>

                  <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
                    <BsGithub />
                  </a>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>)
}
export default Team