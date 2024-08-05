import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/fixed/header";
import LangingPage from "./components/landingPage/langingpage";
import Footer from "./components/fixed/footer";
import Login from "./components/auth/login";
import Register from "./components/auth/regester";
import OwnerFlatPage from "./pages/owner/ownerFlatPage";
import OwnerPasswordPage from "./pages/owner/ownerPasswordPage";
import OwnerUsersPage from "./pages/owner/ownerUsersPage";
import OwnerEditProfilePage from "./pages/owner/ownerEditProfilePage";
import OwnerAllFlatsPage from "./pages/owner/ownerAllFlatsPage";
import OwnerDashBoardPage from "./pages/owner/adminDashBoardPage";
import OwnerNotificationPage from "./pages/owner/adminNotificationPage";
import AdminDashBoardPagead from "./pages/admin/admindashPage";
import AdminNotifiPage from "./pages/admin/adminNotifPage";
import AdminPasswordPage from "./pages/admin/adminEditPasswordPage";
import AdminUsersPage from "./pages/admin/adminUsersPage";
import AdminEditProf from "./pages/admin/adminEditProfPage";
import AdminPenddingPage from "./pages/admin/adminPenddingpage";
import UserAllFlatsPage from "./pages/user/userAllFlatsPage";
import UserApartmentDetails from "./pages/user/userApartmentDetailsPage";
import UserApartmentDetailsPage from "./pages/user/userApartmentDetailsPage";
import ForgetPassword from "./components/auth/forgetPassword";
import EmailForget from "./components/auth/emailuser";
import CodeNumber from "./components/auth/codeNumber";
import OwnerEditApartmentPage from "./pages/owner/ownerEditApartment";
import ProtectRouteHock from "./components/protectRoutes/ProtectRoutesHook";
import ProtectedRoute from "./components/protectRoutes/protectRoutes";
import UseInformationPage from "./pages/user/useInformationPage";
import UserUpdatePasswordPage from "./pages/user/userUpdatePassword";
import ScrollToTop from "./components/ScrollToTop";
import AdminViewUserInformation from "./components/admin/adminViewUserInformation";
import AdminViewUserInformationPage from "./pages/admin/adminViewUserInformationPage";
import AdminOwnersPage from "./pages/admin/adminOwnersPage";
import Error404 from "./pages/error404";
import RequierBack from "./components/protectRoutes/requierBack";
import ContactUsPage from "./pages/utility/contactUs";
import AboutUsPage from "./pages/utility/aboutUs";

const App = () => {
  const [isUser, isAdmin, isOwner, userDate] = ProtectRouteHock();

  return (
    <>
      <Header></Header>

      <BrowserRouter>
        <ScrollToTop></ScrollToTop>
        <Routes>
          <Route path="/" element={<LangingPage></LangingPage>}></Route>
          <Route path="/*" element={<Error404></Error404>}></Route>
          <Route element={<RequierBack></RequierBack>}>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
          </Route>

          <Route
            path="/forget-password"
            element={<ForgetPassword></ForgetPassword>}
          ></Route>
          <Route
            path="/email-address"
            element={<EmailForget></EmailForget>}
          ></Route>
          <Route
            path="/code-confirm"
            element={<CodeNumber></CodeNumber>}
          ></Route>

          <Route element={<ProtectedRoute auth={isOwner}></ProtectedRoute>}>
            <Route
              path="/owner/dashboard"
              element={<OwnerDashBoardPage></OwnerDashBoardPage>}
            ></Route>
            <Route
              path="/owner/notification"
              element={<OwnerNotificationPage></OwnerNotificationPage>}
            ></Route>
            <Route
              path="/owner/flat"
              element={<OwnerFlatPage></OwnerFlatPage>}
            ></Route>
            <Route
              path="/owner/edit-flat/:id"
              element={<OwnerEditApartmentPage></OwnerEditApartmentPage>}
            ></Route>
            <Route
              path="/owner/update-password"
              element={<OwnerPasswordPage></OwnerPasswordPage>}
            ></Route>
            <Route
              path="/owner/user"
              element={<OwnerUsersPage></OwnerUsersPage>}
            ></Route>
            <Route
              path="/owner/update-profile"
              element={<OwnerEditProfilePage></OwnerEditProfilePage>}
            ></Route>
            <Route
              path="/owner/all-flats"
              element={<OwnerAllFlatsPage></OwnerAllFlatsPage>}
            ></Route>
          </Route>

          {/* admin */}
          <Route element={<ProtectedRoute auth={isAdmin}></ProtectedRoute>}>
            <Route
              path="/admin/dashboard"
              element={<AdminDashBoardPagead></AdminDashBoardPagead>}
            ></Route>
            <Route
              path="/admin/user-information/:id"
              element={
                <AdminViewUserInformationPage></AdminViewUserInformationPage>
              }
            ></Route>
            <Route
              path="/admin/notification"
              element={<AdminNotifiPage></AdminNotifiPage>}
            ></Route>
            <Route
              path="/admin/update-password"
              element={<AdminPasswordPage></AdminPasswordPage>}
            ></Route>
            <Route
              path="/admin/users"
              element={<AdminUsersPage></AdminUsersPage>}
            ></Route>
            <Route
              path="/admin/owners"
              element={<AdminOwnersPage></AdminOwnersPage>}
            ></Route>
            <Route
              path="/admin/update-profile"
              element={<AdminEditProf></AdminEditProf>}
            ></Route>
            <Route
              path="/admin/pending"
              element={<AdminPenddingPage></AdminPenddingPage>}
            ></Route>
          </Route>

          {/* users */}
          <Route
            path="/user/view-apartments"
            element={<UserAllFlatsPage></UserAllFlatsPage>}
          ></Route>
          <Route
            path="/user/apartment-details/:id"
            element={<UserApartmentDetailsPage></UserApartmentDetailsPage>}
          ></Route>
          <Route
            element={<ProtectedRoute auth={isUser || isOwner}></ProtectedRoute>}
          >
            <Route
              path="/user/information"
              element={<UseInformationPage></UseInformationPage>}
            ></Route>
            <Route
              path="/user/password"
              element={<UserUpdatePasswordPage></UserUpdatePasswordPage>}
            ></Route>
          </Route>
          <Route
            path="/contactus"
            element={<ContactUsPage></ContactUsPage>}
          ></Route>
          <Route path="/aboutus" element={<AboutUsPage></AboutUsPage>}></Route>
        </Routes>
      </BrowserRouter>

      <Footer></Footer>
    </>
  );
};

export default App;
