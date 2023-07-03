import React, { useState } from 'react';
import { IOLab } from './IOLab';
import { Link } from 'react-router-dom';
import '../style/Form.css';
import { Button, Input, Space } from 'antd';

function FromRegister() {
    const [infoTips, setInfoTips] = useState('')
    const [id, setId] = useState('')
    const [pw, setPw] = useState('')
    const [pwr, setPwr] = useState('')
    function handleIdChange(id: string) {
        setId(id)
    }
    function handlePwChange(pw: string) {
        setPw(pw)
    }
    function handlePwrChange(pwr: string) {
        setPwr(pwr)
    }
    function handleRegister() {
        if (pw !== pwr) {
            setInfoTips('两次输入的密码不一致')
        } else {
            setInfoTips('注册成功')
        }
    }
    return (
        <>
            <h1>用户注册</h1>
            <IOLab infoO='新用户名' infoI='id' onInputChange={handleIdChange}></IOLab>
            <IOLab infoO='密码' infoI='pw' onInputChange={handlePwChange}></IOLab>
            <IOLab infoO='确认密码' infoI='pw' onInputChange={handlePwrChange}></IOLab>
            <div className='tips'>{infoTips}</div>
            <Button onClick={() => handleRegister()}>注册</Button>
            <Link to={'/login'}>转到登录</Link>
        </>
    )
}

export { FromRegister }