export interface User {
  email: string;
  password: string;
}

export class AuthService {
  signup(email: string, password: string): { success: boolean, message: string } {
    let users: User[] = JSON.parse(localStorage.getItem('users') || '[]');

    if (users.some(user => user.email === email)) {
      return { success: false, message: 'Email is already taken' };
    }

    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));
    return { success: true, message: 'Sign up successful' };
  }

  login(email: string, password: string): { success: boolean, message: string } {
    let users: User[] = JSON.parse(localStorage.getItem('users') || '[]');

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      return { success: true, message: 'Login successful' };
    }

    return { success: false, message: 'Invalid email or password' };
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }

  getCurrentUser(): User | null {
    return JSON.parse(localStorage.getItem('currentUser') || 'null');
  }
}