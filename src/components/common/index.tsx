import { select } from '@syncfusion/ej2-base';
export * from './BaseComponent';

export * from './BaseScreen';
// TODO: use this for responsiveness
const isMobile: boolean = window.matchMedia('(max-width:550px)').matches;

const urlRegex = /(npmci\.syncfusion\.com|ej2\.syncfusion\.com)(\/)(development|production)*/;
const sideNavbarArray: string[] = ['typescript', 'javascript'];
const sideNavbarObj: { [index: string]: string } = { typescript: '', javascript: 'javascript' };

export function initSideNavbarRoutes(): void {
    const href: string = location.href;
    const linkArray: string[] = href.match(urlRegex);
    for (const sideNavbar of sideNavbarArray) {
        const ele: HTMLFormElement = select('#' + sideNavbar) as HTMLFormElement;
        ele.href =
            (linkArray
                ? 'http://' + linkArray[1] + '/' + (linkArray[3] ? linkArray[3] + '/' : '')
                : 'https://ej2.syncfusion.com/') +
            (sideNavbarObj[sideNavbar] ? sideNavbar + '/' : '') +
            'demos/#/';
    }
}
