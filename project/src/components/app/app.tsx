import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Property from '../../pages/property/property';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';

import {AppRoutes} from '../../const';
import {offers} from '../../mocks/offers';


function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoutes.root}
          element={<Main offerList={offers}/>}
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
          path='*'
          element={<NotFoundScreen/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
