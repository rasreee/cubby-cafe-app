import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import { ListViewComponent, SelectEventArgs } from '@syncfusion/ej2-react-lists';
import { BaseComponent } from '../common/index';
import './sidebar-list.css';

export class SideNavBar extends BaseComponent<{}, {}> {
    public sidebarobj: SidebarComponent;
    public dataList: { [key: string]: Object }[] = [
        { text: 'Home' },
        { text: 'About' },
        { text: 'Careers' },
        { text: 'FAQs' },
        { text: 'Blog' },
        { text: 'Uses' },
        { text: 'Contact' },
    ];
    public fields: object = { tooltip: 'text' };
    render() {
        return (
            <div className="control-section sidebar-list">
                className="col-lg-12 col-sm-12 col-md-12 center">
                Click/Touch the button to view the sample
                </div>
                <div className="col-lg-12 col-sm-12 col-md-12 center">
                    <a
                        className="e-btn"
                        id="newTab"
                        target="_blank"
                        onClick={this.newTabClick.bind(this)}

                        Open in new Tab
                    </a>
                </div>
                <div id="wrapper">
                    <div className="col-lg-12 col-sm-12 col-md-12">
                        <div id="head">
                            <div className="text">Menu</div>
                            <span
                                id="hamburger"
                                className="e-icons menu"
                                onClick={this.openClick.bind(this)}
                            ></span>
                            <div className="header">Header Content</div>
                        </div>
                        <SidebarComponent
                            id="sidebar-menu"
                            ref={(Sidebar) => (this.sidebarobj = Sidebar)}
                            type="Over"
                            width="250px"
                        >
                            <div
                                id="close"
                                className="e-icons"
                                onClick={this.closeClick.bind(this)}
                            ></div>
                            <div className="content-area">
                                {/* ListView Element */}
                                <ListViewComponent
                                    id="menuList"
                                    dataSource={this.dataList}
                                    fields={this.fields}
                                    select={this.onSelect.bind(this)}
                                ></ListViewComponent>
                            </div>
                        </SidebarComponent>
                        <div>
                            <div className="main content textArea">Application content</div>
                        </div>
                    </div>
                </div>
                <div id="action-description">
                    <p> Click/Touch the button to view the Sidebar sample in new tab.</p>
                </div>
                        "description" >

            I In this sample, the ListView component is placed inside the Sidebar for
                         navigation.
                     </p >
                </div >
            </div >
        );
    }

    //open newTab
    newTabClick(): void {
        const URL = location.href.replace(location.search, '');
        document
            .getElementById('newTab')
            .setAttribute('href', URL.split('#')[0] + 'sidebar/sidebar-list/index.html');


        onSelect(args: any): void {
            this.sidebarobj.hide();
            lector('.textArea').textContent = args.text + ' Page Content';
        }

        //open the sidebar
        openClick(): void {
            this.sidebarobj.show();
        }

        //close the sidebar
        closeClick(): void {
            hide();

        }
    }
