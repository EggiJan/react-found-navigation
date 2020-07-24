import React, { useState, useEffect } from 'react';
import { useRouter } from 'found';
import Navigation from './Navigation';
import ContentView from './ContentView';
import './index.css'

export type Page = {
  title: string;
  image: string;
}

const pages: Page[] = [
  {
    title: 'foo',
    image: 'https://picsum.photos/seed/foo/500/700'
  },
  {
    title: 'bar',
    image: 'https://picsum.photos/seed/bar/500/700'
  },
  {
    title: 'baz',
    image: 'https://picsum.photos/seed/baz/500/700'
  },
  {
    title: 'lemon',
    image: 'https://picsum.photos/seed/lemon/500/700'
  }
];

const ReaderPage: React.FC = (props) => {
  console.log('render reader', props);
  const { match } = useRouter();
  const documentId = match.params.id;
  const [initialPage, setInitialPage] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const page = match.location.query.page;
    if (page) {
      console.log('use query page', page);
      setInitialPage(parseInt(page));
    }
  }, [match.location.query.page]);

  const handleNavigate = (docId: string, page: number) => {
    console.log('handle navigate', docId, page);
    setInitialPage(page);
  }

  return (
    <div>
      <h1>Reader</h1>
      <div style={{display: 'flex'}}>
        <div>
          <button onClick={() => setSidebarOpen(!sidebarOpen)}>Toggle Sidebar</button>
          {sidebarOpen && <div className='sidebar'>Sidebar</div>}
        </div>
        
        <ContentView pages={pages} initialPage={initialPage}/>
        <Navigation pages={pages} documentId={documentId} onNavigate={handleNavigate} activePage={initialPage}/>
      </div>
    </div>
  );
};

export default ReaderPage;