// App.jsx

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext.jsx';
import ProtectedRoute from './contexts/ProtectedRoute.jsx';
import NavBar from './Navbar.jsx';
import './App.css'; // Assuming your CSS is in this file

// Lazy load components
const HomePage = lazy(() => import('./HomePage.jsx'));
const LoginPage = lazy(() => import('./components/Auth/LoginPage.jsx'));
const SignupPage = lazy(() => import('./components/Auth/SignupPage.jsx'));
const DashboardPage = lazy(() => import('./DashboardPage.jsx'));
const NotFoundPage = lazy(() => import('./NotFound.jsx'));
const BarcodeGenerator = lazy(() => import('./BarcodeGenerator.jsx'));
const Register = lazy(() => import('./Register.jsx'));
const PatientList = lazy(() => import('./components/Patient/PatientList.jsx'));
const AcceptedPatients = lazy(() => import('./components/Patient/AcceptedPatients.jsx'));
const TestBooking = lazy(() => import('./components/Test/testList.jsx'));
const Patient = lazy(() => import('./Patient.jsx'));
const TestBookingsList = lazy(() => import('./Text.jsx'));
const AccountingPage = lazy(() => import('./accounting.jsx'));
const PrintedTests = lazy(() => import('./master.jsx'));
const About = lazy(() => import('./Profile.jsx'));
const TestBookings = lazy(() => import('./generalscreening.jsx'));
const TestBookingmen = lazy(() => import('./malescreening.jsx'));
const OsamedicRecordsb12sitescom = lazy(() => import('./OsamedicRecordsb12sitescom.jsx'));

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <NavBar />
        <div className="main-content">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/barcode" element={<BarcodeGenerator />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/accepted-patients"
                element={
                  <ProtectedRoute>
                    <AcceptedPatients />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/patients"
                element={
                  <ProtectedRoute>
                    <PatientList />
                  </ProtectedRoute>
                }
              />
              <Route
  path="/test-booking"
  element={
    console.log('TestBooking Route Matched') || <TestBooking />
  }
/>

              <Route
                path="/test-bookings"
                element={
                  <ProtectedRoute>
                    <TestBookingsList />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/patient/:id"
                element={
                  <ProtectedRoute>
                    <Patient />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/masters"
                element={
                  <ProtectedRoute>
                    <PrintedTests />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/accounting/transactions"
                element={
                  <ProtectedRoute>
                    <AccountingPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <OsamedicRecordsb12sitescom />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/general"
                element={
                  <ProtectedRoute>
                    <TestBookings />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/generals"
                element={
                  <ProtectedRoute>
                    <TestBookingmen />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<HomePage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route
                path="/Profile"
                element={
                  <ProtectedRoute>
                    <DashboardPage />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;