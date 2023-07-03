import { RouteObject } from "react-router-dom";
import { FormLogin } from "../module/FormLogin";
import { FromRegister } from "../module/FormRegister";

const router: RouteObject[] = [
    {
        path: '/login',
        element: <FormLogin></FormLogin>
    },
    {
        path: '/register',
        element: <FromRegister></FromRegister>
    },
    {
        index: true,
        element: <FormLogin></FormLogin>
    }
]

export default router