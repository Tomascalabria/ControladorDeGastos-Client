import React, { useContext } from 'react'
import {  Box,  Flex,  Heading,  HStack,  Icon,  Image,  Skeleton,  Stack,  useColorModeValue,} from '@chakra-ui/react'
import { FaArrowRight } from 'react-icons/fa'
import {AuthContext} from '../../Context/AuthContext'
import { Link } from 'react-router-dom'
export const Home = () => {
  const {user}=useContext(AuthContext)
  return (
      <Box
        maxW="7xl"
        mx="auto"
        px={{
          base: '0',
          lg: '12',
        }}
        py={{
          base: '0',
          lg: '12',
        }}
      >
        <Stack
          direction={{
            base: 'column-reverse',
            lg: 'row',
          }}
          spacing={{
            base: '0',
            lg: '20',
          }}
        >
          <Box
            width={{
              lg: 'sm',
            }}
            transform={{
              base: 'translateY(-50%)',
              lg: 'none',
            }}
            bg={{
              base: useColorModeValue('red.50', 'gray.700'),
              lg: 'transparent',
            }}
            mx={{
              base: '6',
              md: '8',
              lg: '0',
            }}
            px={{
              base: '6',
              md: '8',
              lg: '0',
            }}
            py={{
              base: '6',
              md: '8',
              lg: '12',
            }}
          >
            <Stack
              spacing={{
                base: '8',
                lg: '10',
              }}
            >
              <Stack
                spacing={{
                  base: '2',
                  lg: '4',
                }}
              >
                <Heading size="xl" color={useColorModeValue('blackAlpha.900', 'red.300')}>
                  Preocupate x disfrutar
                </Heading>
                <Heading size="md" fontWeight="normal">
                  De las cuentas nos encargamos nosotros
                </Heading>
              </Stack>
              <HStack spacing="3" color={useColorModeValue('red.500', 'red.300')}>
                {user? <Link to={'/gastos/ver'}   fontWeight="bold" fontSize="lg" >
                  Descubrir
                </Link>: <Link to={'/login'}   fontWeight="bold" fontSize="lg" >
                  Descubrir
                </Link>}
                <Icon color={useColorModeValue('red.500', 'red.300')} as={FaArrowRight} />
              </HStack>
            </Stack>
          </Box>
          <Flex flex="1" overflow="hidden">
            <Image
              src="https://images.unsplash.com/photo-1556742521-9713bf272865?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"              alt="Lovely Image"
              fallback={<Skeleton />}
              maxH="450px"
              minW="300px"
              objectFit="cover"
              flex="1"
            />
            <Image
              display={{
                base: 'none',
                sm: 'initial',
              }}
              src="https://images.unsplash.com/photo-1569937745011-2d2aeb42da12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Friends at a bar "
              fallback={<Skeleton />}
              maxH="450px"
              objectFit="cover"
            />
          </Flex>
        </Stack>
      </Box>
  )}
