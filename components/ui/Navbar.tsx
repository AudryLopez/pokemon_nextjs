import { useTheme } from "@nextui-org/react";
import { Text } from "@nextui-org/react";
import Image from "next/image";

function Navbar() {
    const { theme } = useTheme()
    return (
      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "start",
          padding: "0 20px",
          backgroundColor: theme?.colors.gray900.value,
        }}
      >
        <Image 
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
            alt="Pokemon"
            width={70}
            height={50}
        />
        <Text color="white" h3>
          Pokemon
        </Text>
      </div>
    );
}

export default Navbar;