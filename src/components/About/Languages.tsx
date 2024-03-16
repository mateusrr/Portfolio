import { IconButton, Link as ChakraLink, Box } from '@chakra-ui/react'
import * as Icons from 'react-icons/si'

// definições para o button das linguagens.
const LanguagesDefinition = ({ href, icon: Icon, ariaLabel }: any) => {
  return (
    <IconButton
      fontSize={{ base: '20px', md: '30px' }}
      variant="outline"
      border="none"
      color="gray.100"
      as={ChakraLink}
      aria-label={ariaLabel}
      href={href}
      target="_blank"
      bg="blue.500"
      p={{ base: 'auto', md: '3' }}
      m={1}
      h="45px"
      borderRadius={8}
      _hover={{
        bg: 'blue.600',
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
          ariaLabel="html5"
          icon={Icons.SiHtml5}
          href="https://html.spec.whatwg.org/"
        />
        <LanguagesDefinition
          ariaLabel="css3"
          icon={Icons.SiCss3}
          href="https://www.w3.org/TR/css-2018/"
        />
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
          ariaLabel="prisma"
          icon={Icons.SiPrisma}
          href="https://www.prisma.io/"  
        />
        <LanguagesDefinition
          ariaLabel="prismic"
          icon={Icons.SiPrismic}
          href="https://www.prismic.io/"  
        />
      </Box>
    </>
  )
}
