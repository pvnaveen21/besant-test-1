import { Navigate, Route, Routes } from "react-router-dom"
import Log from "../Log"
import Home from "../Home"
import Footer from "../Footer"
import Layout from "../Layout"
import AuthGuard from "../AuthGuard"
import ListRendering from "../ListRendering"
import Controlled from "../Controlled"
import UnControlled from "../UnControlled"
import LifeCycleParent from "../LifeCycleParent"
import MyHooks from "../MyHooks"
import Step1 from "../Step1"
import FunParent from "../FunParent"
import Api from "../Api"
import CrudOperations from "../CrudOperations"

function MyRoutes() {
    //   const { id } = useParams();
    // <Route path="api/:id" element={<Api />} />

    return (
        <>
            <Routes>
                <Route element={<AuthGuard/>}>
                    <Route path="/" element={<Layout></Layout>}>
                        <Route index element={<Navigate to="/home" />}></Route>
                        <Route path="home" element={<Home></Home>}></Route>
                        <Route path="listrendering" element={<ListRendering></ListRendering>}></Route>
                        <Route path="controlled" element={<Controlled></Controlled>}></Route>
                        <Route path="nucontrolled" element={<UnControlled></UnControlled>}></Route>
                        <Route path="Lifecycle" element={<LifeCycleParent></LifeCycleParent>}></Route>
                        <Route path="myhooks" element={<MyHooks></MyHooks>}></Route>
                        <Route path="funParent" element={<FunParent></FunParent>}></Route>
                        <Route path="usecontext" element={<Step1></Step1>}></Route>
                        {/* <Route path="api/:id" element={<Api />} /> */}
                        <Route path="api/:id" element={<Api />} />
                        <Route path="crud" element={<CrudOperations></CrudOperations>}></Route>

                    </Route>
                </Route>

                {/* <Route index element={<Navigate to="/login" />}></Route> */}
                <Route path="login" element={<Log></Log>}></Route>
            </Routes>
        </>
    )
}

export default MyRoutes
