'use client';

import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  HStack,
  StackProps,
  Stack,
} from '@chakra-ui/react';

export const ListItem = (props: StackProps) => {
  const { children, ...rest } = props;
  return (
    <HStack as='li' spacing='20px' {...rest} alignItems='start'>
      <Text w='22px' h='22px'>
        ∅
      </Text>
      <Text textAlign={['left', 'left', 'center']}>{children}</Text>
    </HStack>
  );
};

function Pricing() {
  return (
    <Box mx='6'>
      <Box
        as='section'
        maxW='994px'
        margin='auto'
        mt='-64'
        borderRadius='xl'
        overflow='hidden'
        boxShadow='20px 10px 50px 5px'
      >
        <Flex direction={['column', 'column', 'row']}>
          {/* left box */}
          <Box bg='#F0EAFB' p='60px'>
            <Text fontSize='2xl' fontWeight='extrabold'>
              Premium PRO
            </Text>
            <Heading as='h3' fontSize={['5xl', '5xl', '6xl']} mt='4'>
              $329
            </Heading>
            <Text color='#171823' fontSize='lg' fontWeight='medium' mt='2'>
              billed just once
            </Text>
            <Button colorScheme='purple' size='lg' w='282px' mt='6'>
              Get Started
            </Button>
          </Box>
          {/* right box */}
          <Box p='60px' fontSize='lg' bg='white'>
            <Text textAlign='left'>
              Access these features when you get this pricing package business.
            </Text>
            <Stack as='ul' spacing='5' pt='6'>
              <ListItem>International calling and messaging API</ListItem>
              <ListItem>Adding phone numbers</ListItem>
              <ListItem>Automated messages via Zapier</ListItem>
              <ListItem>24/7 support and consulting</ListItem>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Pricing;
