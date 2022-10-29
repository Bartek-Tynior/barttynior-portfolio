import { Button } from "@chakra-ui/react"

export const ButtonGradient = ({ children, rightIcon }) => {
    return (
        <Button rightIcon={rightIcon} >
            {children}
        </Button>
    )
}