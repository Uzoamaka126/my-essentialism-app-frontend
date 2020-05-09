import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Text, Image, Button} from '@chakra-ui/core'
// Import assets
import BgImg from '../assets/bg-img-2.svg';
import Park from '../assets/Video park.svg';
// Import Components
import Navbar from '../Components/_navigation_/Navbar';
import { getToken } from '../Utilities/authenticationChecker';

export default function Home(props) {
    const token = getToken();

    return (
        <Box>
            <Navbar />
            <Flex justify="space-between" alignItems="center" >
                <Box>
                    <Box>
                        <Text>Gain more control of your life as you go</Text>
                        <Text>There is so much noise in the world today and it takes so little to get us distracted. 
                            We are here to help you discover values that helps cultivate your life</Text>
                        {token
                            ?
                            <Link to="/signup">
                                <Button>Get Started</Button>
                            </Link>
                            :
                            <Link to="/dashboard">
                                <Button>Start Now</Button>
                            </Link>}
                    </Box>
                    <Box>
                        <Image src={BgImg} alt="background" />
                    </Box>
                </Box>
            </Flex>
            <Flex justifyContent="space-between" alignItems="center" >
                <Box>
                    <Box>
                        <Text>YOU CAN CHOOSE YOUR VALUES</Text>
                        <Text>Choose What Matters To You</Text>
                        <Text>With Essentialism, you get to list your values and what is most important to you as a person. 
                            We are here to help you discover values that helps cultivate your life</Text>
                    </Box>
                </Box>
            </Flex>
            <Flex justifyContent="space-between" alignItems="center" >
                <Box>
                    <Box>
                        <Image src={Park} alt="background"/>
                    </Box>
                    <Box>
                        <Text>YOU CAN MANAGE YOUR TIME</Text>
                        <Text>Sit down and relax</Text>
                        <Text>
                            There is so much noise in the world today and it takes so little to get us distracted. 
                            We are here to help you discover values that helps cultivate your life
                        </Text>
                    </Box>
                </Box>
            </Flex>
      </Box>
    )
}