import React from 'react';

import { CgSun } from 'react-icons/cg';
import { HiMoon } from 'react-icons/hi';

function Splash(props) {
  function changeTheme() {
    if (props.theme === 'light') {
      props.setTheme('dark');
    } else {
      props.setTheme('light');
    }
  }

  const icon = props.theme === 'light' ? <HiMoon size={20} /> : <CgSun size={20} />;

  return <Toggle onClick={changeTheme}>{icon}</Toggle>;
}
