import { Flex, HStack, IconButton, Link as ChakraLink } from '@chakra-ui/react'
import * as Icons from 'react-icons/si'

const LanguagesDefinition = ({ href, icon: Icon, ariaLabel }: any) => {
  return (
    <IconButton
      size="lg"
      variant="outline"
      bg="yellow.500"
      border="none"
      color="white"
      _hover={{ bg: 'yellow.600' }}
      as={ChakraLink}
      aria-label={ariaLabel}
      href={href}
      target="_blank"
    >
      <Icon />
    </IconButton>
  )
}

export default function Languages() {
  return (
    <Flex flexDir="column" justify="center" align="center" gap={3} m={5}>
      <HStack>
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
          ariaLabel="sass"
          icon={Icons.SiSass}
          href="https://sass-lang.com/"
        />
        <LanguagesDefinition
          ariaLabel="styled-component"
          icon={Icons.SiStyledcomponents}
          href="https://styled-components.com/"
        />
        <LanguagesDefinition
          ariaLabel="chakraui"
          icon={Icons.SiChakraui}
          href="https://chakra-ui.com/"
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
          ariaLabel="reactjs"
          icon={Icons.SiReact}
          href="https://reactjs.org/"
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
      </HStack>
    </Flex>
  )
}
