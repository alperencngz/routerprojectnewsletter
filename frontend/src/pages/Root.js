import { Outlet } from "react-router-dom"

import MainNavigation from "../components/MainNavigation"

function RootLayout() {

    /* this part can be used to let user know something is loading when they swithch to another
    page and in that page we are using loader function so data is fetched before page opens */
    // const navigation = useNavigation();

    return (
        <>
            <MainNavigation />
            <main>
                {/* {navigation.state === "loading" && <p>Loading...</p>} */}
                <Outlet />
            </main>
        </>
    )
}

export default RootLayout;