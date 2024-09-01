import Header from "../../components/common/Header"
import Logo from "../../components/common/Logo"

const HomePage = () => {

    return (

        <>

            <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
                <Logo/>
                <div className="flex flex-col">

                    <Header/>
                </div>

            </div>
        </>
    )
}


export default HomePage 