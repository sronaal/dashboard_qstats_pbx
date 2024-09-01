import Header from "../../components/common/Header"
import Logo from "../../components/common/Logo"
import Main from "../../components/common/Main"

const HomePage = () => {

    return (

        <>

            <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
                <Logo/>
                <div className="flex flex-col">

                    <Header/>
                    <Main/>
                </div>

            </div>
        </>
    )
}


export default HomePage 