import Avatar from '../../public/asset/avatar-svgrepo-com.svg';
import Image from 'next/image';
import { BsReddit, BsFacebook, BsGithub } from 'react-icons/bs';
const Team = () => {
  const Leader = [
    {
      name: 'Hoàng Ngọc Cư',
      role: 'Nhóm Trưởng',
      image: Avatar,
      redditLink: '#',
      facebookLink: '#',
      githubLink: '#',
    },
  ];

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
      <div className="container mx-auto px-6 py-10">
        <h1 className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-center text-6xl font-bold capitalize text-transparent">
          Our Team:
        </h1>

        <p className="mx-auto my-6 max-w-2xl text-center text-3xl text-gray-500 dark:text-gray-300">
          Đội Ngũ Phát Triển
        </p>

        <div>
          {
            // Team leader
            Leader.map((member, index) => (
              <div
                key={index}
                className="group mx-auto flex max-w-[500px] transform cursor-pointer flex-col items-center rounded-xl border from-blue-400 to-purple-600 p-8 transition-colors duration-300 hover:border-transparent hover:bg-gradient-to-r dark:border-gray-700 dark:hover:border-transparent"
              >
                <Image
                  className="rounded-full object-cover ring-4 ring-gray-300 duration-300 group-hover:scale-110"
                  src={member.image.src}
                  alt=""
                  width={128}
                  height={128}
                />
                <h1 className="mt-4 text-2xl font-semibold capitalize text-gray-700 group-hover:text-white dark:text-white">
                  {member.name}
                </h1>

                <p className="mt-2 capitalize text-gray-500 group-hover:text-gray-300 dark:text-gray-300">
                  {member.role}
                </p>

                <div className="-mx-2 mt-3 flex">
                  <a
                    href={member.redditLink}
                    className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white dark:text-gray-300 dark:hover:text-gray-300"
                    aria-label="Reddit"
                  >
                    <BsReddit />
                  </a>

                  <a
                    href="#"
                    className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white dark:text-gray-300 dark:hover:text-gray-300"
                    aria-label="Facebook"
                  >
                    <BsFacebook />
                  </a>

                  <a
                    href="#"
                    className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white dark:text-gray-300 dark:hover:text-gray-300"
                    aria-label="Github"
                  >
                    <BsGithub />
                  </a>
                </div>
              </div>
            ))
          }
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-16 xl:grid-cols-3">
          {
            // Team member
            team.map((member, index) => (
              <div
                key={index}
                className="group group flex transform cursor-pointer flex-col items-center rounded-xl border from-blue-400 to-purple-600 p-8 transition-colors duration-300 hover:border-transparent hover:bg-gradient-to-r dark:border-gray-700 dark:hover:border-transparent"
              >
                <Image
                  className=" rounded-full object-cover ring-4 ring-gray-300 duration-300 group-hover:scale-110"
                  src={member.image.src}
                  alt=""
                  width={128}
                  height={128}
                />
                <h1 className="mt-4 text-2xl font-semibold capitalize text-gray-700 group-hover:text-white dark:text-white">
                  {member.name}
                </h1>

                <p className="mt-2 capitalize text-gray-500 group-hover:text-gray-300 dark:text-gray-300">
                  {member.role}
                </p>

                <div className="-mx-2 mt-3 flex">
                  <a
                    href={member.redditLink}
                    className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white dark:text-gray-300 dark:hover:text-gray-300"
                    aria-label="Reddit"
                  >
                    <BsReddit />
                  </a>

                  <a
                    href="#"
                    className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white dark:text-gray-300 dark:hover:text-gray-300"
                    aria-label="Facebook"
                  >
                    <BsFacebook />
                  </a>

                  <a
                    href="#"
                    className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white dark:text-gray-300 dark:hover:text-gray-300"
                    aria-label="Github"
                  >
                    <BsGithub />
                  </a>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};
export default Team;
