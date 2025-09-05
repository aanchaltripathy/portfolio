import React from 'react';
import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  className = '',
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-primary';
      case 'secondary':
        return 'bg-secondary';
      case 'outline':
        return 'bg-transparent border border-primary';
      default:
        return 'bg-primary';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'px-4 py-2';
      case 'medium':
        return 'px-6 py-3';
      case 'large':
        return 'px-8 py-4';
      default:
        return 'px-6 py-3';
    }
  };

  const getTextColor = () => {
    switch (variant) {
      case 'outline':
        return 'text-primary';
      default:
        return 'text-white';
    }
  };

  return (
    <TouchableOpacity
      className={`${getVariantClasses()} ${getSizeClasses()} rounded-lg items-center justify-center ${className} ${
        disabled ? 'opacity-50' : ''
      }`}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'outline' ? '#0CC25F' : '#FFFFFF'} />
      ) : (
        <Text
          className={`font-JakartaMedium text-base ${getTextColor()}`}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;













