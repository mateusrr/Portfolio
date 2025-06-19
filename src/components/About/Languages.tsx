import {
  IconButton,
  Link as ChakraLink,
  Box,
  useColorModeValue,
} from '@chakra-ui/react'
import * as Icons from 'react-icons/si'

// definições para o button das linguagens.
const LanguagesDefinition = ({ href, icon: Icon, ariaLabel }: any) => {
  const colorBg = useColorModeValue('gray.900', 'gray.100')
  const colorText = useColorModeValue('gray.100', 'gray.900')
  return (
    <IconButton
      fontSize={{ base: '20px', md: '30px' }}
      variant="outline"
      border="none"
      color={colorText}
      as={ChakraLink}
      aria-label={ariaLabel}
      href={href}
      target="_blank"
      bg={colorBg}
      p={{ base: 'auto', md: '3' }}
      m={1}
      h="45px"
      borderRadius={8}
      _hover={{
        bg: 'gray.800',
        color: 'gray.100',
      }}
    >
      <Icon />
    </IconButton>
  )
}

// const LanguageDefinition sendo repassada a cada uma das linguagens separadamente.
export function Languages() {
  return (
    <>
      <Box>
        <LanguagesDefinition
          ariaLabel="js"
          icon={Icons.SiJavascript}
          href="https://www.javascript.com/"
        />
        <LanguagesDefinition
          ariaLabel="ts"
          icon={Icons.SiTypescript}
          href="https://www.typescriptlang.org/"
        />
        <LanguagesDefinition
          ariaLabel="python"
          icon={Icons.SiPython}
          href="https://www.typescriptlang.org/"
        />
        <LanguagesDefinition
          ariaLabel="sass"
          icon={Icons.SiSass}
          href="https://sass-lang.com/"
        />
        <LanguagesDefinition
          ariaLabel="chakraui"
          icon={Icons.SiChakraui}
          href="https://chakra-ui.com/"
        />
        <LanguagesDefinition
          ariaLabel="nextjs"
          icon={Icons.SiNextdotjs}
          href="https://nextjs.org/"
        />
        <LanguagesDefinition
          ariaLabel="nestjs"
          icon={Icons.SiNestjs}
          href="https://nextjs.org/"
        />
        <LanguagesDefinition
          ariaLabel="git"
          icon={Icons.SiGit}
          href="https://git-scm.com/"
        />
        <LanguagesDefinition
          ariaLabel="github"
          icon={Icons.SiGithub}
          href="https://github.com/"
        />
        <LanguagesDefinition
          ariaLabel="reactjs"
          icon={Icons.SiReact}
          href="https://reactjs.org/"
        />
        <LanguagesDefinition
          ariaLabel="styled-component"
          icon={Icons.SiStyledcomponents}
          href="https://styled-components.com/"
        />
        <LanguagesDefinition
          ariaLabel="my-sql"
          icon={Icons.SiMysql}
          href="https://styled-components.com/"
        />
        <LanguagesDefinition
          ariaLabel="mongodb"
          icon={Icons.SiMongodb}
          href="https://styled-components.com/"
        />
        <LanguagesDefinition
          ariaLabel="prisma"
          icon={Icons.SiPrisma}
          href="https://www.prisma.io/"
        />
        <LanguagesDefinition
          ariaLabel="prismic"
          icon={Icons.SiPrismic}
          href="https://www.prismic.io/"
        />
        <LanguagesDefinition
          ariaLabel="firebase"
          icon={Icons.SiFirebase}
          href="https://www.prismic.io/"
        />
        <LanguagesDefinition
          ariaLabel="adobe-photoshop"
          icon={Icons.SiAdobephotoshop}
          href="https://www.adobe.com/products/photoshop.html"
        />
      </Box>
    </>
  )
}
