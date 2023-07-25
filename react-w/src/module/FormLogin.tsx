import React, { useRef, useState } from 'react';
import { IOLab } from './IOLab';
import { Link } from 'react-router-dom';
import '../style/Form.css';
import { Button, Input, Space } from 'antd';
import { gql } from '@apollo/client/core';
import { useQuery } from '@apollo/client/react';
import { client } from '..';
import { error } from 'console';

function FormLogin() {
    const [infoTips, setInfoTips] = useState('')
    const [id, setId] = useState('')
    const [pw, setPw] = useState('')
    //当用户更新输入时调用
    function handleIdChange(id: string) {
        setId(id)
    }
    function handlePwChange(pw: string) {
        setPw(pw)
    }
    //点击登录时调用
    async function handleLogin() {
        setInfoTips('请稍候...')
        //1.根据用户输入，定义gql查询语句
        const gqlQueryLogin = gql`
            query {
                login(userId: "${id}", userPw: "${pw}")        
            }
        `
        //2.进行查询 在一般函数中，使用query方法
        let result: boolean = false
        try {
            const response = await client.query({ query: gqlQueryLogin });
            result = response.data.login
        } catch (error) {
            setInfoTips('请求错误，请稍后再试')
            return
        }
        if (result) {
            setInfoTips('登录成功')
            return
        } else {
            setInfoTips('用户名或密码错误')
            return
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