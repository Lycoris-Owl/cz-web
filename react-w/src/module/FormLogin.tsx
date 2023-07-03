import React, { useRef, useState } from 'react';
import { IOLab } from './IOLab';
import { Link } from 'react-router-dom';
import '../style/Form.css';
import { Button, Input, Space } from 'antd';

function FormLogin() {
    const data = { //模拟数据
        id: 'admin',
        pw: 'admin'
    }
    const [infoTips, setInfoTips] = useState('')
    const [id, setId] = useState('')
    const [pw, setPw] = useState('')
    function handleIdChange(id: string) {
        setId(id)
    }
    function handlePwChange(pw: string) {
        setPw(pw)
    }
    function handleLogin() {
        if (id === data.id && pw === data.pw) {
            setInfoTips('登录成功')
        } else {
            setInfoTips('用户名或密码错误')
        }
    }
    return (
        <>
            <h1>用户登录</h1>
            <IOLab infoO='用户名' infoI='id' onInputChange={handleIdChange}></IOLab>
            <IOLab infoO='密码' infoI='pw' onInputChange={handlePwChange}></IOLab>
            <div className='tips'>{infoTips}</div>
            <Button onClick={() => handleLogin()}>登录</Button>
            <Link to={'/register'}>转到注册</Link>
        </>
    )

}

export { FormLogin }