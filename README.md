# Uber Clone - React Native App

A full-stack Uber clone application built with React Native, Expo, and modern mobile development technologies.

## 🚀 Features

- **User Authentication** - Secure login/signup with Clerk
- **Real-time Location Services** - GPS tracking and geolocation
- **Interactive Maps** - Google Maps integration with markers
- **Driver Booking System** - Select and book drivers
- **Ride Confirmation** - Detailed ride information and payment
- **User Profile Management** - Personal information and settings
- **Modern UI/UX** - Beautiful interface with Tailwind CSS (NativeWind)
- **State Management** - Zustand for efficient state handling

## 🛠️ Tech Stack

- **Frontend**: React Native with Expo
- **Navigation**: Expo Router
- **Authentication**: Clerk
- **Styling**: NativeWind (Tailwind CSS for React Native)
- **State Management**: Zustand
- **Maps**: React Native Maps
- **Location Services**: Expo Location
- **Icons**: React Native Vector Icons
- **TypeScript**: Full type safety

## 📱 Screens

1. **Authentication**
   - Sign In
   - Sign Up

2. **Main App**
   - Home Dashboard
   - Interactive Map
   - Chat (placeholder)
   - User Profile

3. **Ride Flow**
   - Location Selection
   - Driver Selection
   - Ride Confirmation

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator or Android Emulator

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd uber-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Run on device/simulator**
   ```bash
   # iOS
   npm run ios
   
   # Android
   npm run android
   
   # Web
   npm run web
   ```

## 📁 Project Structure

```
uber-clone/
├── app/                    # Expo Router pages
│   ├── (auth)/            # Authentication screens
│   ├── (tabs)/            # Main app tabs
│   └── _layout.tsx        # Root layout
├── components/            # Reusable components
├── constants/             # App constants and assets
├── lib/                   # Utility functions
├── store/                 # Zustand state management
├── types/                 # TypeScript type definitions
├── assets/                # Images and icons
└── ...
```

## 🔧 Configuration

### Clerk Authentication
1. Sign up at [clerk.com](https://clerk.com)
2. Create a new application
3. Copy your publishable key
4. Add it to your `.env` file

### Google Maps
1. Get a Google Maps API key
2. Configure it in your Expo app.json

## 📱 Features in Detail

### Authentication
- Secure user registration and login
- Social authentication support
- Session management

### Location Services
- Real-time GPS tracking
- Address geocoding
- Location permissions handling

### Map Integration
- Interactive Google Maps
- Custom markers for drivers
- Route visualization
- Location selection

### Driver Booking
- Available drivers display
- Driver selection interface
- Ride confirmation flow
- Payment integration (Stripe ready)

## 🎨 UI/UX Features

- **Modern Design**: Clean and intuitive interface
- **Responsive Layout**: Works on all screen sizes
- **Smooth Animations**: Enhanced user experience
- **Dark/Light Mode**: Theme support
- **Accessibility**: Screen reader friendly

## 🔒 Security

- Secure authentication with Clerk
- Environment variable protection
- Input validation
- Secure storage for tokens

## 📊 Performance

- Optimized bundle size
- Efficient state management
- Lazy loading for screens
- Image optimization

## 🧪 Testing

```bash
# Run linting
npm run lint

# Fix linting issues
npm run lint:fix

# Type checking
npm run type-check

# Format code
npm run format
```

## 🚀 Deployment

### Expo Build
```bash
# Build for iOS
expo build:ios

# Build for Android
expo build:android
```

### EAS Build (Recommended)
```bash
# Install EAS CLI
npm install -g @expo/eas-cli

# Configure EAS
eas build:configure

# Build for production
eas build --platform all
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Built with [Expo](https://expo.dev/)
- Authentication by [Clerk](https://clerk.com/)
- Maps by [React Native Maps](https://github.com/react-native-maps/react-native-maps)
- Styling with [NativeWind](https://www.nativewind.dev/)

## 📞 Support

For support, email support@example.com or create an issue in the repository.

---

**Note**: This is a demonstration project. For production use, ensure proper security measures, error handling, and testing are implemented.
