import React from 'react';
import './App.css';
import HookCounter from './components/HookCounter';
import HookCounter2 from './components/HookCounter2';
import HookCounter3 from './components/HookCounter3';
import HookCounter4 from './components/HookCounter4';
import UseEffectHookCounter1 from './components/UseEffectHookCounter1';
import UseEffectHookMouse from './components/UseEffectHookMouse';
import HookMouseContainer from './components/HookMouseContainer';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';
import UseReducerCounter1 from './components/useReducerCounter1';
import UseReducerCounter2 from './components/UseReducerCounter2';
import UseReducerCounter3 from './components/UseReducerCounter3';
import DataFetching1 from './DataFetching1';
import DataFetching2 from './components/DataFetching2';
import UseMemoCounter from './components/UseMemoCounter';
import FocusInput from './components/FocusInput';
import ClassTimer from './ClassTimer';
import HookTimer from './components/HookTimer';
import DocTitleOne from './DocTitleOne';
import DocTitleTwo from './DocTitleTwo';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import UserForm from './components/UserForm';

function App() {
  return (
    <div className="App">
      <HookCounter/>
      <HookCounter2/>
      <HookCounter3/>
      <HookCounter4/>
      <UseEffectHookCounter1/>
      <HookMouseContainer/>
      <IntervalHookCounter/>
      <DataFetching/>
      <UseReducerCounter1/>
      <UseReducerCounter2/>
      <UseReducerCounter3/>
      <DataFetching1/>
      <DataFetching2/>
      <UseMemoCounter/>
      <FocusInput/>
      <ClassTimer/>
      <HookTimer/>
      <DocTitleOne/>
      <DocTitleTwo/>
      <CounterOne/>
      <CounterTwo/>
      <UserForm/>
    </div>
  );
}

export default App;
