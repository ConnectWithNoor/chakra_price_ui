'use client';

import { HStack, Text, StackProps, Box } from '@chakra-ui/react';

function Feature(props: StackProps) {
  const { children, ...rest } = props;
  return (
    <HStack {...rest} spacing='6'>
      <Text>∅</Text>

      <Text textAlign='left' fontSize='lg' fontWeight='bold'>
        {children}
      </Text>
    </HStack>
  );
}

function Features() {
  return (
    <Box maxW='1024px' m='auto' pt='60px' pb='8'>
      <HStack px='12' spacing='5'>
        <Feature> 30 days money back guarantee</Feature>
        <Feature> No setup fees 100% hassle-free</Feature>
        <Feature> No monthly subscription pay once and for all</Feature>
      </HStack>
    </Box>
  );
}

export default Features;
