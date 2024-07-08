// Example login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
    const { data, errors } = await server.executeOperation({
    query: gql`query { getUser(email: "${email}"){ id name 
   password } }`
    });
    // Handle GraphQL query errors
    if (errors) {
    console.error(errors);
    return res.status(500).send(errors);
    }
    const user = data.getUser;
    if (!user) {
    return res.status(401).send({ message: 'Invalid credentials' });
    }
    res.status(200).json({ message: 'Login successful', 
   user });
    } catch (err) {
    console.error('Error in login:', err);
    res.status(500).json({ message: 'Internal server error' });
    }
   });
    // Example logout route
    router.post('/logout', async (req, res) => {
    try {
    res.status(200).send({ message: 'Logged out successfully' });
    } catch (err) {
    res.status(500).send({ message: err.message });
    }
    });
   