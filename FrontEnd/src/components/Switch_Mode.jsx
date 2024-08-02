import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import { FaCloudSun } from "react-icons/fa6";
import { FaCloudMoon } from "react-icons/fa";

export default function Switch_Mode() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      isIconOnly
      variant="light"
      color={theme === "dark" ? "secondary" : "warning"}
      onPress={() => {
        switch (theme) {
          case "dark":
            setTheme("light");
            break;
          case "light":
            setTheme("dark");
            break;
          default:
            break;
        }
      }}
    >
      {theme === "dark" ? <FaCloudMoon size={28} /> : <FaCloudSun size={28} />}
    </Button>
  );
}
