// routes example
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<NotFound />} />   
</Routes>


//protected routes example

function ProtectedRoute({ children }) {
    const {user, isLoading} = useAuth();
    if (isLoading) {
        return <LoadingSpinner />;
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }
    return children;
}

// use it like this
<Routes>
    <Route path="/dashboard" element={
        <ProtectedRoute>
            <Dashboard />
        </ProtectedRoute>
    } />
</Routes>