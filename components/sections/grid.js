// import NextLink from 'next/link'
// import Image from 'next/image'
import { motion } from "framer-motion";
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global, css } from '@emotion/react'
import { useState, useEffect, useRef } from "react";

export const Carousel = ({ children }) => {
        const [width, setWidth] = useState(0)
        const carousel = useRef();

        useEffect(() => {
            setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
        }, []);


        return (
            <motion.div ref={carousel} className="carousel" whileTap={{cursor: "Grabbing"}}>
                <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className="inner-carousel">
                    {children}
                </motion.div>
            </motion.div>
        )
}

export const GridCard = ({children, href, title}) => {
    return (
        <Box minH="300px" minW="200px" mr="30px" className='gridCard' textAlign="center">
            <LinkBox cursor="pointer">
                <LinkOverlay href={href} target="_blank">
                    <Text mt={2}>{title}</Text>
                </LinkOverlay>
                <Text fontSize={14}>{children}</Text>
            </LinkBox>
        </Box>
    )
}

export const GridStyle = () => (
    <Global
      styles={css`
        .carousel {
            cursor: grab;
            overflow: hidden;
            width: 50%;
        }

        .inner-carousel {
            display: flex;
            justify-content: central;
        }

        .gridCard {
            border-style: solid;
            border-width: 5px;
            border-radius: 15px;
        }

      `}
    />
)