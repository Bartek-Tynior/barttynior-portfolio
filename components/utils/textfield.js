import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";

const TextField = styled.p`
    text-align: justify;
    text-indent: 1em;
    hyphens: auto;
`

const textBox = ({children}) => {
    return (
        <Box
        w="50%"
        textAlign="center"
        >
            <TextField>
                {children}
            </TextField>
        </Box>
    )
}

export default textBox