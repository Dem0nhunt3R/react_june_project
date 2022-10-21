import {Provider} from "react-redux";

import {AppRouter} from "./routers/AppRouter";
import {setupStore} from "./redux";

function App() {
    return (
        <Provider store={setupStore()}>
            <AppRouter/>
        </Provider>
    );
}

export default App;
