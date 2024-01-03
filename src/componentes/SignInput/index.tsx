import { TextInput, TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

import { Container, Input } from "./styles";
import { Placeholder } from "phosphor-react-native";

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
  IconSvg: React.ElementType; // Tipo explícito para IconSvg
  placeholder: string;
  value: string;
  password: boolean;
  onChangeText: (text: string) => void;
}

export default function SignInput({ IconSvg, placeholder, value, onChangeText, password}: Props) {
    const { COLORS } = useTheme();
  
    return (
     <Container>
      <IconSvg width="24" height="24" fill="#E95401"/>
      <Input
        placeholder={placeholder}
        placeholderTextColor="#E95401"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password}
      />
     </Container>
    )
  }