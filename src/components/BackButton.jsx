import { Button } from "@mui/material";
import { useRouter } from "@tanstack/react-router";

const BackButton = ({ text = "Voltar", className = "" }) => {
  const router = useRouter();
  const handleBack = () => {
    router.history.back();
  };

  return (
    <Button onClick={handleBack} className={className}>
      {text}
    </Button>
  );
};

export default BackButton;
