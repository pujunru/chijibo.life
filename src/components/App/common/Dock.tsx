import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

// import { Menu, Icon } from 'antd'
import { TabBar, Icon } from 'antd-mobile'
import { Redirect } from '@reach/router'
import { withRouter } from 'react-router'

interface ViewList {
    title: string;
    key: string;
    icon: {
        type: string;
    };
    selectedIcon: {
        background: string;
    };
}

const viewList: ViewList[] = [
    {
        title: 'fooder', key: 'fooder', icon: { type: 'loading' },
        selectedIcon: { background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }
    },
    {
        title: 'discover', key: 'discover', icon: { type: 'loading' },
        selectedIcon: { background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }
    },
    {
        title: 'me', key: 'me', icon: { type: 'loading' },
        selectedIcon: { background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }
    },

]

interface PropsType {
    match: any;
    location: any;
    history: any;
}

const Dock: React.FC<PropsType> = (props) => {

    const currentModule = useSelector((state: any) => {
        console.log('state', state);
        return state.uiReducers.currentModule
        
    })
    
    // const clearEffect = useEffect(() => {
    //     props.history.push('/app/fooder')
    //     return () => {
            
    //     };
    // }, [])

    console.log(currentModule)

    return (
        <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
            <TabBar>
                {viewList.map((item, index) =>
                    <TabBar.Item
                        title={item.title}
                        key={item.key}
                        icon={<Icon type={item.icon.type} />}
                        selected={currentModule === index + 1}
                        onPress={() => {
                            props.history.push('/app/' + item.title)
                        }}
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: item.selectedIcon.background
                        }}
                        />}
                    />
                )}
            </TabBar>
        </div>
    )
}

export default withRouter(Dock)