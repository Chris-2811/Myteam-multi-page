import React, { useState } from 'react';
import avatar from '../../assets/avatar-nikita.jpg';
import avatar2 from '../../assets/avatar-christian.jpg';
import avatar3 from '../../assets/avatar-cruz.jpg';
import avatar4 from '../../assets/avatar-drake.jpg';
import avatar5 from '../../assets/avatar-griffin.jpg';
import avatar6 from '../../assets/avatar-aden.jpg';
import crossIcon from '../../assets/icon-cross.svg';
import twitter from '../../assets/icon-twitter.svg';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';

function Team() {
  const teamMembers = [
    {
      text: 'Hello my name is Nikita I founded this company during my studies in Stanford University ',
      name: 'Nikita Marks',
      title: 'Founder & CEO',
      avatar: avatar,
      id: 1,
    },
    {
      text: 'Leading people is my profession',
      name: 'Christion Duncan',
      title: 'Co-founder & CEO',
      avatar: avatar2,
      id: 2,
    },
    {
      text: 'I want to create a better world through responsible bussines',
      name: 'Cruz Hamer',
      title: 'Co-founder & CTO',
      avatar: avatar3,
      id: 3,
    },
    {
      text: 'This is some dummy text',
      name: 'Drake Heaton',
      title: 'Business Development Lead',
      avatar: avatar4,
      id: 4,
    },
    {
      text: '“Unique perspectives shape unique products, which is what you need to survive these days.”',
      name: 'Griffin Wise',
      title: 'Lead Marketing',
      avatar: avatar5,
      id: 5,
    },
    {
      text: '“Empowered teams create truly amazing products. Set the north star and let them follow it.”',
      name: 'Aden Allan',
      title: 'Head of Talent',
      avatar: avatar6,
      id: 6,
    },
  ];

  const CloseIcon = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17">
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z"
        />
      </svg>
    );
  };

  const [selectedMember, setSelectedMember] = useState(null);

  function handleClick(member) {
    setSelectedMember((prevMember) =>
      prevMember?.id === member.id ? null : member
    );
  }

  console.log(selectedMember);
  return (
    <section className=" bg-deep-jungle-green  relative z-10">
      <div className="absolute w-[147px] h-[100px] bottom-0 right-0 bg-testimonials-pattern"></div>
      <div className="absolute w-[200px] h-[200px] -top-[100px] md:top-0 -left-[100px] bg-about-2-contact-1"></div>
      <div className="myContainer-lg text-center pt-[5.5rem] pb-[7.25rem]  md:pt-[10.25rem] md:pb-[8rem] lg:pt-[8.75rem] lg:pb-[10.5rem] ">
        <h2 className="fs-600">Meet the directors</h2>
        <div className="grid mt-12 lg:mt-16 md:max-w-[573px] lg:min-w-[850px] xl:min-w-none xl:max-w-none mx-auto  md:grid-cols-2 lg:grid-cols-3 justify-center place-items-center gap-[3.25rem] md:gap-x-3 md:gap-y-[3.5rem] lg:gap-x-[1.875rem] lg:gap-y-[4.75rem]">
          {teamMembers.map((member) => {
            return (
              <div
                key={member.id}
                className="relative h-[253px] w-[327px] md:w-[281px] md:h-[253px] md bg-sacramento-state-green pt-8 px-6 xl:px-12 xl:w-[351px] pb-[3.5rem]"
              >
                {selectedMember && selectedMember.id === member.id ? (
                  <div className="pt-[0.1875rem]">
                    <h3 className="text-rapture-blue mb-2 text-lg">
                      {member.name}
                    </h3>
                    <p className="text-body text-[0.9375rem] mb-6">
                      {member.text}
                    </p>
                    <div className="flex items-center gap-4 justify-center">
                      <a
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaTwitter
                          size={24}
                          className="text-white hover:fill-light-coral"
                        />
                      </a>
                      <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedin
                          size={24}
                          className="text-white hover:fill-light-coral"
                        />
                      </a>
                    </div>
                    <div
                      onClick={() => handleClick(member)}
                      className="bg-rapture-blue absolute -bottom-[1.75rem] right-[50%] translate-x-[50%] grid place-items-center w-[3.5rem] h-[3.5rem] rounded-full p-4 hover:bg-rapture-blue cursor-pointer"
                    >
                      <CloseIcon fill={'black'} />
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="w-[96px] mx-auto mb-4 rounded-full overflow-hidden border-2 border-[#C4FFFE]">
                      <img src={member.avatar} alt="" />
                    </div>
                    <h3 className="text-rapture-blue text-lg">{member.name}</h3>
                    <p className="italic text-white text-[0.9375rem] font-medium">
                      {member.title}
                    </p>
                    <div
                      onClick={() => handleClick(member)}
                      className="bg-light-coral absolute -bottom-[1.75rem] right-[50%] translate-x-[50%] grid place-items-center w-[3.5rem] h-[3.5rem] rounded-full p-4 hover:bg-rapture-blue cursor-pointer"
                    >
                      <img src={crossIcon} alt="" />
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Team;
