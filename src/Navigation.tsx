import React, { MouseEvent } from 'react';
import { Page } from './ReaderPage';
import { Link } from 'found';
import './index.css';

interface NavigationProps {
  activePage?: number;
  documentId: string;
  pages: Page[];
  onNavigate: (documentId: string, page: number) => void;
}

interface NavItemProps {
  title: string;
  pageIndex: number;
  documentId: string;
  active: boolean;
  onClick: (page: number) => void;
}

const NavItem: React.FC<NavItemProps> = (props) => {
  return (
    <a
      href={`/dokument/${props.documentId}?page=${props.pageIndex}`}
      className={props.active ? 'active' : ''}
      style={{ display: 'block', marginBottom: 8 }}
      onClick={(ev: React.MouseEvent<HTMLAnchorElement>) => {
        if(ev.metaKey || ev.ctrlKey) {
          return;
        }
        ev.preventDefault();
        props.onClick(props.pageIndex);
      }}
    >{props.pageIndex} - {props.title}</a>
  )
}
const Navigation: React.FC<NavigationProps> = (props) => {
  console.log('render navigation')
  return (
    <div style={{ background: 'grey', padding: 16, position: 'fixed', top: 0, right: 0}}>
      {props.pages.map((p, i) => 
        <NavItem
          key={p.title}
          title={p.title}
          pageIndex={i + 1}
          documentId={props.documentId}
          active={props.activePage === i + 1}
          onClick={(page) => props.onNavigate(props.documentId, page)}
        />)
      }
    </div>
  );
};

export default Navigation;