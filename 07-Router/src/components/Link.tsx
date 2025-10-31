import { NAVIGATION_EVENTS } from '../utils/consts';

type LinkProps = {
  target?: string,
  to: string,
  text: string
}

export default function navigate(href: string) {
  window.history.pushState({}, '',href)
  const navigationEvent = new Event(NAVIGATION_EVENTS.PUSHSTATE);
  window.dispatchEvent(navigationEvent)
}

export function Link(props: LinkProps){
  const {to, target, text} = props;
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const isMainEvent = event.button === 0;
    const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey;
    const isManageableEvent = target === undefined || target === '_self';
    if(isMainEvent && isManageableEvent && !isModifiedEvent){
      event.preventDefault();
      navigate(to);
    }
  }
  
  return <a onClick={handleClick} href={to} target={target}>{text}</a> 
}
