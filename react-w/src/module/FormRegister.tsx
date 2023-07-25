import React, { useState } from 'react';
import { IOLab } from './IOLab';
import { Link } from 'react-router-dom';
import '../style/Form.css';
import { Button, Input, Space } from 'antd';
import { client } from '..';
import { gql } from '@apollo/client';

function FromRegister() {
    const [infoTips, setInfoTips] = useState('')
    const [id, setId] = useState('')
    const [pw, setPw] = useState('')
    const [pwr, setPwr] = useState('')
    //当用户更新输入时调用
    function handleIdChange(id: string) {
        setId(id)
    }
    function handlePwChange(pw: string) {
        setPw(pw)
    }
    function handlePwrChange(pwr: string) {
        setPwr(pwr)
    }
    //点击注册时调用
    async function handleRegister() {
        setInfoTips('请稍候...')
        if (pw !== pwr) {
            setInfoTips('两次输入的密码不一致')
        } else {
            // 1.gql
            const gqlMutationReg = gql`
                mutation {
                    register(userId: "${id}", userPw: "${pw}")
                }
            `
            // 更改
            let result: boolean = false
            try {
                const response = await client.mutate({ mutation: gqlMutationReg });
                result = response.data.register
            } catch (error) {
                setInfoTips('请求错误，请稍后再试')
                return
            }
            if (result) {
                setInfoTips('注册成功')
                return
            } else {
                setInfoTips('用户名已被占用')
                return
            }
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