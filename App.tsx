import React from 'react';

import Routes from './src/routes/routes';
import { Perfil } from './src/screens/Perfil';
import { SingIn } from './src/screens/SingIn';
import { ForgotPass } from './src/screens/ForgotPass';
import { Registration } from './src/screens/Registration';
import { RegisterPhone } from './src/screens/RegisterPhone';
import { PhoneVerification } from './src/screens/PhoneVerification';
import { Notification } from './src/screens/Notification';
import { Explore } from './src/screens/Explore';

export default function App() {
  return (
    <Routes />
  );
}
 