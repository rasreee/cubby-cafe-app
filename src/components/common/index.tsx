import { select } from '@syncfusion/ej2-base';
export * from './BaseComponent';

export * from './BaseScreen';
// TODO: use this for responsiveness
const isMobile: boolean = window.matchMedia('(max-width:550px)').matches;

const urlRegex = /(npmci\.syncfusion\.com|ej2\.syncfusion\.com)(\/)(development|production)*/;
const sideNavBarArray: string[] = ['typescript', 'javascript'];
const sideNavBarObj: { [index: string]: string } = { typescript: '', javascript: 'javascript' };

export function initSideNavBarRoutes(): void {
    const href: string = location.href;
    const linkArray: string[] = href.match(urlRegex);
    for (const sideNavBar of sideNavBarArray) {
        const ele: HTMLFormElement = select('#' + sideNavBar) as HTMLFormElement;
        ele.href =
            (linkArray
                ? 'http://' + linkArray[1] + '/' + (linkArray[3] ? linkArray[3] + '/' : '')
                : 'https://ej2.syncfusion.com/') +
            (sideNavBarObj[sideNavBar] ? sideNavBar + '/' : '') +
            'demos/#/';
    }
}
