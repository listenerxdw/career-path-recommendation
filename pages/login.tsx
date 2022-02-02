import { ChangeEvent, FunctionComponent, useState } from 'react'
import { Checkbox, Form, Input } from 'antd'
import axios from 'axios'
import Link from 'next/link'

import { useRouter } from 'next/router'

interface OwnProps {}

type Props = OwnProps

const Login: FunctionComponent<Props> = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value)
  }

  function handlePasswordChange(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value)
  }

  function login() {
    const loginInfo = {
      email,
      password,
    }
    axios
      .post('/api/login', loginInfo)
      .then((res) => {
        if (res.status === 200) {
          const user = res.data.user
          localStorage.setItem('user', JSON.stringify(user))
          localStorage.setItem(
            'username',
            JSON.stringify(user.firstname + ' ' + user.lastname)
          )
          localStorage.setItem('email', JSON.stringify(user.email))
          localStorage.setItem('age', JSON.stringify(user.age))
          localStorage.setItem('grade', JSON.stringify(user.grade))
          localStorage.setItem('phone', JSON.stringify(user.phone))
          localStorage.setItem('address', JSON.stringify(user.address))
          localStorage.setItem('id', JSON.stringify(user.id))
          router.push('/detection')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="layout-section min-h-screen bg-gray-100">
      <div className="login-wrapper ">
        <div className="space-y-6">
          <div className="text-center">
            <img
              className="mx-auto w-full max-w-sm object-contain"
              src={'/img/uts_logo.png'}
              alt="welcome"
            />
            <h1 className="font-base text-2xl" style={{ paddingBottom: 15 }}>
              UTS Career Path Recommendation System
            </h1>
          </div>
          <div className="flex w-full justify-center ">
            <Form
              className="w-full max-w-sm rounded-lg bg-white px-8 py-4"
              name="basic"
              initialValues={{ remember: true }}
              layout="vertical"
              hideRequiredMark
            >
              <h2
                className="font-base text-2xl"
                style={{
                  textAlign: 'center',
                  paddingBottom: 20,
                }}
              >
                Sign in
              </h2>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { type: 'email', message: 'Please input a valid email!' },
                  { required: true, message: 'Please input your email!' },
                ]}
              >
                <Input
                  className="input-space"
                  placeholder="Please enter your email..."
                  value={email}
                  onChange={handleEmailChange}
                />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: 'Please input your password!' },
                ]}
              >
                <Input.Password
                  className="input-space"
                  placeholder="Please enter your password..."
                  value={password}
                  onChange={handlePasswordChange}
                />
              </Form.Item>

              <Form.Item name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item>
                <button
                  className="submit-btn w-full rounded-md rounded-md border border-transparent bg-blue-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  onClick={login}
                >
                  Login
                </button>
              </Form.Item>
            </Form>
          </div>
          <div className="flex w-full justify-center ">
            <div className="w-full max-w-sm rounded-lg bg-white px-8 py-4">
              <p className="text-black">
                Don't have an account?
                <span className="mx-1.5 text-blue-600">
                  <Link href="/register">Sign up</Link>
                </span>
                here!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
