import {Route, BrowserRouter, Routes} from 'react-router-dom';

import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Property from '../../pages/property/property';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';

import {AppRoutes} from '../../const';


function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoutes.root}
          element={<Main/>}
        />
        <Route
          path={AppRoutes.login}
          element={<Login/>}
        />
        <Route
          path={AppRoutes.offer}
          element={<Property/>}
        />
        <Route
          path={AppRoutes.notFound}
          element={<NotFoundScreen/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
