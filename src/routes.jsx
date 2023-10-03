import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
// import { history } from "./helpers/history"
import { Suspense, lazy } from "react"

import PrivateRoute from "./helpers/PrivateRoutes.jsx"
import PublicRoute from "./helpers/PublicRoutes.jsx"

import App from "./components/layouts/App.jsx"
import PublicApp from "./components/layouts/PublicApp.jsx"
import AuthorisedLayout from "./components/layouts/AuthorisedLayout.jsx"

const LandingPage = lazy(() => import("./pages/landing/LandingPage.jsx"))
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard.jsx"))
const AuthPages = lazy(() => import("./pages/auth"))
const LoginPage = lazy(() => import("./pages/auth/login/LoginPage.jsx"))
const SignupPage = lazy(() => import("./pages/auth/signup/SignupPage.jsx"))
const PrivacyPage = lazy(() => import("./pages/termspolicies/Privacy.jsx"))

const AppRoutes = () => {
    return (
        // history={history}
        <BrowserRouter >
            <Routes>
                <Route
                    element={
                        <PrivateRoute>
                            <App />
                        </PrivateRoute>
                    }
                >
                    <Route path="/" element={<AuthorisedLayout />}>
                        <Route index element={<Suspense fallback={""}><Dashboard /></Suspense>} />
                    </Route>
                </Route>
                <Route
                    element={
                        <PublicRoute>
                            <PublicApp />
                        </PublicRoute>
                    }
                >
                    <Route path="/auth" element={<AuthPages />}>
                        <Route path="login" element={<Suspense fallback={""}><LoginPage /></Suspense>} />
                        <Route path="signup" element={<Suspense fallback={""}><SignupPage /></Suspense>} />
                    </Route>
                </Route>
                <Route path="/landing" element={<Suspense fallback={""}><LandingPage /></Suspense>} />
                <Route path="/privacy" element={<Suspense fallback={""}><PrivacyPage /></Suspense>} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes