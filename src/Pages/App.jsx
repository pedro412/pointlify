import React from 'react';
import './App.css';
import { Layout, Menu } from 'antd';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LoginPage from './LoginPage/LoginPage';
import HomePage from './HomePage/HomePage';
import SignupPage from './SignupPage/SignupPage';
import FooterContainer from '../components/FooterContainer/FooterContainer';

const { Header, Footer, Content } = Layout;

const App = () => (
  <Router>
    <Layout className='layout'>
      <Header>
        <div className='logo' />
        <Menu theme='dark' mode='horizontal'>
          <Menu.Item key='1'>
            <Link to='/signup'>Sign Up</Link>
          </Menu.Item>
          <Menu.Item key='2'>
            <Link to='/login'>Login</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content className='content'>
        <Switch>
          <Route path='/login'>
            <LoginPage />
          </Route>
          <Route path='/signup'>
            <SignupPage />
          </Route>
          <Route path='/'>
            <HomePage />
          </Route>
        </Switch>
      </Content>
      <Footer>
        <FooterContainer />
      </Footer>
    </Layout>
  </Router>
);

export default App;
