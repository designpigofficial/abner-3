import ThemeButton from '@/components/theme-button';
import { HStack } from '@chakra-ui/react';
import { Link, Box } from '@chakra-ui/react';
import NextLink from 'next/link'


const Header = () => {
  return (
    <HStack
      as='header'
      position='fixed'
      top='0'
      p={8}
      zIndex='tooltip'
      justify='space-between'
      align='center'
      w='100%'
    >
      <ThemeButton />
      <Box>
      <NextLink href='/' passHref>
        <Link mx={10}>home</Link>
      </NextLink>
      <NextLink href='/about' passHref>
        <Link mx={10}>about</Link>
      </NextLink>
      <NextLink href='/services' passHref>
        <Link mx={10}>services</Link>
      </NextLink>
      <NextLink href='/projects' passHref>
        <Link mx={10}>projects</Link>
      </NextLink>
      <NextLink href='/contact' passHref>
        <Link mx={10}>contact</Link>
      </NextLink>
      </Box>
    </HStack>
  );
};

export default Header;
