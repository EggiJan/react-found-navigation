import React, { useEffect, useState } from 'react';
import { Page } from './ReaderPage';

interface ContentViewProps {
  pages: Page[];
  initialPage: number;
}


const PageContainer: React.FC<{src: string, pageIndex: number, onLoaded: () => void;}> = (props) => {
  console.log('render page');
  return (
    <div style={{ marginBottom: 8 }} id={`page-container-id-${props.pageIndex}`}>
      <div>{props.pageIndex}</div>
      <img
        src={props.src}
        alt='missing'
        style={{ display: 'block' }}
        onLoad={props.onLoaded}
      />
    </div>
  )
};

const ContentView: React.FC<ContentViewProps> = (props) => {
  const [loadedPages, setLoadedPages] = useState(0);
  
  const handlePageLoad = () => {
    setLoadedPages(loadedPages + 1);
  }

  useEffect(() => {
    if(loadedPages !== props.pages.length) {
      console.log('pages not loaded');
      return;
    }

    console.log('scroll', props.initialPage);
    const pageContainer = document.querySelectorAll(`#page-container-id-${props.initialPage}`);
    pageContainer[0].scrollIntoView({ block: 'start' });
  }, [props.initialPage, props.pages.length, loadedPages]);

  return (
    <div>
      {props.pages.map((p, i) => <PageContainer key={i} src={p.image} pageIndex={i + 1} onLoaded={handlePageLoad}/>)}
    </div>
  )
};

export default ContentView;