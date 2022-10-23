import {Provider} from "react-redux";
import {setupStore} from "./redux";

import {AppRouter} from "./routers";

function App() {
    return (
        <Provider store={setupStore()}>
            <AppRouter/>
        </Provider>
    );
}

export default App;
