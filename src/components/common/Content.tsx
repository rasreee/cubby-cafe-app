import { Tab } from '@syncfusion/ej2-react-navigations';
import { Ajax, detach, select } from '@syncfusion/ej2-base';
import { createElement } from '@syncfusion/ej2-base';

import { ListView } from '@syncfusion/ej2-react-lists';

import { BaseScreen } from '../common/index';

export let sourceTab: Tab;
declare let screen: BaseScreen;
let hash: string[];
const propRegex = /-3/;
let apiGrid: any;
const propBorder: HTMLElement = createElement('div', { className: 'sideNavbar-property-border' });
let numberOfScreens: number;
let isMobile: boolean;

const mobilePropPane: Element = select('.sideNavbar-mobile-prop-pane');

export function selectDefaultTab(): void {
    if (sourceTab) {
        sourceTab.selectedItem = 0;
    }
}

function sourceFileList(node: any): void {
    for (const routes of node.curViewDS) {
        if (routes.path == location.hash.split('/').slice(2).join('/')) {
            return routes.sourceFiles;
        }
    }
}

function getPath(path: any): void {
    const splitPath: string = path.split('/')[1];
    const tsx: any = [
        { path: `src/${path}.tsx`, displayName: `${splitPath}.tsx` },
        { path: `src/${path}.jsx`, displayName: `${splitPath}.jsx` },
    ];
    return tsx;
}

function renderSourceTabContent(): void {
    const path: string = hash.slice(2).join('/');
    const sourcePromise: Array<Promise<Ajax>> = [];
    const sObj: any = [];
    const listFile: ListView = (select('#controlList') as any).ej2_instances[0];
    const sourceFiles: any = (sourceFileList(listFile) as any) || getPath(path);
    for (const sourceFile of sourceFiles) {
        sourcePromise.push(new Ajax(sourceFile.path, 'GET', false).send());
        sObj.push({
            header: { text: sourceFile.displayName },
            data: '',
            content: sourceFile.displayName,
        });
    }
}

export function onComponentLoad(): void {
    hash = location.hash.split('/');
    renderSourceTabContent();
    selectDefaultTab();
    const propPanel: Element = select('#control-content .property-section');
    if (propPanel) {
        if (propRegex.test(propPanel.className)) {
            propBorder.classList.add('sideNavbar-prop-md-3');
            propBorder.classList.remove('sideNavbar-prop-md-4');
        } else {
            propBorder.classList.add('sideNavbar-prop-md-4');
            propBorder.classList.remove('sideNavbar-prop-md-3');
        }
        propBorder.classList.remove('sideNavbar-hide');
    } else {
        propBorder.classList.add('sideNavbar-hide');
    }
    const mobileSetting: Element = select('.sideNavbar-mobile-setting');
    isMobile = screen.matchMedia('(max-width:550px)').matches;
    if (isMobile && mobileSetting) {
        if (propPanel) {
            mobileSetting.classList.remove('sideNavbar-hide');
            if (mobilePropPane.firstChild) {
                detach(mobilePropPane.firstChild);
            }
            mobilePropPane.appendChild(propPanel);
        } else {
            select('.sideNavbar-mobile-setting').classList.add('sideNavbar-hide');
        }
    }
}

function toggleButtonState(id: string, state: boolean): void {
    const ele: HTMLButtonElement = document.getElementById(id) as HTMLButtonElement;
    if (ele) {
        const mobileEle: HTMLButtonElement = document.getElementById(
            'mobile-' + id,
        ) as HTMLButtonElement;
        ele.disabled = state;
        mobileEle.disabled = state;
        if (state) {
            mobileEle.classList.add('e-disabled');
            ele.classList.add('e-disabled');
        } else {
            mobileEle.classList.remove('e-disabled');
            ele.classList.remove('e-disabled');
        }
    }
}

export function setNavButtonState(): void {
    const currentIndex: number = screen.screensOrderArray.indexOf(
        location.hash.split('/').slice(2).join('/'),
    );
    numberOfScreens = screen.screensOrderArray.length - 1;
    if (currentIndex === numberOfScreens) {
        toggleButtonState('next-screen', true);
    } else {
        toggleButtonState('next-screen', false);
    }
    if (currentIndex === 0) {
        toggleButtonState('prev-screen', true);
    } else {
        toggleButtonState('prev-screen', false);
    }
}

function renderDescription(): void {
    let header: HTMLElement;
    const description: HTMLElement = select(
        '#description',
        select('#control-content'),
    ) as HTMLElement;
    const descElement: HTMLElement = select('.description-section') as HTMLElement;
    const descriptionElement: Element = select('#description', descElement);
    if (descriptionElement) {
        detach(descriptionElement);
    }
    if (description) {
        descElement.appendChild(description);
    }
}

function renderActionDescription(): void {
    const navigationActionDescriptionElement: HTMLElement = select(
        '.sideNavbar-action-description',
    ) as HTMLElement;
    if (navigationActionDescriptionElement) {
        navigationActionDescriptionElement.style.display = 'none';
    }
}

export function renderDescriptions(): void {
    renderDescription();
    renderActionDescription();
}

export function checkApiTableDataSource(): void {
    if (!(select('#content-tab') as any).ej2_instances) {
        return;
    }
    const hash: string[] = location.hash.split('/');
    const data: string[] = screen.apiList[hash[2] + '/' + hash[3].replace('.html', '')] || [];
    if (!data.length) {
        (select('#content-tab') as any).ej2_instances[0].hideTab(2);
        apiGrid.dataSource = [];
    } else {
        (select('#content-tab') as any).ej2_instances[0].hideTab(2, false);
        apiGrid.dataSource = data;
    }
}
