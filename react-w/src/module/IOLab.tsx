import React from 'react';
import '../style/IOLab.css'
import { UserOutlined } from '@ant-design/icons';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Input, Space } from 'antd';

interface IOLProps {
    infoI: string,
    infoO: string,
    onInputChange: (value: string) => void //可认为是形参的定义，用于存放父组件的handle事件处理函数
}

function IOLab({ infoI, infoO, onInputChange }: IOLProps) {
    if (infoI === 'id') {
        return (
            <div className='div_IOLab'>
                <div className='OLab'>{infoO}</div>
                <div className='ILab'>
                    <Input placeholder="输入用户名" prefix={<UserOutlined />} onChange={(e) => onInputChange(e.target.value)} />
                </div>
            </div>
        )
    } else if (infoI === 'pw') {
        return (
            <div className='div_IOLab'>
                <div className='OLab'>{infoO}</div>
                <div className='ILab'>
                    <Input.Password placeholder="输入密码" onChange={(e) => onInputChange(e.target.value)} />
                </div>
            </div>
        )
    } else { return (<></>) }
}

export { IOLab }