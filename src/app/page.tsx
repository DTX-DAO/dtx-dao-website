// ./src/app/page.tsx
import Image from 'next/image';
import { info } from '@/data/data';
import '@/styles/main.css';

export default function Home() {
  const create_link = (name: string, link: string) => {
    return (
      <a className="text-blue-500" href={link} target="_blank" rel="noopener noreferrer">
        {name}
      </a>
    );
  };

  return (
    <main className="main flex-auto flex flex-col h-screen justify-around">
      <div className=""></div>
      <div className="font-mono">
        <div className="grid lg:grid-cols-2">
          <div>Mission Statement:</div>
          {info.mission_statement}
        </div>
      </div>
      <div className="font-mono">
        <div className="grid lg:grid-cols-2">
          <div>How to get involved:</div>
          <ul>
            <li>Contribute to our project on {create_link('Github', info.links.github_link)}</li>
            <li>Fill out the DTX DAO interest {create_link('Form', info.links.google_interest_form)}</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
