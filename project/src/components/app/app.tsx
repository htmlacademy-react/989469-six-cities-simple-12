import {Route, BrowserRouter, Routes} from 'react-router-dom';

import {AppRoutes, Props} from '../../const';

import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Property from '../../pages/property/property';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoutes.root}
          element={<Main offersNumber={Props.offersNumber}/>}
        />
        <Route
          path={AppRoutes.login}
          element={<Login/>}
        />
        <Route
          path={AppRoutes.room}
          element={<Property/>}
        />
        <Route
          path='*'
          element={<NotFoundScreen/>}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
