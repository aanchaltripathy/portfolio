import React from 'react';
import { Text, TextInput, View } from 'react-native';

interface InputFieldProps {
  label: string;
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  containerStyle?: string;
  inputStyle?: string;
  editable?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  containerStyle = '',
  inputStyle = '',
  editable = true,
  multiline = false,
  numberOfLines = 1,
}) => {
  return (
    <View className={`mb-4 ${containerStyle}`}>
      <Text className="text-sm font-JakartaMedium text-gray-700 mb-2">
        {label}
      </Text>
      <TextInput
        className={`w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:border-primary ${inputStyle}`}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        editable={editable}
        multiline={multiline}
        numberOfLines={numberOfLines}
        style={{
          fontFamily: 'JakartaRegular',
        }}
      />
    </View>
  );
};

export default InputField;













