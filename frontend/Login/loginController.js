let users = []; // In-memory storage for users (for demo purposes)

// Sign Up User (POST)
exports.signUpUser = (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    // Check if all required fields are provided
    if (!firstName || !lastName || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    // Check if the email already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(400).json({ message: "Email already registered" });
    }

    // Add the new user to the in-memory users array
    const newUser = {
        id: users.length + 1,
        firstName,
        lastName,
        email,
        password, // In a real app, make sure to hash the password before saving
    };

    users.push(newUser);

    // Respond with the new user data
    res.status(201).json({
        message: "User registered successfully",
        user: { id: newUser.id, firstName: newUser.firstName, lastName: newUser.lastName, email: newUser.email }
    });
};

// Log In User (POST)
exports.loginUser = (req, res) => {
    const { email, password } = req.body;

    // Check if the user exists
    const user = users.find(u => u.email === email);
    if (!user || user.password !== password) {
        return res.status(401).json({ message: "Invalid email or password" });
    }

    // Respond with a success message and the user data
    res.json({
        message: "Login successful",
        user: { id: user.id, firstName: user.firstName, lastName: user.lastName, email: user.email }
    });
};