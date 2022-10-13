export const validateUserLoginForm = (values) => {
    const errors = {};
    const { username, password } = values;
    
    if (!username) {
        errors.username = 'Require';
    } else if (username.length < 6) {
        errors.username = 'Must be at least 6 characters';
    } else if (username.length > 15) {
        errors.username = 'Must be less than 15 characters';
    }

    if (!password) {
        errors.password = 'Require';
    } else if (password.length < 8 ) {
        errors.password = 'Password must be at least 8 characters';
    }
};