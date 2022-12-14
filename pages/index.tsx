import ExternalLink from '@/components/external-link';
import PageLayout from '@/components/page-layout';
import {
  Button,
  Center,
  Divider,
  Heading,
  HStack,
  Image,
  Link,
  Skeleton,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Trans, useTranslation } from 'react-i18next';
import { FiExternalLink } from 'react-icons/fi';
import { ImSphere } from 'react-icons/im';
import { GITHUB_PROFILE, WEBSITE } from 'src/constants';

const IndexPage = () => {
  const { t } = useTranslation();

  return (
    <PageLayout
      title='Home'
      description='A starter kit for projects at Abner Development.'
    >
      <Stack
        spacing={4}
        py={12}
        align='center'
        h='100vh'
        w='100%'
        direction={{ base: 'column', md: 'row' }}
      >
        <VStack
          spacing={2}
          align='start'
          w={{ base: '100%', md: '50%' }}
          py={{ base: 20, md: 0 }}
        >
          <Heading as='h1'>Brandon</Heading>
          <Divider />
          <Text color='gray.500' align='justify'>
            <Trans i18nKey='excerpt'>
              <strong>Loving Husband</strong>
              by day,
              <strong>mad developer</strong>
              by night. Passionate about computer science and
              <strong>new technologies</strong>, currently
              <ExternalLink href='https://nextjs.org/'>
                Next.js
              </ExternalLink>&{' '}
              <ExternalLink href='https://chakra-ui.com/'>
                Chakra UI
              </ExternalLink>
              , Come check it out!
            </Trans>
          </Text>
          <HStack
            spacing={4}
            w='full'
            justify={{ base: 'center', md: 'flex-start' }}
          >
            <Link href={WEBSITE} isExternal>
              <Button
                colorScheme='brand'
                variant='ghost'
                rightIcon={<ImSphere />}
              >
                Website
              </Button>
            </Link>
            <Link href={GITHUB_PROFILE} isExternal>
              <Button
                colorScheme='brand'
                variant='ghost'
                rightIcon={<FiExternalLink />}
              >
                Github
              </Button>
            </Link>
          </HStack>
        </VStack>
        <Center w={{ base: '100%', md: '50%' }}>
          <Image
            src='/assets/images/home.jpg'
            h={500}
            fit='cover'
            fallback={<Skeleton w={{ base: '100%', md: '50%' }} h={500} />}
            alt=''
          />
        </Center>
      </Stack>
    </PageLayout>
  );
};

export default IndexPage;
