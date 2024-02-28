'use client';

import { info } from '@/data/data';
import Image from 'next/image';
import { useState } from 'react';

type BioSectionProps = {
  title: string;
  imageUrl: string;
  description: string;
  website?: string;
};

const BioSection: React.FC<BioSectionProps> = ({ title, imageUrl, description, website }) => {
  return (
    <div className="lg:grid grid-cols-2 gap-5 pb-10">
      <div className="flex justify-center items-center pb-3">
        <img className="w-80 h-80 rounded-2xl" src={imageUrl} alt="Bio Image" />
      </div>
      <div className="">
        <div className="text-2xl text-center pb-5">{title}</div>
        <div className="">{description}</div>
        {website && (
          <div className="pt-5">
            <span>Website: </span>
            <a href={website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              {website}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

const styling = 'm-1 p-1 rounded block text-center hover:cursor-pointer hover:underline';

const Schedule = () => {
  const [currentPage, setCurrentPage] = useState('contributors');

  const handleClick = (status: string) => {
    setCurrentPage(status);
    console.log(status);
  };

  return (
    <div>
      <div className="text-sm font-medium text-center border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap justify-end -mb-px">
          <li className="mr-2">
            <span className={styling} onClick={() => handleClick('contributors')}>
              Contributors
            </span>
          </li>
          <li className="mr-2">
            <span className={styling} onClick={() => handleClick('supporters')}>
              Supporters
            </span>
          </li>
        </ul>
      </div>
      <div className="animate-fadeIn">
        {currentPage === 'contributors' && (
          <>
            <div className="flex text-3xl pt-10 justify-center">DAO Contributors</div>
            <div className="pt-5 pb-5">
              <BioSection title={info.team.will.name} imageUrl={info.team.will.image} description={info.team.will.bio} />
              <BioSection title={info.team.ki.name} imageUrl={info.team.ki.image} description={info.team.ki.bio} />
              <BioSection title={info.team.flu.name} imageUrl={info.team.flu.image} description={info.team.flu.bio} website={info.team.flu.website} />
              <BioSection title={info.team.tobalo.name} imageUrl={info.team.tobalo.image} description={info.team.tobalo.bio} website={info.team.tobalo.website} />
            </div>
          </>
        )}
        {currentPage === 'supporters' && (
          <>
            <div className="flex text-3xl pt-10 justify-center">DAO Supporters</div>
            <div className="pt-5 pb-5 flex w-auto justify-center gap-5">
              <a href="https://fwtx.city" target="_blank" rel="noopener noreferrer" className="flex justify-center w-1/2">
                <img src="/images/sponsors/fwtx-dao.png" alt="FWTX DAO" className="object-contain" />
              </a>
              {/* <a href="https://texasblockchaincouncil.org/" target="_blank" rel="noopener noreferrer" className="flex justify-center w-1/2">
                <img src="/images/sponsors/tbc.jpg" alt="Texas Blockchain Council" className="object-contain" />
              </a> */}
            </div>
            <div className="pt-5 pb-10 flex w-auto justify-center gap-5">
              <a href="https://yeetum.com" target="_blank" rel="noopener noreferrer" className="flex justify-center w-1/2">
                <img src="/images/sponsors/yeetum.png" alt="Yeetum" className="object-contain" />
              </a>
              <a href="https://www.rocketnetwork.ai/" target="_blank" rel="noopener noreferrer" className="flex justify-center w-1/2">
                <img src="/images/sponsors/rocket_network.png" alt="" className="object-contain" />
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Schedule;
