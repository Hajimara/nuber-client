import React from "react";
import { graphql } from "react-apollo";
import GlobalStyle from "../../global-styles";
import { theme } from '../../theme';
import { ThemeProvider } from '../../typed-components';
import AppPresenter from "./AppPresenter"
import { IS_LOGGED_IN } from "./AppQueries";




const AppContainer:any = ({ data }) =>(
    <>
        <GlobalStyle/>
        <ThemeProvider theme={theme}>
        <AppPresenter isLoggedIn={data.auth.isLoggedIn}/>
      </ThemeProvider>
    </>
);

export default graphql(IS_LOGGED_IN)(AppContainer);


// AppQueries.ts 에서 가져온 데이터로 
// Presenter.tsx에 넘겨 컴포넌트를 완성 시킨다.

//  typesciprt 한줄 무시 => tslint:disable-next-line