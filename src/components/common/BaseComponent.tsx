import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { initSideNavBarRoutes } from './index';

import {
    onComponentLoad,
    setNavButtonState,
    renderDescriptions,
    checkApiTableDataSource,
} from './Content';
import { Animation, select } from '@syncfusion/ej2-base';
import { ListView } from '@syncfusion/ej2-react-lists';

let isMobile: boolean;
let isTablet: boolean;
let isPc: boolean;
const controlscreenData: any = {};

function viewSwitch(from: HTMLElement, to: HTMLElement, reverse?: boolean): void {
    const animation: Animation = new Animation({ duration: 500, timingFunction: 'ease' });
    const controlscreens: HTMLElement = select('#controlscreens') as HTMLElement;
    controlscreens.classList.add('control-screens-animate');
    from.style.overflowY = 'hidden';
    to.style.overflowY = 'hidden';
    to.classList.remove('sb-hide');
    animation.animate(from, {
        name: reverse ? 'SlideRightOut' : 'SlideLeftOut',
        end: (): void => {
            controlscreens.classList.remove('control-screens-animate');
            from.style.overflowY = '';
            to.style.overflowY = '';
            from.classList.add('sb-hide');
        },
    });
    animation.animate(to, { name: reverse ? 'SlideLeftIn' : 'SlideRightIn' });
}

export function handleNavItemSelected(): void {
    const hash: string[] = location.hash.split('/');
    const list: ListView = (select('#controlList') as any).ej2_instances[0];
    const control: Element =
        select('[control-name="' + hash[2] + '"]') || select('[control-name="grid"]');
    if (control) {
        const data: any = list.dataSource;
        const screens: any = controlscreenData[control.getAttribute('control-name')];
        if (JSON.stringify(data) !== JSON.stringify(screens)) {
            list.dataSource = screens;
        }
        const selectscreen: Element = select(
            '[data-path="' + '/' + hash.slice(2).join('/') + '"]',
            select('#controlList'),
        );
    } else {
        list.selectItem(select('[data-path="/grid/overview"]'));
    }
}

export class BaseComponent<P, S> extends React.PureComponent<RouteComponentProps<any> & P, S> {
    /**
     * Custom Render Complete function
     */
    public onRenderCompleted(): void {
        // TODO: finish implementation
        console.log('BaseComponent -- onRenderCompleted()');
    }

    componentDidMount(): void {
        renderDescriptions();
        initSideNavBarRoutes();
        onComponentLoad();
        setNavButtonState();
        setTimeout(() => {
            handleNavItemSelected();
            checkApiTableDataSource();
            this.onRenderCompleted();
        });
    }
}
