'use client';
import Link from 'next/link';

import ImageRound from '@components/common/Image';

import { contactInfo } from '@constants/personal';
import { menuSideBarItems } from '@constants/menu';

const Sidebar = () => {
  return (
    <aside className="fixed z-50 flex flex-col gap-8 items-center justify-between h-screen px-4 py-12 bg-[#F2F3F7] w-[300px]">
      <div className="w-full flex flex-col gap-8 items-center">
        <ImageRound
          src="/images/avatar.jpg"
          alt={''}
          className="w-36 h-36 rounded-full"
        />
        <div className="flex flex-col gap-1 items-center uppercase">
          <h4 className="text-xl font-medium">Quang Tran Binh</h4>
          <span className="text-xs text-gray-400">Frontend Developer</span>
        </div>
        <div className="flex flex-col items-center uppercase gap-3 text-sm">
          {menuSideBarItems.map((element, index) => (
            <Link key={index} href={element.href}>
              {element.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3 item-center justify-center text-sm text-center">
        <span>❤ Thank you for your visit ❤</span>
        <span>Contact me: +84966313927</span>
        <div className="flex justify-center gap-3">
          {contactInfo.map((element, index) => (
            <Link key={index} href={element.url}>
              <ImageRound
                alt={element.name}
                src={element.icon}
                className="w-5 h-5"
              />
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
